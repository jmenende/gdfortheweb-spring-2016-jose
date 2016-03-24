var randNumber0 = Math.random() * 200;
var randNumber1 = Math.random() * 400;
document.getElementById("container1").style.left = randNumber0;
document.getElementById("container1").style.top = randNumber1;

randNumber0 = Math.random() * 900;
randNumber1 = Math.random() * 500;
document.getElementById("container2").style.left = randNumber0;
document.getElementById("container2").style.top = randNumber1;

randNumber0 = Math.random() * 100;
randNumber1 = Math.random() * 500;
document.getElementById("container3").style.left = randNumber0;
document.getElementById("container3").style.top = randNumber1;



var bgColorArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',
 '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', ],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

$('body').css('background', 'url(' + selectBG + ')')