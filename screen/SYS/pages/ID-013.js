// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
	this.createdStacked();	
}

function createdStacked(){

var root = this.stacked.getroot();

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
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 100
}, {
  "year": "2021-02",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 90
},{
  "year": "2021-03",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 80
},{
  "year": "2021-04",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 70
},{
  "year": "2021-05",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 50
},{
  "year": "2021-06",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 40
},{
  "year": "2021-07",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 80
},{
  "year": "2021-08",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 60
},{
  "year": "2021-09",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 90
},{
  "year": "2021-10",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 100
},{
  "year": "2021-11",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 100
},{
  "year": "2021-12",
  "value1": 10,
  "value2": 20,
  "value3": 20,
  "value4": 10,
  "value5": 30,
  "value6": 10,
  "합계": 80
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
  max:120,
  renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
  })
}));
yAxis.children.push(
      am5.Label.new(root, {
          text: "활동건수\n(단위:건수)",
          textAlign: 'center',
          x: am5.p0,
		  y: am5.percent(-10),		
          fontSize: 11,
      })
);
let paretoAxisRenderer = am5xy.AxisRendererY.new(root, { opposite: true });
let paretoAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: paretoAxisRenderer,
  min: 0,
  max: 100,
  extraMax: 0.1, 
  strictMinMax: true
}));
paretoAxis.children.push(
      am5.Label.new(root, {
          text: "배점\n(단위:점)",
          textAlign: 'center',
          x: am5.p0,
		  y: am5.percent(-10),		
          fontSize: 11,
      })
);
paretoAxisRenderer.grid.template.set("forceHidden", true);
paretoAxis.set("numberFormat", "#");
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
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    stacked: true,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    categoryXField: "year"
  }));

  series.columns.template.setAll({
    tooltipText: "{name}, {categoryX}: {valueY}",
    tooltipY: am5.percent(10)
  });
  series.data.setAll(data);
  
  series.appear();

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Label.new(root, {
        text: "{valueY}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: am5.p50,
        centerX: am5.p50,
        populateText: true
      })
    });
  });

  legend.data.push(series);
}

makeSeries("기고 건수", "value1");
makeSeries("방송(인터뷰)건수", "value2");
makeSeries("유투브 건수", "value3");
makeSeries("방송(패널)건수", "value4");
makeSeries("도서출판 건수", "value5");
makeSeries("기타 건수", "value6");


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

chart.appear(1000, 100);

}