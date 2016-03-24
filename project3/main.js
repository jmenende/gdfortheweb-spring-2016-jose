// a variable=imagine a moving box that contains elements. these elements are the variables

var name = "Jose";
var zip = 02909;



// functions = instead of containing a word or number. they contain a set of instructions

function sayHello() {
	var greeting = "Hello " + name;
	console.log(greeting); 
	
	//jquery=dollar ()=input inside function, just like css
	// css= h1{}
	// . = call a function

	//$("h1").html(greeting);
}


// calling a function

sayHello();

$(".arrow-down").hover(function() {
	$(this).html("Hugely entertaining!-LA TIMES");
	$(this).addClass("hovered");
	

}, function() {
	$(this).html("");
	$(this).removeClass("hovered");
	
});


$(".arrow-right").hover(function() {
	$(this).html("Startlingly funny…intellectually stimulating… genuinely moving—San Francisco Examiner");
	$(this).addClass("hovered");
	

}, function() {
	$(this).html("");
	$(this).removeClass("hovered");
	
});


$(".arrow-up").hover(function() {
	$(this).html("Is all heart!-Washington Post");
	$(this).addClass("hovered");
	

}, function() {
	$(this).html("");
	$(this).removeClass("hovered");
	
});


$(".arrow-down").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 300;
	$(this).css("font-size", randNumber + "px");
});


$( document ).ready(function() {
	var randNumber = Math.random() * 500;
	$(this).css(".arrow-down", randNumber + "px");
  	
});



$(".arrow-up").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 300;
	$(this).css("font-size", randNumber + "px");
});


$( document ).ready(function() {
	var randNumber = Math.random() * 500;
	$(this).css(".arrow-up", randNumber + "px");
  	
});


$(".arrow-right").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 300;
	$(this).css("font-size", randNumber + "px");
});


$( document ).ready(function() {
	var randNumber = Math.random() * 500;
	$(this).css(".arrow-right", randNumber + "px");
  	
});


var bgColorArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
 '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

$('body').css('background', 'url(' + selectBG + ')')






















