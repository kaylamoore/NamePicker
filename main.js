var friendsNames = ["Jenn", "Ana", "Kate", "Gillian", "Samantha", "Sydney", "Rebecca", "Nadine", "Justin", "Percy", "Josh", "Fady", "Eric", "Alec", "Blaise"];

function eachName() {
	var namePicker = friendsNames[Math.floor(Math.random() * friendsNames.length)];
	console.log(namePicker);
}