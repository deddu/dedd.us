var showMarketing=function(){
	$('.market-info').slideDown();
	$('.market-info').removeClass("closed")
	$('.icobtn').find("i").removeClass("icon-chevron-down");
	$('.icobtn').find("i").addClass("icon-chevron-up");
}
var hideMarketing=function(){
	$('.market-info').slideUp();
	$('.market-info').addClass("closed")
	$('.icobtn').find("i").removeClass("icon-chevron-up");
	$('.icobtn').find("i").addClass("icon-chevron-down");
}
var toggleMarketing=function(){
	if ($('.market-info').hasClass("closed")){
		showMarketing();
	} else {
		hideMarketing();
	}
}

$(document).ready(function(){
	$(".icobtn").on('click', toggleMarketing);
});