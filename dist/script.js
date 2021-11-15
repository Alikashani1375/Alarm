
var h2 = document.getElementById('clock');
var alarmInterval = null;

var currentTimeInterval = setInterval(function () {
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var ap = (date.getHours()) < 12 ? "AM" : "PM";

	h2.textContent = addZero(hour) + ":" + addZero(minutes) + ":"
		+ addZero(seconds) + " " + ap;

}, 1000);


function addZero(time) {
	return (time < 10 ? '0' + time : time)
}
function hoursMenu() {
	var select = document.getElementById('alarmhrs');
	var hrs = 24;
	for (i = 0; i < hrs; i++) {
		select.options[select.options.length] = new Option(i < 10 ? '0' + i : i, i)
	}
}
hoursMenu();

function minutesMenu() {
	var select = document.getElementById('alarmmins');
	var mins = 59;
	for (i = 0; i <= mins; i++) {
		select.options[select.options.length] =
			new Option(i < 10 ? '0' + i : i, i)
	}
}
minutesMenu();

function secondsMenu() {
	var select = document.getElementById('alarmsecs');
	var secs = 59;
	for (i = 0; i <= secs; i++) {
		select.options[select.options.length] =
			new Option(i < 10 ? '0' + i : i, i)
	}
}
secondsMenu();

function alarmSet() {
	var hr = document.getElementById('alarmhrs');
	var min = document.getElementById('alarmmins');
	var sec = document.getElementById('alarmsecs');
	var ap = document.getElementById('ampm')
	selectedHour = hr.value;
	selectedMin = min.value;
	selectedSec = sec.value;
	selectedAp = ap.value;
	var alarmTime = addZero(selectedHour) + ':' + addZero(selectedMin)
		+ ':' + addZero(selectedSec) + ' ' + selectedAp;


	clearInterval(alarmInterval);

	alarmInterval = setInterval(function () {
		if (h2.textContent == alarmTime) {
			alert('ok')
		};

	}, 1000)
	document.getElementById('alarmTime').innerHTML = alarmTime;

}

function alarmClear() {
	clearInterval(alarmInterval);

}
