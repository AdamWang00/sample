function hello() {
	currentText = document.getElementById('myText').innerText;
	inputText = document.getElementById("myInput").value;
	password = "hello123"

	if (inputText == password) {
		alert("hello there!")
	}

	if (currentText == "hello") {
		document.getElementById('myText').innerText = inputText;
	} else {
		document.getElementById('myText').innerText = "hello";
	}
}