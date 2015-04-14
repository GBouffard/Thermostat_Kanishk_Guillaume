var Thermostat = function() {
  this.PowerSaving = true;
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

Thermostat.prototype.hasMaximumTemperature = function() {
  if (this.PowerSaving) return 25;
  return 32;
};

Thermostat.prototype.togglePowerSaving = function() {
  return this.PowerSaving = false;
};