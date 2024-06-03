'use strict';

class Car {
    #brand = '';
    #model = '';
    #year = '';
    #color = '';

    constructor(brand, model, year, color) {
        this.#brand = brand;
        this.#model = model;
        this.#year = year;
        this.#color = color;
    }

    setBrand(value) {
        this.#brand = value;
    }

    getBrand() {
        return this.#brand;
    }

    setModel(value) {
        this.#model = value;
    }

    getModel() {
        return this.#model;
    }

    setYear(value) {
        this.#year = value;
    }

    getYear() {
        return this.#year;
    }

    setColor(value) {
        this.#color = value;
    }

    getColor() {
        return this.#color;
    }

    showDetails() {
        console.log(this.#brand, this.#model, this.#year, this.#color)
    }
}

let renaudR5 = new Car('renaud', 'R5', '2024', 'black');
renaudR5.setColor('white');
console.log(renaudR5.getColor());
