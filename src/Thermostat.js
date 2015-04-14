var Thermostat = function() {
  this.PowerSaving = true;
  this.temperature = 20;
};

Thermostat.prototype.temperature = function(temperature) {
  return temperature;
};

Thermostat.prototype.toIncreaseTemperature = function(increase) {
  return this.temperature += increase;
};

Thermostat.prototype.toDecreaseTemperature = function(decrease) {
  return this.temperature -= decrease;
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

Thermostat.prototype.toResetTemperature = function() {
  return this.temperature = 20
};