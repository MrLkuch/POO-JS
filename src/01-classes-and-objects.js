'use strict'

class car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    showDetails() {
        console.log(this.brand, this.model, this.year, this.color)
    }
}

let renaudR5 = new car('renaud', 'R5', '2024', 'black');
renaudR5.showDetails();