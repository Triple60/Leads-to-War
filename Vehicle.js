function Vehicle(cost, attack, hitPoints, speed, range, accuracy) {
	this.cost = cost;
	this.attack = attack;
	this.fullHP = hitPoints;
	this.hitPoints = hitPoints;
	this.speed = speed;
	this.range = range;
	this.accuracy = accuracy;
	this.hitPoints = this.hitPoints - attack;
	this.level = 1;
	this.healthPack = function() {
		cash -= 100;
		var oldHP = this.hitPoints;
		this.hitPoints += 25;
		if (this.hitPoints > oldHP) {
			this.hitPoints = this.fullHP;
		};
	units++
}

	function Motorbike(name) {
		this.name = name;
	}
	Motorbike.prototype = new Vehicle(75, 12, 8, 14, 10, 10);

	function ArmoredCar(name) {
		this.name = name;
	}
	ArmoredCar.prototype = new Vehicle(125, 12, 20, 14, 6, 6);

	function ArmoredTruck(name) {
		this.name = name;
	}
	ArmoredTruck.prototype = new Vehicle(125, 12, 24, 10, 6, 6);

	function Tank(name) {
		this.name = name;
	}
	Tank.prototype = new Vehicle(200, 20, 15, 5, 10, 10);
