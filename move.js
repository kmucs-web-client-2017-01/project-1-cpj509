$(function(){

	$("#animate").animate({fontSize:"5em"}, 1500);

	$("#cj").fadeIn(2000);
	$("#iu").fadeIn(2000);
	$("#sk").fadeIn(2000);
	$("#yk").fadeIn(2000);
});

$("#cj").click(function(){
	$("#iu").fadeOut(1500);
	$("#sk").fadeOut(1500);
	$("#yk").fadeOut(1500, function() {location.href = "cj.html"});
});

$("#iu").click(function(){
	$("#cj").fadeOut(1500);
	$("#sk").fadeOut(1500);
	$("#yk").fadeOut(1500, function() {location.href = "iu.html"});
});

$("#sk").click(function(){
	$("#cj").fadeOut(1500);
	$("#iu").fadeOut(1500);
	$("#yk").fadeOut(1500, function() {location.href = "sk.html"});
});

$("#yk").click(function(){
	$("#cj").fadeOut(1500);
	$("#iu").fadeOut(1500);
	$("#sk").fadeOut(1500, function() {location.href = "yk.html"});
});

$("#flip").click(function() {
  $("#panel").slideToggle(1500);
});

function fadeinF() {
	$("#p1").fadeIn(2000);
	$("#p2").fadeIn(2000);
}

setTimeout(fadeinF, 500);