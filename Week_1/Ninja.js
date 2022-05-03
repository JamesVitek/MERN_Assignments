class Ninja
{
    constructor(name, health, speed = 3, strength = 3)
    {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName()
    {
        console.log(`Hello, my name is ${this.name}`);
        return this;
    }
    
    showStats()
    {
        console.log(`Hello, my name is ${this.name}`);
        console.log(`My health is at: ${this.health}`);
        console.log(`My speed is at: ${this.speed}`);
        console.log(`My strenght is at: ${this.strength}`);
        return this;
    }

    drinkSake()
    {
        this.health += 10;
        return this;
    }
}

let James = new Ninja("James", 100)

James.drinkSake().showStats();