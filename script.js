function LeftColumn() {
	document.getElementById("Catleft").style.width = "90%";
	document.getElementById("Dogright").style.width = "10%";
	document.getElementById("pic1").style.display = "block";
	document.getElementById("pic1").style.width = "70%"; 
	document.getElementById("pic2").style.display = "none";
}
function BothColumn() {
	document.getElementById("Catleft").style.width = "50%";
	document.getElementById("Dogright").style.width = "50%";
	document.getElementById("pic1").style.display = "block";
	document.getElementById("pic1").style.width = "93%"; 
	document.getElementById("pic2").style.display = "block";
	document.getElementById("pic2").style.width = "93%";
	document.getElementById("pic1").style.height = "90%";
	document.getElementById("pic2").style.height = "90%";
	
}
function RightColumn() {
	document.getElementById("Catleft").style.width = "10%";
	document.getElementById("Dogright").style.width = "90%";
	document.getElementById("pic2").style.display = "block";
	document.getElementById("pic2").style.width = "70%";
	document.getElementById("pic1").style.display = "none"; 
}
