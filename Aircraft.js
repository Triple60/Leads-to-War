function Aircraft(cost, level, attack, defense, speed, range, accuracy) {
    this.cost = cost;
    this.level = level;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.range = range;
    this.accuracy = accuracy;
    Aircraft.instances++;
}

    Aircraft.instances = 0;
    function Paratrooper(name) {
        this.name = name;
    }

    Paratrooper.prototype = new Aircraft(75, 1, 12, 8, 14, 12, 8);
    function Helicopter(name) {
        this.name = name;
    }

    Helicopter.prototype = new Aircraft(150, 1, 12, 12, 14, 12, 10);
    function Airplane(name) {
        this.name = name;
    }

    Airplane.prototype = new Aircraft(175, 1, 16, 12, 12, 12, 10);
    function Bomber(name) {
        this.name = name;
    }

    Bomber.prototype = new Aircraft(200, 1, 20, 10, 12, 12, 10);