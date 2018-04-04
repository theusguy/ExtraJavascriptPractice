//Constructor for creating instances of Dog
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

//Creating the prototype that contains behavior shared by all Dogs
Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
	if (this.weight > 25) {
		console.log(this.name + " says Woof!");
	} else {
		console.log(this.name + " says Yip!");
	}
};
Dog.prototype.run = function() {
	console.log("Run!");
};
Dog.prototype.wag = function() {
	console.log("Wag!");
}

//Creating an instance of Dog called fido
var fido = new Dog("Fido", "Mixed", 38);
//Creating an instance of Dog called fluffy
var fluffy = new Dog("Fluffy", "Poodle", 30);
//Creating an instance of Dog called sopt
var spot = new Dog("Spot", "Chihuahua", 10);

//Each Dog inherits the behavior from the prototype

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

