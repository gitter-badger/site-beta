var el1 = document.getElementById('sign-up');
el1.onclick = flip;
var el2 = document.getElementById('flip-back');
el2.onclick = flip;

function flip() {
	document.querySelector("#card").classList.toggle("flip");
	return false;
	}
