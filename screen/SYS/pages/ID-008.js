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
 
}));

// Create axes and their renderers
let xRenderer = am5radar.AxisRendererCircular.new(root, {});
xRenderer.labels.template.setAll({
	textType: "adjusted",
  radius: 20,
location: 0
});
let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
     maxDeviation: 0,
  categoryField: "category",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

 var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5radar.AxisRendererRadial.new(root, {}),
            min: 0,
            max: 100,
  visible: false
        }));
  
var rangeDataItem1 = yAxis.makeDataItem({
  value: 0,
  endValue: 25
});
var rangeDataItem2 = yAxis.makeDataItem({
  value: 50,
  endValue: 75
});
var range1 = yAxis.createAxisRange(rangeDataItem1);
var range2 = yAxis.createAxisRange(rangeDataItem2);

rangeDataItem1.get("axisFill").setAll({	
  fill:am5.color(0x000000),
  fillOpacity: 0.03,
  visible: true
});
rangeDataItem2.get("axisFill").setAll({	
  fill:am5.color(0x000000),
  fillOpacity: 0.03,
  visible: true
});
// Create series
let series = chart.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Series",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "count",
  categoryXField: "category",
  locationX: 0,
  locationY: 0,
 stroke: am5.color(0x2D6DD8),
}));

series.strokes.template.setAll({
  strokeWidth: 1,
 fill: am5.color(0x2D6DD8),
fillOpacity:0.5
});

// Set data
let data = [
 {
  "category": "[fontFamily: Noto Sans CJK KR fontSize:13px #555555]은퇴설계 준비기간[/] [fontWeight: 700 fontSize:13px #555555]100점[/]",
  "count": 100
},
{
  "category": "[fontFamily: Noto Sans CJK KR fontSize:13px #555555]현금흐름\n[fontSize:13px #555555]달성률[/] [fontWeight: 700 fontSize:13px #555555]30점[/]",
  "count": 30
},
  {
  "category": "[fontFamily: Noto Sans CJK KR fontSize:13px #555555]연금자산 준비율[/] [fontWeight: 700 fontSize:13px #555555]25점[/]",
  "count": 25
}, {
  "category": "[fontFamily: Noto Sans CJK KR fontSize:13px #555555]은퇴자금\n[fontSize:13px #555555]준비율[/] [fontWeight: 700 fontSize:13px #555555]35점[/]",
  "count": 35
}
];
series.data.setAll(data);
xAxis.data.setAll(data);


series.appear(1000);
chart.appear(1000, 100);
	
}