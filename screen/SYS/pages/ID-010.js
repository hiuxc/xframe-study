// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
	createLineChart2();	
}

function createLineChart2(){
// 생성된 root 구하기
var root = this.linechart2.getroot();
	root.interfaceColors.set("grid", am5.color(0xffffff));
var chart = root.container.children.push(am5xy.XYChart.new(root, {		
}));

let xRenderer = am5xy.AxisRendererX.new(root, {
	minGridDistance:20
}); 
let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "age",
    renderer: xRenderer
  }));
xRenderer.grid.template.setAll({
  forceHidden: true,
});

function createRange(value, axis, label) {
    let rangeDataItem = axis.makeDataItem({
      value: value,
    });
    let range = axis.createAxisRange(rangeDataItem);
    range.get('label').setAll({
      forceHidden: false,
      text: label,
    });
    range.get('grid').setAll({
      forceHidden: false,
	  stroke: am5.color(0xC5C9CE),
      strokeOpacity: 1,
      strokeDasharray: [5, 2],
      location: 1,
    });
 }
  let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
	min: -100000,
    max: 500000,
    renderer: am5xy.AxisRendererY.new(root, {
	 minGridDistance: 25,
	 baseGrid: {
        "disabled": true
      }
	})
  }));
var rendererY = yAxis.get('renderer');
  rendererY.labels.template.set('forceHidden', false);

  //Change Y axis labels at specific value
  createRange(0, yAxis, '');

    let series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    categoryXField: "age",
	stroke: am5.color(0x2D6DD8),
	strokeWidth: 4,
	
  }));


series.strokes.template.setAll({
	strokeWidth: 2,
});


var series2 = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value2",
  categoryXField: "age",
  adjustBulletPosition: false,
  
}));

series2.columns.template.setAll({
  width: 1,
fill: am5.color(0xffffff),
 stroke: am5.color(0x333333),
 strokeWidth:1.5,
 strokeDasharray: [2.5],

});

series2.bullets.push(function(root, series, dataItem){
	 
   if (dataItem.get("valueY")) {	
    return am5.Bullet.new(root, {
    locationY: 1,
    sprite: am5.Circle.new(root, {
      radius: 5,
      stroke: am5.color(0x333333),
	  strokeWidth:2,
      fill: am5.color(0xf0f0f0),
 	 tooltipText: "{type} : {age}",
      showTooltipOn: "always",	  
	  tooltip: am5.Tooltip.new(root, {
	
	  }),
	  tooltipY: 0,
	  tooltipX : 4,		
    }),
  });
  }
});

	
  let data = [
    {
      age: "50세",
      value: 500000,
	  value2: "",	
    },
    {
      age: "55세",
      value: 400000,
	  value2: "400000",
	  type: "은퇴 나이",
    },
    {
      age: "60세",
      value: 300000,
	  value2:""
    },
    {
      age: "65세",
      value: 0,
	  value2:""
    },
    {
      age: "70세",
      value: 0,
	  value2:""
    },
    {
      age: "75세",
      value: 0,
	  value2:"1",
	  type: "경제 수명"
    },
    {
      age: "80세",
      value: 0,
	  value2:""
    },
    {
      age: "85세",
      value: 0,
	  value2:""
    },
    {
      age: "90세",
      value: 0,
	  value2:"100000",
  	type: "플랜 수명"
    },
  ];


  xAxis.data.setAll(data);
  series.data.setAll(data);
series2.data.setAll(data);


series.appear(1000);
series2.appear(1000);

chart.appear(1000, 100);;
}


