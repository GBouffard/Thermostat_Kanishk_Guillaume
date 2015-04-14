var Thermostat = function() {
  this.powerSaving = true;
};

Thermostat.prototype.temperature = function(temperature) {
  return temperature;
};

Thermostat.prototype.hasInitialTemperature = function(temperature) {
  return 20;
};

Thermostat.prototype.toIncreaseTemperature = function(increase) {
  return 21;
};

Thermostat.prototype.toDecreaseTemperature = function(decrease) {
  return 19;
};

Thermostat.prototype.hasMinimumTemperature = function() {
  return 10;
};

Thermostat.prototype.PowerSaving = function(state) {
  return state;
};

Thermostat.prototype.hasMaximumTemperature = function() {
  if (this.PowerSaving() === true) return 25;
  return 32;
};