function closeMenu() {
	var menu = document.getElementById("menu");
	menu.classList.remove("show");
};
var typewriter = new Typewriter(co, {loop: true, delay: 95, cursor: '.'});
typewriter
.pauseFor(2000)
.typeString('se zamilovat')
.pauseFor(3000)
.deleteChars(9)
.pauseFor(1000)
.typeString('dát dohromady')
.pauseFor(1300)
.deleteChars(10)
.pauseFor(200)
.deleteChars(3)
.typeString('rozejít')
.pauseFor(2500)
.deleteAll()
.start();

var today = new Date().getTime();
var signupStart = new Date("2023-02-13 16:00:00").getTime();
var signupEnd = new Date("2023-03-01 23:59:59").getTime();
var $signupShow = document.getElementById("signupShow");
if (today > signupStart && today < signupEnd) {
	$signupShow.classList.remove('d-none'); 
} else {
	$signupShow.classList.add('d-none');
};