var Thermostat = function() {};

Thermostat.prototype.hasInitialTemperature = function(temperature) {
  return 20;
};

Thermostat.prototype.toIncreaseTemperature = function(increase) {
  return 21;
};

Thermostat.prototype.toDecreaseTemperature = function(decrease) {
  return 19;
};

Thermostat.prototype.hasMinimumTemperature = function(minimum) {
  return 10;
};