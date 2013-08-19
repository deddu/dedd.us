var showSkills=function(event){
	event.preventDefault;
	if (! $('.market-info').hasClass("skills")){
		$('.market-info').addClass("skills").removeClass("vices projects");
	$('.market-info').find('section').slideUp().remove();
	$.ajax('/pages/skills.html', {
      success: function(response) {
        $('.market-info').html(response).slideDown();

      }
    });}
	 
}
var showVices=function(event){
	event.preventDefault;
	if (! $('.market-info').hasClass("vices")){
	$('.market-info').addClass("vices").removeClass("skills projects");
$('.market-info').find('section').slideUp().remove();
	$.ajax('/pages/vicesandvirtues.html', {
      success: function(response) {
        $('.market-info').html(response).slideDown();
      }
    });
	 }
}
var showProjects=function(event){
	event.preventDefault;

	if (! $('.market-info').hasClass("projects")){
	$('.market-info').addClass("projects").removeClass("skills vices");
	$('.market-info').find('section').remove();
	$.ajax('/pages/projects.html', {
      success: function(response) {
        $('.market-info').html(response).slideDown();
      }
    });
}	
}

var hideMarketing=function(){
	$('.market-info').find('section').remove();
	$('.market-info').addClass("closed");
}
var toggleMarketing=function(){
	if ($('.market-info').hasClass("closed")){	} 
	else {		hideMarketing();	}
}
$(document).ready(function(){
	$(".projects-btn").on('click', showSkills);
	$(".skills-btn").on('click', showVices);
	$(".vices-btn").on('click', showProjects);
});