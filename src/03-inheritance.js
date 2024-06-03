'use strict';
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, color) {
        super(brand, model, year);

        this.color = color;
    }

    showDetails() {
        console.log(this.brand, this.model, this.year, this.color)
    }
}

let renaudR5 = new Car('renaud', 'R5', '2024', 'black');
renaudR5.showDetails();