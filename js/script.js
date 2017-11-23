$(document).ready(function(){
	$(".ThenOver2").hover(function(){
		$("#ChangeColor").css("color","white");
	});
	$(".ThenOver2").mouseleave(function(){
		$("#ChangeColor").css("color","#757575");
	});

	$(".AfterOver2").hover(function(){
		$("#ChangeColor1").css("color","white");
	});
	$(".AfterOver2").mouseleave(function(){
		$("#ChangeColor1").css("color","#757575");
	});
});