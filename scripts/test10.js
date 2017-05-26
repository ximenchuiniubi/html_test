function moveMessage() {
	if (!document.getElementById || !document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.left = "200px";
}

function positionMessage() {
	if (!document.getElementById || !document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	setTimeout("moveMessage()", 5000);
}
addLoadEvent(positionMessage);
// addLoadEvent(moveMessage);