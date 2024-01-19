function screen_on_load()
{
	function convertPtToPx(ptSize) {
  return ptSize / 1.33;
}

$("*").each(function() {
  var fontSizePt = parseFloat($(this).css("font-size"));
  var fontSizePx = convertPtToPx(fontSizePt);
  var onlyNum = Math.floor(fontSizePx)

  $(this).css("font-size", onlyNum + "px");  
});

var txtSpan = $("._xf_text_span")
txtSpan.each(function(){
	let thisParent = $(this).parent().css("font-size");	
	 $(this).css("font-size", thisParent);  
});

var btnText = $("._xf_btn_text")
	btnText.each(function(){
    let thisParent = $(this).parent().parent().css("font-size");	
	 $(this).css("font-size", thisParent);  		
	})

}