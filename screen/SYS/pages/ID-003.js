function screen_on_load()
{
	
	navibar01.deleteallitem();
	
	// 아이템 추가
	navibar01.additem("홈");
	navibar01.additem("모니터링");
	navibar01.additem("모니터링 대시보드");
	navibar01.additem("모니터링 현황");	
	/*
	navibar02.additem("상품기준정보");
	navibar02.additem("선물옵션");
	navibar02.additem("선물");	
*/
	// 아이템별 배경색 설정
	/*
	navibar01.setitembackcolor(0, factory.rgb(0,0,0));
	navibar01.setitembackcolor(1, factory.rgb(66,142,254));
	navibar01.setitembackcolor(2, factory.rgb(3,207,13));
	navibar01.setitembackcolor(3, factory.rgb(246,39,34));
	navibar01.setitembackcolor(4, factory.rgb(238,245,255));
	*/
	
	
	function convertPtToPx(ptSize) {
		return ptSize / 1.33;
	}

	$("*").each(function() {
		var fontSizePt = parseFloat($(this).css("font-size"));
		var fontSizePx = convertPtToPx(fontSizePt);
		var onlyNum = Math.floor(fontSizePx)
		$(this).css("font-size", onlyNum + "px");  
	});

	var navTxt = $("._xf_navibar_item")		
	navTxt.each(function(){		
	var fontSizePt = parseFloat($(this).css("font-size"));			
 		$(this).css("font-size", fontSizePt + "px");    
	});
	
	var txtSpan = $("._xf_text_span")
	txtSpan.each(function(){
	let thisParent = $(this).parent().css("font-size");	
		$(this).css("font-size", thisParent);  
	});
	
	
	var gridFz = $(".fixed_width ._xf_grid_item_span")		
	gridFz.each(function(){		
		// var fontSizePt = parseFloat($(this).css("font-size"));		
		var fontSizePt = $(this).css("font-size");						
		$(this).addClass("pls")
	})
		
	var btnTxt = $("._xf_btn_text")
	btnTxt.each(function(){
		let thisParent = $(this).closest("._xf_btn").css("font-size");
		$(this).css("font-size", thisParent);  
	})
		
	var gridTxt = $("._xf_grid_item_span")		
		gridTxt.each(function(){
		let gridParent = $(this).closest("._xf_grid").css("font-size");
		$(this).css("font-size", gridParent);  		
	})
}

function comboBox_on_click(objInst, buttonclick)
{
	var comboTxt = $("._xf_screen_selectbox_item_text")			
		console.log(comboTxt)
	comboTxt.each(function(){
		let thisParent2 = $(this).closest("._xf_screen_selectbox").css("font-size");				
		$(this).css("font-size", thisParent2);  
	});
	
}

// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload(objInst, chart_type)
{
	var chart_type;
	
	// 차트 타입 구하기
	chart_type = this.amchart.getcharttype();	

	// 차트 타입이 pie 차트인 경우, pie차트 생성 
	if (chart_type == 2) {
		this.createPieChart2();
	}
}


// pie차트 생성
function createPieChart2()
{
	// 생성된 root 구하기
	var root = this.amchart.getroot();
	
	var chart = root.container.children.push( 
	  am5percent.PieChart.new(root, {
	 
	  }) 
	);
	
	// Define data
	var data = [{
	  country: "투자전략",
	  sales: 16,
	  fill:am5.color(0x6451DC)	
	}, {
	  country: "부동산",
	  sales: 7,
	  fill:am5.color(0x4575B4)	
	}, {
	  country: "부자",
	  sales: 1,
	  fill:am5.color(0x74ADD1)
	}, {
	  country: "내돈관리",
	  sales: 8,
	  fill:am5.color(0xABD9E9)
	}, {
	  country: "절세전략",
	  sales: 6,
	  fill:am5.color(0xE0F3F8)
	}, {
	  country: "용어사전",
	  sales: 1,
	  fill:am5.color(0x31AB95)
	}, {
	  country: "해외상식",
	  sales: 20,
	  fill:am5.color(0x68EACB)
	}, {
	  country: "쇼미더수익",
	  sales: 4,
	  fill:am5.color(0xA9EA68)
	}, {
	  country: "투자상식",
	  sales: 18,
	  fill:am5.color(0xE7EA68)
	}, {
	  country: "1분 브리핑",
	  sales: 20,
	  fill:am5.color(0xFFD338)
	}];
	
	// Create series
	var series = chart.series.push(
	  am5percent.PieSeries.new(root, {
	    name: "Series",
	    valueField: "sales",
	    categoryField: "country",
		fillField:"fill",
		innerRadius: am5.percent(50),
		tooltip: am5.Tooltip.new(root, {
			pointerOrientation: "horizontal",	
			labelText: "{category}: {value}"			
		})
	  })
	);
	// 파이 스트로크
	series.slices.template.setAll({
  	stroke: am5.color(0xffffff),
  	strokeWidth: 1
	})
	//툴팁 관련
	
	series.labels.template.set("tooltipText", "{category}{value}");
	series.labels.template.setup = function(target) {
		target.set("background", am5.Rectangle.new(root, {
    	fill: am5.color(0xFFFFFF),
    	fillOpacity: 0
  	}));
	}
	
	// 라벨 안보이게
	series.labels.template.set("visible", false);

	// 라인 안보이게
	series.ticks.template.set("visible", false);
	series.data.setAll(data);
	// 애니메이션 효과
	series.appear(1000, 100);
	chart.appear(1000, 100);

}

// 차트 라이브러리가 모두 로드 되었을때 호출되는 이벤트
function amchart_on_libload2(objInst, chart_type)
{
	var chart_type;
	
	// 차트 타입 구하기
	chart_type = this.amchart2.getcharttype();	

	// 차트 타입이 pie 차트인 경우, pie차트 생성 
	if (chart_type == 2) {
		this.createPieChart();
	}
}


// pie차트 생성
function createPieChart()
{
	// 생성된 root 구하기
	var root = this.amchart2.getroot();
	
	var chart = root.container.children.push( 
	  am5percent.PieChart.new(root, {
	 
	  }) 
	);
	
	// Define data
	var data = [{
	  country: "투자전략",
	  sales: 16,
	  fill:am5.color(0x6451DC)	
	}, {
	  country: "부동산",
	  sales: 7,
	  fill:am5.color(0x4575B4)	
	}, {
	  country: "부자",
	  sales: 1,
	  fill:am5.color(0x74ADD1)
	}, {
	  country: "내돈관리",
	  sales: 8,
	  fill:am5.color(0xABD9E9)
	}, {
	  country: "절세전략",
	  sales: 6,
	  fill:am5.color(0xE0F3F8)
	}, {
	  country: "용어사전",
	  sales: 1,
	  fill:am5.color(0x31AB95)
	}, {
	  country: "해외상식",
	  sales: 20,
	  fill:am5.color(0x68EACB)
	}, {
	  country: "쇼미더수익",
	  sales: 4,
	  fill:am5.color(0xA9EA68)
	}, {
	  country: "투자상식",
	  sales: 18,
	  fill:am5.color(0xE7EA68)
	}, {
	  country: "1분 브리핑",
	  sales: 20,
	  fill:am5.color(0xFFD338)
	}];
	
	// Create series
	var series = chart.series.push(
	  am5percent.PieSeries.new(root, {
	    name: "Series",
	    valueField: "sales",
	    categoryField: "country",
		fillField:"fill",
		innerRadius: am5.percent(50),
		tooltip: am5.Tooltip.new(root, {
			pointerOrientation: "horizontal",	
			labelText: "{category}: {value}"			
		})
	  })
	);
	// 파이 스트로크
	series.slices.template.setAll({
  	stroke: am5.color(0xffffff),
  	strokeWidth: 1
	})
	//툴팁 관련
	
	series.labels.template.set("tooltipText", "{category}{value}");
	series.labels.template.setup = function(target) {
		target.set("background", am5.Rectangle.new(root, {
    	fill: am5.color(0xFFFFFF),
    	fillOpacity: 0
  	}));
	}
	
	// 라벨 안보이게
	series.labels.template.set("visible", false);

	// 라인 안보이게
	series.ticks.template.set("visible", false);
	series.data.setAll(data);
	// 애니메이션 효과
	series.appear(1000, 100);
	chart.appear(1000, 100);

}