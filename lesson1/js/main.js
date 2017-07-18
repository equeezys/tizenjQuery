var startTime;
var checkTime;
//Initialize function
$(document).ready(function(){

	   $("#img1").draggable();

	});
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "one" ){
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (error) {
					console.error("getCurrentApplication(): " + error.message);
				}
			}
			else{
				 window.history.back();
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}
function change(){
	$('#two').css({color:'green','font-size': '10px'});
}
function draw(){
	var mycanvas = document.getElementById("draw");
	var tmp=mycanvas.getContext('2d');
	tmp.font='30px Verdana';
	tmp.fillStyle='#000000';
	tmp.fillText("Tizen", 10, 30); 
	tmp.font='30px Verdana';
	tmp.fillStyle='#60016d';
	tmp.fillText("Javascript", 10, 60);
	tmp.font='30px Verdana';
	tmp.fillStyle='#60016d';
	tmp.fillText("canvas", 39, 117);
	tmp.font='30px Verdana';
	tmp.fillStyle='#ff0100';
	tmp.fillText("HTML5", 10, 110);
}
function drawChess(){
	var mycanvas = document.getElementById("draw2");
	var tmp=mycanvas.getContext('2d');
	tmp.fillRect(10,10,160,160);
	tmp.fillStyle='#ffffff';
	for(i=0;i<8;i++)
		for(j=0;j<8;j++){
			if((i+j) % 2 == 0 )
			tmp.fillRect(10+i*20,10+j*20,20,20);
		}
}
function loadCanvas3(){
	var mycanvas = document.getElementById("draw3");
	var tmp=mycanvas.getContext('2d');
	tmp.fillStyle='#ffffff';
	tmp.fillRect(0,0,300,200);
}
function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}
function animat(){
	var start = new Date();
	var mycanvas = document.getElementById("draw3");
	var tmp=mycanvas.getContext('2d');
	var speed=0.008
	for (var i = 0; i<4000; i++)
	{
		tmp.fillStyle='#ffffff';
		tmp.fillRect(0,0,300,200);
		tmp.fillStyle='#ff0000';
		tmp.fillRect(i*speed+20,40,20,20);
	}
}

