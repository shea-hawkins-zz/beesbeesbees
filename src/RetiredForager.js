var RetiredForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canfly = true;
  this.treasureChest = [];
};
RetiredForagerBee.prototype = Object.create(Bee.prototype);
RetiredForagerBee.prototype.constructor = ForagerBee;
RetiredForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
