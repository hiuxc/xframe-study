// 삭제 예정
function screen_on_load()
{
	var objExtraData;
	
    // 팝업화면 열때 전달한 extra_data 얻기
    objExtraData = screen.getextradata();
	if (objExtraData !== null && objExtraData.POPOP_PARAM_DATA !== "") {
		
		// 초기값 설정
		fld_param_data.settext(objExtraData.POPOP_PARAM_DATA);
	}
}