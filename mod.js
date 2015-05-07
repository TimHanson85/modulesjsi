function sayHello(){
	console.log('hello wordl');
}

function superSecret(){
	console.log('noo you cant do that');
}

function theStuff(){
	console.log('You got the stuff')
}

module.exports = {
	version: '0.0.1',
	otherName: sayHello,
	otherThing: superSecret,
	shadyQuestion: theStuff
};