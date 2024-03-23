// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
	this.multiLined();	
}

function multiLined(){

var root = this.multiLine.getroot();

var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  paddingLeft: 0,
  layout: root.verticalLayout
}));


var data = [{
  "year": "2021-01",
  "value1": 10000,
  "value2": 20000,
  "value3": 30000
}, {
  "year": "2021-02",
  "value1": 10000,
  "value2": 20000,
  "value3": 30000
},{
  "year": "2021-03",
  "value1": 10000,
  "value2": 20000,
  "value3": 30000
},{
  "year": "2021-04",
  "value1": 10000,
  "value2": 20000,
  "value3": 30000
},{
  "year": "2021-05",
  "value1": 10000,
  "value2": 30000,
  "value3": 20000
},{
  "year": "2021-06",
  "value1": 10000,
  "value2": 30000,
  "value3": 20000
},{
  "year": "2021-07",
  "value1": 10000,
  "value2": 30000,
  "value3": 20000
},{
  "year": "2021-08",
  "value1": 30000,
  "value2": 10000,
  "value3": 20000
},{
  "year": "2021-09",
  "value1": 30000,
  "value2": 10000,
  "value3": 20000
},{
  "year": "2021-10",
  "value1": 30000,
  "value2": 10000,
  "value3": 20000
},{
  "year": "2021-11",
  "value1": 30000,
  "value2": 10000,
  "value3": 20000
},{
  "year": "2021-12",
  "value1": 30000,
  "value2": 10000,
  "value3": 20000
}]

var xRenderer = am5xy.AxisRendererX.new(root, {
  minorGridEnabled: true,
//positioning Axis elements
minGridDistance: 1
});
var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "year",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

xRenderer.grid.template.setAll({
  location: 1
})

xAxis.data.setAll(data);
var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  max:100000,
  renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
  })
}));
yAxis.children.push(
      am5.Label.new(root, {
          text: "1인 평균\n기여손익\n(단위:천원)",
          textAlign: 'center',
          x: am5.p0,
		  y: am5.percent(-10),		
          fontSize: 11,
      })
);

// Add legend
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50,
  margin:0,
  padding:0
}));
legend.valueLabels.template.set("forceHidden", true);

// Add series
function makeSeries(name, fieldName) {
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: name,    
    xAxis: xAxis,
    yAxis: yAxis,    
    valueYField: fieldName,
    categoryXField: "year"
  }));
  series.strokes.template.setAll({
  	strokeWidth: 3,
  templateField: "strokeSettings"
});
  series.data.setAll(data);
  
  series.appear();

  series.bullets.push(function () {
     return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {
      strokeWidth: 3,
      stroke: series.get("stroke"),
      radius: 5,
      fill: root.interfaceColors.get("background")
    })
  });
  });

  legend.data.push(series);
}

makeSeries("종합자산관리 고객", "value1");
makeSeries("일반 고객(1억원 미만)", "value2");
makeSeries("WM고객(1억원 이상)", "value3");

/*
var series2 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "배점합계",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "합계",
    categoryXField: "year",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name} in {categoryX}: {valueY} {info}"
    })
  })
);

series2.strokes.template.setAll({
  strokeWidth: 3,
  templateField: "strokeSettings"
});

series2.data.setAll(data);

series2.bullets.push(function () {
  return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {
      strokeWidth: 3,
      stroke: series2.get("stroke"),
      radius: 5,
      fill: root.interfaceColors.get("background")
    })
  });
});
*/
chart.appear(1000, 100);

}