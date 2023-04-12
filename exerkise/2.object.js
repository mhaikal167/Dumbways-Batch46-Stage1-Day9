class Car {
    constructor(make,model){
        this.make = make,
        this.model = model
    }

    getInfo() {
        return `This car is ${this.make} ${this.model}`
    }
}

// object
let myCar = new Car("Simbada","XR8");
let yourCar = new Car("Romewo" ,"CCT")
