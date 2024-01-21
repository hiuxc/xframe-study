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
