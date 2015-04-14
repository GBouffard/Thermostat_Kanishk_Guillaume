var Thermostat = function() {
  this.PowerSaving = true;
  this.temperature = 20;
  this.MinimumTemperature = 10;
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
  return this.MinimumTemperature;
};

Thermostat.prototype.hasMaximumTemperature = function() {
  if (this.PowerSaving) return 25;
  return 32;
};

Thermostat.prototype.togglePowerSaving = function() {
  return this.PowerSaving = false;
};

Thermostat.prototype.toResetTemperature = function() {
  return this.temperature = 20;
};

Thermostat.prototype.hasColorDisplay = function() {
  if (this.temperature < 18) return 'Green';
  if (this.temperature > 25) return 'Red';  
  return 'Yellow';
};
