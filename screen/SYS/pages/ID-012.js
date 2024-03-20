// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
	createdbColumn();	
}

function createdbColumn(){
// 생성된 root 구하기
var root = this.createdbColumn1.getroot();

var chartA = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        layout: root.verticalLayout
      }));


      // Set data
      var data = [{
        xlabelXYChart: "전",
        value1: 20
      }];

 	var data1 = [{
        xlabelXYChart: "후",
        value1: 60
      }];

      // Create axes      
      var xAxis = chartA.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "xlabelXYChart",
        renderer: am5xy.AxisRendererX.new(root, {
  	  	minGridDistance: 70,
  	  	minorGridEnabled: true
        }),
        tooltip: am5.Tooltip.new(root, {}),
        stroke: am5.color(0xFFFFFF),
        visible: true
      }));

      xAxis.data.setAll(data);
      var yAxis = chartA.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        stroke: am5.color(0xFFFFFF),
        visible: false
      }));
     
      function makeSeries1(name, fieldName) {
        var series = chartA.series.push(am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: "xlabelXYChart"
        }));
        series.columns.template.setAll({
          tooltipText: "{valueY}%",
          width: am5.percent(90),
          tooltipY: 0,
          fill: "#2b4356",
          stroke: "#67b7dc"
        });

        series.data.setAll(data);               
        series.appear();
        series.bullets.push(function () {
          return am5.Bullet.new(root, {
            locationX: 0.5,
            locationY: 1.2,
            sprite: am5.Label.new(root, {
              centerX: am5.p50,
              centerY: am5.p50,
              text: "{value1}",
              fill: am5.color(0x000),
              populateText: true
            })
          });
        });
      }

function makeSeries2(name, fieldName) {
        var series = chartA.series.push(am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: "xlabelXYChart"
        }));
        series.columns.template.setAll({
          tooltipText: "{valueY}%",
          width: am5.percent(90),
          tooltipY: 0,
          fill: "#2b4356",
          stroke: "#67b7dc"
        });

        series.data.setAll(data1);               
        series.appear();
        series.bullets.push(function () {
          return am5.Bullet.new(root, {
            locationX: 0.5,
            locationY: 1.2,
            sprite: am5.Label.new(root, {
              centerX: am5.p50,
              centerY: am5.p50,
              text: "{value1}",
              fill: am5.color(0x000),
              populateText: true
            })
          });
        });
      }
      makeSeries1("before", "value1");
  	makeSeries2("after", "value1");
}