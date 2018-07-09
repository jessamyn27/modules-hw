// Homework: Modules
// your task is to make a module (Car.js) that defines a car – with both properties and methods (functions) – and export it as a module to an index.js file.
// In the Car.js file:
//
// Properties should include:
//
// color, convertible (boolean), speed (0, at first)
// Functions specs:
//
// include accelerate and decelerate
// these should take one argument, the speed, and add or substract it the from the current speed
// return a string with the old speed and new speed
// call these functions at the bottom of the file

const car = module.exports = {
	color: 'pink',
	convertible: true,
	speed: 0,
	accelerate () {
		console.log(this.speed + " is the speed before accelerating");
		this.speed += 50;
		console.log(this.speed + " is the speed after accelerating");
	},
	decelerate () {
		console.log(this.speed + " is the speed before decelerating");
		this.speed -= 23;
		console.log(this.speed + " is the speed after decelerating");
	},
};

car.accelerate();
car.decelerate();

// should say 0 is the speed, then 50, then 27


// attempt to write it based on in class exercise to start but it needs to be a function that takes on properties and methods like above

// module.exports.color = turquoise
// module.exports.convertible = true
// module.exports.speed = 0
// module.exports.speedAccelerate = () =>{
// += 100
// }
// return accelerate;
// module.exports.speedDecelerate = () =>{
// -= 50
// }
