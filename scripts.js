function Phone(brand, price, color, capacity) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.capacity = capacity;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand, ', it has capacity of ' + this.capacity, ', color is ' + this.color, 'and the price is ' + this.price + '.');
}

var SamsungGalaxyS6 = new Phone('Samsung', 1500, 'black', '64 Gb');
var iPhone6S = new Phone('Apple', 1600, 'gold', '128 Gb');
var OnePlusOne = new Phone('One Plus', 1200, 'silver', '32 Gb');

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
