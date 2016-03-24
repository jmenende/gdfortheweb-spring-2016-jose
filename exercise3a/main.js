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

$("h1").hover(function() {
	$(this).html("Hi");
	$(this).addClass("hovered");
	$("h2").html("you are hovering something");

}, function() {
	$(this).html("See Ya");
	$(this).removeClass("hovered");
	$("h2").html("you are not hovering on something");
});


$("h1").click(function() {
	$(this).addClass("clicked");
	var randNumber = Math.random() * 300;
	$(this).css("font-size", randNumber + "px");
});




