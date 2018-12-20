/*Task 2*/

var theCar = {
  model: 'Dodge',
  year: 1995,
  mileage: '10238075 km',
  color: 'black',
  ignitionOnOff: function(val) {
    this.ignition = val;
  },
  moveOn: function() {
    if (this.ignition) {
      console.log('The car model ' + this.model + ' color ' + this.color + ' move on!');
    } else {
      console.log('Please, turn on ignition');
    }
  },
  turnOff: function() {
    if (this.ignition) {
      this.ignition = false;
      console.log(this.model + ' was stopped.');
    } else {
      console.log('Ignition has already off.');
    }
  },
  amountOfFuel: Math.random(),
  checkFuel: function() {
    if (this.amountOfFuel < 0.7) {
      console.log('Car want to eat!))');
    } else {
      console.log('Car is full!');
    }
  },
  fillTheCar: function() {
    while (this.amountOfFuel < 0.7) {
      this.amountOfFuel = Math.random();
    }
    console.log('Car was filled');
  }
};

theCar.ignitionOnOff(true);

theCar.moveOn();

theCar.turnOff();

theCar.checkFuel();

theCar.fillTheCar();
