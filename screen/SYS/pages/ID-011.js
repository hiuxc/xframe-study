// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
	createdbColumn();	
}

function createdbColumn(){
// 생성된 root 구하기
var root = this.createdbColumn1.getroot();

var chart = root.container.children.push(am5xy.XYChart.new(root, {
	layout: root.verticalLayout,

}));

var data = [
  {
    age: "55세",
    현금유입: 250000,
    현금유출: -50000,
    cashWave: 250000
  },
  {
    age: "56세",
    현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "57세",
    현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "58세",
    현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "59세",
    현금유입: 100000,
    현금유출: -50000,
	cashWave: 0    
  },
  {
    age: "60세",
   현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
{
    age: "61세",
   현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "62세",
   현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "63세",
    현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "64세",
   현금유입: 100000,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "65세",
    현금유입: 100000,
    현금유출: -50000,
	cashWave: 0    
  },
  {
    age: "66세",
    현금유입: 0,
    현금유출: -100000,
	cashWave: 50000
  },
{
    age: "67세",
    현금유입: 0,
    현금유출: -150000,
	cashWave: 100000
  },
  {
    age: "68세",
    현금유입: 0,
    현금유출: -200000,
	cashWave: 150000
  },
  {
    age: "69세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "70세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },
  {
    age: "71세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0   
  },
  {
    age: "72세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },
{
    age: "73세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },
{
    age: "74세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "75세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "76세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "77세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "78세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "79세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "80세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "81세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "82세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "83세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "84세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0
  },{
	age: "85세",
    현금유입: 0,
    현금유출: -50000,
	cashWave: 0,
	
  }
];

var xRenderer = am5xy.AxisRendererX.new(root, {
  minorGridEnabled: true,
  minGridDistance: 60
});
xRenderer.grid.template.setAll({
  forceHidden: true,

});
xRenderer.labels.template.setAll({
  
  
});

var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "age",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {}),
	paddingTop:8
  })
);

xAxis.data.setAll(data);

var yRenderer = am5xy.AxisRendererY.new(root, {  
	minGridDistance: 20
});
yRenderer.grid.template.setAll({
  forceHidden: true,  
  
});

var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    min: -300000,
	max: 300000,    
    renderer: yRenderer,
	paddingRight:16
  })
);

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
createRange(0, yAxis, '');
createRange(-300000, yAxis, '');
// Add series

var series1 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "현금 유입",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "현금유입",
    categoryXField: "age",
	locationX: 1,
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name} in {categoryX}: {valueY} {info}"
    }),  
    fill: am5.color(0x76A8FC) 
  })
);

series1.columns.template.setAll({
  width: 28,
  tooltipY: am5.percent(10),
  templateField: "columnSettings"
});

series1.data.setAll(data);

var series2 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "현금 유출",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "현금유출",
    categoryXField: "age",
	locationX: 0.5,
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name} in {categoryX}: {valueY} {info}"
    }),
	fill: am5.color(0xD6E5FF) 
  })  
);

series2.columns.template.setAll({
  width: 28,
  tooltipY: am5.percent(10),
  templateField: "columnSettings"
});

series2.data.setAll(data);

var series3 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "순 현금 흐름",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "cashWave",
    categoryXField: "age",
	stroke: am5.color(0x7B7B7B),    
	locationX: 0.75,
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name} in {categoryX}: {valueY} {info}"
    })
  })
);


series3.data.setAll(data);
var bulletTemplate = am5.Template.new({
  
});
series3.bullets.push(function () {
  return am5.Bullet.new(root, {
	locationX : 0.75,
    sprite: am5.Circle.new(root, {	  
      strokeWidth: 1,     
      radius: 4,
      templateField: "bulletSettings"
}, bulletTemplate)
    
  });
});

series3.data.setAll([
{
  age: "55세",  
  cashWave: 250000,
  bulletSettings: {fill: am5.color(0x7b7b7b)}
},{	
  age: "56세",  
  cashWave: 100000,  
},{	
  age: "57세",  
  cashWave: 100000,    
},{	
  age: "58세",  
  cashWave: 100000,  
},{	
  age: "59세",  
  cashWave: 100000,  
},{	
  age: "60세",  
   cashWave: 100000,  
},{	
  age: "61세",  
   cashWave: 100000,  
},{	
  age: "62세",  
   cashWave: 100000,  
},{	
  age: "63세",  
  cashWave: 100000,  
},{	
  age: "64세",  
   cashWave: 100000,  
},{	
  age: "65세",  
  cashWave: 100000,  
},{	
  age: "66세",  
  cashWave: 0  
},{	
  age: "67세",  
  cashWave: 0  
},{	
  age: "68세",  
  cashWave: 0
},{	
  age: "69세",  
   cashWave: 0
},{	
  age: "70세",  
   cashWave: 0
},{	
  age: "71세",  
   cashWave: 0
},{	
  age: "72세",  
  cashWave: 0
},{	
  age: "73세",  
  cashWave: 0
},{	
  age: "74세",  
  cashWave: 0
},{	
  age: "75세",  
   cashWave: 0
},{	
  age: "76세",  
  cashWave: 0
},{	
  age: "77세",  
   cashWave: 0
},{	
  age: "78세",  
   cashWave: 0
},{	
  age: "79세",  
   cashWave: 0
},{	
  age: "80세",  
  cashWave: 0
},{	
  age: "81세",  
   cashWave: 0
},{	
  age: "82세",  
  cashWave: 0
},{	
  age: "83세",  
  cashWave: 0
},{	
  age: "84세",  
  cashWave: 0
},{	
  age: "85세",  
   cashWave: 0,
 bulletSettings: {fill: am5.color(0x7b7b7b)}
}]);

// Add legend
var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50,
    centerY: am5.p50,
    y: am5.p100
  })
);
legend.markers.template.setAll({
  width: 12,
  height: 12
});
legend.data.setAll(chart.series.values);

// Make stuff animate on load
chart.appear(1000, 100);
series1.appear();


}