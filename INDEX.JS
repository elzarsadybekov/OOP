class Car {
    brand;
    model;
    carYear;
    distance;
    countOfFuel;
    #_nameOfOwner;

    constructor(brand, model, carYear, distance, countOfFuel, nameOfOwner) {
        this.brand = brand;
        this.model = model;
        this.carYear = carYear;
        this.countOfFuel = countOfFuel;
        this.distance = distance;
        this.#_nameOfOwner = nameOfOwner
    }

    getConsumptionFuel() {
        let result = this.countOfFuel / this.distance * 100;
        console.log(`${Math.round(result)} литров мы потратили на 100 км`); 
    }

    get getName () {
        return this.#_nameOfOwner
    }

    set setName (name) {
        console.log(name);
    }
}

const myCar = new Car('Mercedes', 'c-class', '2020', 400, 63, 'Boris');
console.log(myCar.brand, myCar.model, myCar.nameOfOwner); 

myCar.getConsumptionFuel()


console.log(myCar.getName);