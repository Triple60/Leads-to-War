function Infantry(cost, level, attack, defense, speed, range, accuracy) {
    this.cost = cost;
    this.level = level;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.range = range;
    this.accuracy = accuracy;
    Infantry.instances++;
}

	Infantry.instances = 0;
	function Rifleman(name) {
		this.name = name;
	} 

	Rifleman.prototype = new Infantry(25, 1, 10, 10, 10, 10, 10);
	function Heavy(name) {
		this.name = name;
	}

	Heavy.prototype = new Infantry(50, 1, 12, 15, 7, 10, 8);
	function Commander(name) {
		this.name = name;
	}

	Commander.prototype = new Infantry(75, 1, 6, 6, 15, 12, 15);
	function Flamethrower(name) {
		this.name = name;
	}

	Flamethrower.prototype = new Infantry(75, 1, 20, 10, 9, 5, 10);
	function Sniper(name) {
		this.name = name;
	}

	Sniper.prototype = new Infantry(100, 1, 15, 4, 7, 15, 15);
	function Mortar(name) {
		this.name = name;
	}

	Mortar.prototype = new Infantry(100, 1, 15, 15, 0, 17, 9);