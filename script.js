function firstChar(text) {
  // your code here
	let text1=text.trim();
	if(text1.length>0){
		return text1.charAt(0);
	}
	return ''
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
