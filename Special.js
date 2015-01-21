function Special(cost, range) {
	this.cost = cost;
	this.range = range;
}

	function Nuke() {
		this.attack = 70;
	}
	Nuke.prototype = new Special(3000, 70);
	
	function DeathLaser() {
		this.attack = 50;
	}
	DeathLaser.prototype = new Special(2000, 50);
	
	function ShieldGen() {
		this.hitPoints = 90;
	}
	ShieldGen.prototype = new Special(2000, 50);
	
	function RobotLander() {
		this.attack = 25;
	}
	RobotLander.prototype = new Special(500, 15);
	
	function Ordnance() {
		var chance = Math.floor(Math.random * 3);
		switch(chance) {
			case (0):
				this.weapon = "Rocket Launcher";
				break;
			case (1):
				this.weapon = "Sniper";
				break;
			case (2):
				this.weapon = "Machine Gun";
				break;
		};
	}
	Ordnance.prototype = new Special(150, 10);
	
	function CashExtractor() {
		cash += 500;
	}
	CashExtractor.prototype = new Special(150, 0);