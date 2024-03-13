// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
	createPieChart_1();
	createPieChart_2();
	createColumnNLine();
	createLineChart();
	createRadarChart();
	createCircle();
}

// pie차트1 생성
function createPieChart_1()
{
	// 생성된 root 구하기
	var root = this.amchart_1.getroot();
	
	var chart = root.container.children.push( 
		am5percent.PieChart.new(root, {
		layout: root.verticalLayout,
		innerRadius: am5.percent(70)
		}) 
	);
	
	// Define data_1
	var data_1 = [{
		item: "요구불/저축성",
		rate: 30000,	
		fill:am5.color(0x76A8FC)
	}, {
	  item: "수익증권",
	  rate: 80000,
		fill:am5.color(0x547CFC)
	}, {
	  item: "신탁",
	  rate: 30000,
	  fill:am5.color(0xFD5C5C)
	}, {
	  item: "IRP",
	  rate: 30000,
	fill:am5.color(0xFFA740)
	}, {
	  item: "DC(DB제외)",
	  rate: 80000,
	fill:am5.color(0xFCCA3E)
	}];
	
	// Create series
	var series = chart.series.push(
	  am5percent.PieSeries.new(root, {
	    name: "Series",
	    valueField: "rate",
	    categoryField: "item",
		fillField:"fill"
	  })
	);
	series.data.setAll(data_1);
	
	series.appear(1000, 100);
	
	// Disabling labels and ticks
	series.labels.template.set("visible", false);
	series.ticks.template.set("visible", false);
	
	// Configuring slices
	series.slices.template.setAll({
		stroke: am5.color(0xffffff),
		strokeWidth: 4
	})	
	
	let label = chart.seriesContainer.children.push(
  am5.Label.new(root, {
    textAlign: "center",
    centerY: am5.p50,
    centerX: am5.p50,
    text: "[fontSize:13px #555555]최종설계일[/]\n[bold fontSize:13px #555555]23.08.11[/]"
  })
);
}

// pie차트2 생성
function createPieChart_2()
{
	// 생성된 root 구하기
	var root = this.amchart_2.getroot();
	
	var chart = root.container.children.push( 
		am5percent.PieChart.new(root, {
		layout: root.verticalLayout,
		innerRadius: am5.percent(70)
		}) 
	);
	
	// Define data_2
	var data_2 = [{
		item: "요구불/저축성",
		rate: 30000,	
		fill:am5.color(0x76A8FC)
	}, {
	  item: "수익증권",
	  rate: 80000,
		fill:am5.color(0x547CFC)
	}, {
	  item: "신탁",
	  rate: 30000,
	  fill:am5.color(0xFD5C5C)
	}, {
	  item: "IRP",
	  rate: 30000,
	fill:am5.color(0xFFA740)
	}, {
	  item: "DC(DB제외)",
	  rate: 80000,
	fill:am5.color(0xFCCA3E)
	}];
	
	// Create series
	var series = chart.series.push(
	  am5percent.PieSeries.new(root, {
	    name: "Series",
	    valueField: "rate",
	    categoryField: "item",
		fillField:"fill"
	  })
	);
	series.data.setAll(data_2);
	
	series.appear(1000, 100);
	
	// Disabling labels and ticks
	series.labels.template.set("visible", false);
	series.ticks.template.set("visible", false);
	
	// Configuring slices
	series.slices.template.setAll({
		stroke: am5.color(0xffffff),
		strokeWidth: 4
	})	
	
	let label = chart.seriesContainer.children.push(
  am5.Label.new(root, {
    textAlign: "center",
    centerY: am5.p50,
    centerX: am5.p50,
    text: "[fontSize:13px #555555]현재[/]\n[fontSize:13px #555555]포트폴리오[/]"
  })
);
}


function createColumnNLine(){
	var root = this.ColumnLine.getroot();	
	
var chart = root.container.children.push(
  am5xy.XYChart.new(root, {
    panX: false,
    panY: false,    
    paddingLeft: 0,
    layout: root.verticalLayout,

  })
);

var data = [
  {
    month: "23.01",
    income: 20,
    expenses: 21.1,
	asset: 6
  },
  {
    month: "23.02",
    income: 40,
    expenses: 30.5,
	asset: 15
  },
  {
    month: "23.03",
    income: 30.1,
    expenses: 34.9,
	asset: 27
  },
  {
    month: "23.04",
    income: 29.5,
    expenses: 31.1,
	asset: 36
  },
  {
    month: "23.05",
    income: 29.5,
    expenses: 31.1,
	asset: 35
  },
 {
    month: "23.06",
    income: 29.5,
    expenses: 31.1,
	asset: 28
  },
 {
    month: "23.07",
    income: 29.5,
    expenses: 31.1,
	asset: 15
  },
 {
    month: "23.08",
    income: 29.5,
    expenses: 31.1,
	asset: 24
  },
 {
    month: "23.09",
    income: 29.5,
    expenses: 31.1,
	asset: 20
  },
 {
    month: "23.10",
    income: 29.5,
    expenses: 31.1,
	asset: 16
  },
 {
    month: "23.11",
    income: 29.5,
    expenses: 31.1,
	asset: 14
  },
 {
    month: "23.12",
    income: 29.5,
    expenses: 31.1,
	asset: 25
  }, 
 
];

// Create axes

var xRenderer = am5xy.AxisRendererX.new(root, {
  minorGridEnabled: true,
  minGridDistance: 60
});
var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "month",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  })
);
xRenderer.grid.template.setAll({
  location: 1 , 
})
xRenderer.grid.template.set("visible", false);
xAxis.data.setAll(data);


let yRenderer = am5xy.AxisRendererY.new(root, {});

/*
yRenderer.grid.template.set("forceHidden", true);
yRenderer.labels.template.set("minPosition", 0);
*/
/* 그리드 투명도 */
yRenderer.grid.template.set("strokeOpacity", 1);
/* 그리드 색상 */
root.interfaceColors.set("grid", am5.color(0xF4F5F6));

var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {	
    min: 0,
    max: 35,
    extraMax: 0.1,
 renderer: yRenderer
  })
);
/*2024-03-04*/
let paretoAxisRenderer = am5xy.AxisRendererY.new(root, { opposite: true });
let paretoAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: paretoAxisRenderer,
  min: 0,
  max: 1000000,
  extraMax: 0.1, 
  strictMinMax: true
}));

paretoAxisRenderer.grid.template.set("forceHidden", true);
paretoAxis.set("numberFormat", "#");
//paretoAxis.set("numberFormat", "#'%");
/*2024-03-04*/

// Add series

var series1 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Income",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "income",
    categoryXField: "month",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name}[/]\n in {categoryX}: {valueY} {info}"
    }),
	fill: am5.color(0xFCCA3E), 
	
  })
);


series1.columns.template.setAll({
  width: 46,
  tooltipY: am5.percent(10),
  templateField: "columnSettings",
  fillOpacity: 0.2,
 cornerRadiusTL: 4,
  cornerRadiusTR: 4,    
});

// 클릭 시 컬럼 색상
series1.data.setAll(data);
series1.columns.template.set("toggleKey", "active");
series1.columns.template.states.create("active", {fill:am5.color(0xFCCA3E), fillOpacity: 1});
var selectedColumn;
series1.columns.template.events.on("click", function(ev) {	
	var column = ev.target;  
  if (selectedColumn) {
    selectedColumn.set("active", false);
    selectedColumn = undefined;
  }  
  selectedColumn = column;
		
});
function createSeries(name, field, color){
	var series2 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: name,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: field,
    categoryXField: "month",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name} in {categoryX}: {valueY} {info}"
    }),
	stroke:am5.color(color)	
  })
	
);

series2.strokes.template.setAll({	
  strokeWidth: 1,
  templateField: "strokeSettings",
});

series2.data.setAll(data);

series2.bullets.push(function () {
  return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {     
      radius: 5,
      fill: am5.color(color)
    })
  });
});
}

createSeries("asset", "asset", "#FE854F");
createSeries("Expenses", "expenses", "#3657C3");
chart.set("cursor", am5xy.XYCursor.new(root, {}));

// Add legend

var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  })
);
legend.data.setAll(chart.series.values);

// Make stuff animate on load
chart.appear(1000, 100);
series1.appear();


}

function createLineChart(){
// 생성된 root 구하기
var root = this.linechart.getroot();
	
var chart = root.container.children.push(am5xy.XYChart.new(root, {
	panX: true,
	panY: true,
	wheelX: "panX",
	wheelY: "zoomX",	
	pinchZoomX:true
}));



// Add cursor
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);

// Create axes

let xRenderer = am5xy.AxisRendererX.new(root, {});
var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {  
  baseInterval: {
    timeUnit: "year",
    count: 1
  },
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));
 xRenderer.grid.template.set("forceHidden", true);
/* 그리드 색상 */
let yRenderer = am5xy.AxisRendererY.new(root, {});
yRenderer.grid.template.set("strokeOpacity", 1);
root.interfaceColors.set("grid", am5.color(0xF4F5F6));
var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {  
	
    min: 20,
    max: 60,    
  renderer: yRenderer
}));
xAxis.get("renderer").labels.template.setAll({
	fontSize: 12,
	fill: am5.color(0x667085)
});
yAxis.get("renderer").labels.template.setAll({
	fontSize: 12,
	fill: am5.color(0x667085)
});

// Add series
var series = chart.series.push(am5xy.LineSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value1",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueX}: {valueY}\n{previousDate}: {value2}"
  }),
  stroke: am5.color('#61A96D'),

}));

series.strokes.template.setAll({
  strokeWidth: 2
});

series.get("tooltip").get("background").set("fillOpacity", 0.5);

var series2 = chart.series.push(am5xy.LineSeries.new(root, {
  name: "Series 2",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value2",
  valueXField: "date",
  stroke: am5.color('#FE854F')
}));
series2.strokes.template.setAll({  
  strokeWidth: 2
});

var series3 = chart.series.push(am5xy.LineSeries.new(root, {
  name: "Series 3",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value3",
  valueXField: "date",
  stroke: am5.color('#3657C3')
}));
series3.strokes.template.setAll({  
  strokeWidth: 2,  
});

// Set date fields
root.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});


// Set data
var data = [{
  date: new Date(2018, 5, 12).getTime(),
  value1: 50,
  value2: 48,
  value3: 45
}, {
  date: new Date(2019, 5, 13).getTime(),
  value1: 53,
  value2: 51,
  value3: 40
}, {
  date: new Date(2020, 5, 14).getTime(),
  value1: 56,
  value2: 58,
  value3: 50
}, {
  date: new Date(2021, 5, 15).getTime(),
  value1: 52,
  value2: 53,
  value3: 45
}, {
  date: new Date(2022, 5, 16).getTime(),
  value1: 48,
  value2: 44,
  value3: 49
}, {
  date: new Date(2023, 5, 17).getTime(),
  value1: 47,
  value2: 42,
  value3: 40
}, {
  date: new Date(2024, 5, 18).getTime(),
  value1: 59,
  value2: 55,
  value3: 50
}]

series.data.setAll(data);
series2.data.setAll(data);
series3.data.setAll(data);
series.appear(1000);
series2.appear(1000);
series3.appear(1000);
chart.appear(1000, 100);


}


function createRadarChart(){
	
	
var root = this.RadarChart_1.getroot();

// Create chart
let chart = root.container.children.push(am5radar.RadarChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX"
}));

// Add cursor
let cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
  behavior: "zoomX"
}));

cursor.lineY.set("visible", false);

// Create axes and their renderers
let xRenderer = am5radar.AxisRendererCircular.new(root, {});
xRenderer.labels.template.setAll({
  radius: 10
});
let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0,
  categoryField: "country",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

let yRenderer = am5radar.AxisRendererRadial.new(root, {})

let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: yRenderer
}));
  
// Create series
let series = chart.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Series",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "litres",
  categoryXField: "country",
  tooltip:am5.Tooltip.new(root, {
    labelText:"{valueY}"
  })
}));

series.strokes.template.setAll({
  strokeWidth: 1

});




// Set data
let data = [{
  "country": "Lithuania",
  "litres": 501
}, {
  "country": "Czechia",
  "litres": 301
}, {
  "country": "Ireland",
  "litres": 266
}, {
  "country": "Germany",
  "litres": 165
}];
series.data.setAll(data);
xAxis.data.setAll(data);

series.appear(1000);
chart.appear(1000, 100);
	
}

function createCircle()
{
	
	var root = this.progress_circle.getroot();
	

// Create chart
let chart = root.container.children.push(am5radar.RadarChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  innerRadius: am5.percent(92),
  startAngle: 0,
  endAngle: 360
}));


// Data
let data = [{
  category: "Research",
  value: 80,
  full: 100,

  columnSettings: {
    fill: am5.color('#FCCA3E')
	
  }

}];

// Create axes and their renderers
let xRenderer = am5radar.AxisRendererCircular.new(root, {
  //minGridDistance: 50
});

xRenderer.labels.template.setAll({
 forceHidden: true
});

xRenderer.grid.template.setAll({
  forceHidden: true
});

let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  renderer: xRenderer,
  min: 0,
  max: 100,
  strictMinMax: true,
  numberFormat: "#'%'",
}));


let yRenderer = am5radar.AxisRendererRadial.new(root, {
  minGridDistance: 0
});

yRenderer.labels.template.setAll({
  forceHidden: true
});

yRenderer.grid.template.setAll({
  forceHidden: true
});

let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "category",
  renderer: yRenderer
}));

yAxis.data.setAll(data);


// Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
let series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "full",
  categoryYField: "category",
  fill: am5.color('#eeeeee')
}));

series1.columns.template.setAll({
  //width: am5.p100,  
  strokeOpacity: 1,
  cornerRadius: 20
});

series1.data.setAll(data);


let series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "value",
  categoryYField: "category",
  fill: am5.color('#FCCA3E')
}));

series2.columns.template.setAll({
  width: am5.p100,
  strokeOpacity: 0,
  tooltipText: "{category}: {valueX}%",
  cornerRadius: 20,
 
});

series2.data.setAll(data);

// Animate chart and series in

series1.appear(1000);
series2.appear(1000);
chart.appear(1000, 100);

}