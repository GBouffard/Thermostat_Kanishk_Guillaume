describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ('has a temperature', function() {
    expect(thermostat.temperature(22)).toEqual(22);
  }); 

  it('starts at 20 degrees', function() {
    expect(thermostat.hasInitialTemperature(20)).toEqual(20);
  });

  it('can increase the temperature with the up button', function() {
    expect(thermostat.toIncreaseTemperature(1)).toEqual(21);
  });

  it('can decrease the temperature with the down button', function() {
    expect(thermostat.toDecreaseTemperature(1)).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    expect(thermostat.hasMinimumTemperature()).toEqual(10);
  });

  it('can turn on power saving mode', function() {
    expect(thermostat.PowerSaving).toBe(true)
  });

  it('can turn off power saving mode', function() {
    thermostat.togglePowerSaving();
    expect(thermostat.PowerSaving()).toBe(false);
  });  

  it('has a maximum of 25 when power saving mode is on', function() {
    thermostat.PowerSaving(true);
    expect(thermostat.hasMaximumTemperature()).toEqual(25);
  });

  it('has a maximum of 32 when power saving mode is off', function(){
    thermostat.PowerSaving(false);
    expect(thermostat.hasMaximumTemperature()).toEqual(32);
  });

});
