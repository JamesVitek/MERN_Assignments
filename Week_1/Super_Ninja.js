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

class Sensei extends Ninja
{
    constructor(name, health = 100, speed = 10, strength = 10, wisdom = 10)
    {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdon()
    {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}

let James = new Ninja("James", 100)
let Vitek = new Sensei("Vitek")

James.drinkSake().showStats();
Vitek.speakWisdon().showStats();
