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
function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

