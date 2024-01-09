let stylesheet = document.createElement('link');

stylesheet.rel = 'stylesheet';
stylesheet.type = 'text/css';
stylesheet.href = './project/xframe-study/style/main.css'; 

document.head.appendChild(stylesheet);

function screen_on_load()
{
	// 아이템 삽입(세로방향)
	// 1번째 파라미터 : 추가할 컴포넌트 이름
	// 2번째 파라미터 : 초기에 펼쳐서 보일지 여부
	// 3번째 파라미터 : 최소 크기 (접힌 상태일때 크기)
	// 4번째 파라미터 : 최대 크기 (펼쳐진 상태일때 크기)
	this.accordion_vert.additem("pn_vert_1", true, 26, 100);
	this.accordion_vert.additem("pn_vert_2", true, 26, 100);
	this.accordion_vert.additem("pn_vert_3", true, 26, 100);
	this.accordion_vert.additem("pn_vert_4", true, 26, 100);
	this.accordion_vert.refresh(); // 아이템의 크기 및 위치를 새로 고침
	

	
	// 아이템 삽입(초기에 접어서 표시할 경우)
	this.accordion_vert_fold.additem("pn_vert_fold_1", false, 26, 100);
	this.accordion_vert_fold.additem("pn_vert_fold_2", false, 26, 100);
	this.accordion_vert_fold.additem("pn_vert_fold_3", false, 26, 100);
	this.accordion_vert_fold.additem("pn_vert_fold_4", false, 26, 100);
	this.accordion_vert_fold.refresh();


}

function btn_horz_1_on_mouseup(objInst)
{
	// 아이템 토글(아이템 이름으로 설정하는 경우)
	// 1번째 파라미터 : 아이템 번호
	// 2번째 파라미터 : 동작시킬 아이템 이름 (nItemIndex가 -1일때 사용됨)
	// 3번째 파라미터 : 동작시킬 유형타입 (0:접기,1:펼치기,2:토글)
	this.accordion_horz.expanditem(-1, "pn_horz_1", 2);
}

function btn_horz_2_on_mouseup(objInst)
{
	this.accordion_horz.expanditem(-1, "pn_horz_2", 2);
}

function btn_horz_3_on_mouseup(objInst)
{
	this.accordion_horz.expanditem(-1, "pn_horz_3", 2);
}

function btn_horz_4_on_mouseup(objInst)
{
	this.accordion_horz.expanditem(-1, "pn_horz_4", 2);
}

function btn_vert_1_on_mouseup(objInst)
{
	// 아이템 토글(아이템 번호로 설정하는 경우)
	// 1번째 파라미터 : 아이템 번호
	// 2번째 파라미터 : 동작시킬 아이템 이름 (nItemIndex가 -1일때 사용됨)
	// 3번째 파라미터 : 동작시킬 유형타입 (0:접기,1:펼치기,2:토글)
	this.accordion_vert.expanditem(0, null, 2);
}

function btn_vert_2_on_mouseup(objInst)
{
	this.accordion_vert.expanditem(1, null, 2);
}

function btn_vert_3_on_mouseup(objInst)
{
	this.accordion_vert.expanditem(2, null, 2);
}

function btn_vert_4_on_mouseup(objInst)
{
	this.accordion_vert.expanditem(3, null, 2);
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

function btn_vert_autosize_1_on_mouseup(objInst)
{
	this.accordion_vert_autosize.expanditem(0, null, 2);
}

function btn_vert_autosize_2_on_mouseup(objInst)
{
	this.accordion_vert_autosize.expanditem(1, null, 2);
}

function btn_vert_autosize_3_on_mouseup(objInst)
{
	this.accordion_vert_autosize.expanditem(2, null, 2);
}

function btn_vert_autosize_4_on_mouseup(objInst)
{
	this.accordion_vert_autosize.expanditem(3, null, 2);
}

function btn_horz_autosize_1_on_mouseup(objInst)
{
	this.accordion_horz_autosize.expanditem(0, null, 2);
}

function btn_horz_autosize_2_on_mouseup(objInst)
{
	this.accordion_horz_autosize.expanditem(1, null, 2);
}

function btn_horz_autosize_3_on_mouseup(objInst)
{
	this.accordion_horz_autosize.expanditem(2, null, 2);
}

function btn_horz_autosize_4_on_mouseup(objInst)
{
	this.accordion_horz_autosize.expanditem(3, null, 2);
}