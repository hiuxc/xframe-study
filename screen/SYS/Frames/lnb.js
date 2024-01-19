function grdTree_on_itemclick(objInst, nClickRow, nClickColumn, bBtnClick)
{
	factory.consoleprint("☆★ 그리드클릭 ☆★");
factory.consoleprint(nClickRow, nClickColumn);

}

function screen_on_load()
{	
let lnbBtn = $("._xf_grid_tr");
	
	lnbBtn.each(function(){
		//console.log($(this))
			$(this).click(function(){
				console.log($(this))
			})
	})

$(document).on('dblclick', '._xf_grid_treeitem_element', function() {
    $(this).closest("._xf_grid_tr").toggleClass("open_menu")
});


}


function menu_on_columndblclick(objInst, nColumn)
{
	 $(this).closest("._xf_grid_tr").toggleClass("open_menu")
	
}