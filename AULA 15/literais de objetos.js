let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",

    displayInfo: function() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    },

    
    paintCar: function(newClolor) {
        this.color = newColor;
    }
};


console.log(car.make);

car.displayInfo();