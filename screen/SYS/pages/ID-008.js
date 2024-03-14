// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
		createRadarChart();
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
let xRenderer = am5radar.AxisRendererCircular.new(root, {
	
});
xRenderer.labels.template.setAll({
	textType: "adjusted",
  radius: 20,
location: 1
 //centerX. am5.p50,
//centerY: am5.p50
  

});
let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
     maxDeviation: 0,
  categoryField: "country",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));



 var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5radar.AxisRendererRadial.new(root, {}),
            min: 0,
            max: 100,

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
  "litres": 100
}, {
  "country": "Czechia",
  "litres": 90
}, {
  "country": "Ireland",
  "litres": 50
}, {
  "country": "Germany",
  "litres": 40
}, ];
series.data.setAll(data);
xAxis.data.setAll(data);


series.appear(1000);
chart.appear(1000, 100);
	
}