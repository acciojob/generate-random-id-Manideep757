function makeid(l) {
  // write your code here
	let random = Math.random().toString(36).slice(2)subString(0,l);
	console.log(random);
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

