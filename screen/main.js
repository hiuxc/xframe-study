//let stylesheet = document.createElement('link');

//stylesheet.rel = 'stylesheet';
//stylesheet.type = 'text/css';
//stylesheet.href = './project/KB_CMS/style/main.css'; 

//document.head.appendChild(stylesheet);

function screen_on_load()
{
	
/*
function convertPtToPx(ptSize) {
  return ptSize / 1.33;
}

$("*").each(function() {
  var fontSizePt = parseFloat($(this).css("font-size"));
  var fontSizePx = convertPtToPx(fontSizePt);
  var onlyNum = Math.floor(fontSizePx)

  $(this).css("font-size", onlyNum + "px");  
});
*/

var txtSpan = $("._xf_text_span")
txtSpan.each(function(){
	let thisParent = $(this).parent().css("font-size");	
	 $(this).css("font-size", thisParent);  
});

// navibar01.deleteallitem();
	
	// 아이템 추가
	// navibar01.additem("홈");
	// navibar01.additem("모니터링");
	// navibar01.additem("모니터링 대시보드");
	// navibar01.additem("모니터링 현황");	
	
	// navibar02.additem("상품기준정보");
	// navibar02.additem("선물옵션");
	// navibar02.additem("선물");	

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



function btn_vert_depth2_1_on_mouseup(objInst)
{	
	this.accordion_vert_fold.expanditem(4, null, 2);	
}

function btn_vert_fold_1_on_mouseup(objInst)
{
	this.accordion_vert_fold.expanditem(0, null, 2);	
}
function btn_vert_fold_2_on_mouseup(objInst)
{
	this.accordion_vert_fold.expanditem(1, null, 2);
}

function btn_vert_fold_3_on_mouseup(objInst)
{
	this.accordion_vert_fold.expanditem(2, null, 2);
}

function btn_vert_fold_4_on_mouseup(objInst)
{
	this.accordion_vert_fold.expanditem(3, null, 2);
}



function btn_getxdatasetvalue_on_mouseup(objInst)
{
	// 콤보박스의 getselectedcode API 호출을 통해 선택한 값을 구함
	screen.alert("선택한 코드값 (getselectedcode): " + this.cbo_xdataset.getselectedcode());
		
	// link_data 속성에 xdataset을 링크한 경우, 데이터 셋에서 값을 가져올 수 있다.
	screen.alert("선택한 코드값 (데이터셋.getdatabyname): " + this.DS_DATA.getdatabyname(this.DS_DATA.getpos(), "CODE"));
}

function btn_addstring_on_mouseup(objInst)
{
	// 콤보박스 코드 정보를 API로 추가
	this.cbo_api.addstring("0:대한민국");
	this.cbo_api.addstring("1:미국");
	this.cbo_api.addstring("2:중국");
	this.cbo_api.addstring("3:일본");
	this.cbo_api.addstring("4:영국");
	
	// 콤보박스 특정 코드 아이템을 숨김 처리
	this.cbo_api.setitemhidden(3, true);	// 03:일본 정보 숨김 처리
}

function btn_setpicklist_on_mouseup(objInst)
{
	// 콤보박스 picklist 속성을 동적으로 변경
	this.cbo_picklist.setpicklist("/BIZ/DATA_CODE");
}

function btn_getselectedcode_on_mouseup(objInst)
{
	screen.alert("getselectedcode = [" + cbo_basic.getselectedcode() + "]");
}

function btn_setselectedcode_on_mouseup(objInst)
{
	cbo_basic.setselectedcode("1");
}

/**
 * 콤보박스 아이템 선택 변경 이벤트
 * @param objInst 이벤트가 발생한 콤보박스 오브젝트 인스턴스
 * @param nprev_item 이전에 선택된 아이템 인덱스 (선택된 값이 없는 경우에는 -1)
 * @param ncur_item 현재 선택된 아이템 인덱스 (선택된 값이 없는 경우에는 -1)
 */
function cbo_basic_on_itemchange(objInst, nprev_item, ncur_item)
{
	//screen.alert("on_itemchange 이벤트: " + nprev_item + " -> " + ncur_item);
}