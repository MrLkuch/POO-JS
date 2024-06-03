class Animal {
    constructor(name) {
        this.name = name
    }
    makeNoise() {
        return console.log(`${this.name} makes noises`);
    }
}

class Dog extends Animal {
    makeNoise() {
        return console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    makeNoise() {
        return console.log(`${this.name} Meows`);
    }
}

let naafiri = new Dog('Naafiri');
naafiri.makeNoise();

let yuumi = new Cat('Yuumi');
yuumi.makeNoise();