function makeid(l) {
  // write your code here
	let random = Math.random().toString(36).slice(2).substring(0,l);
	return random;
	
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

