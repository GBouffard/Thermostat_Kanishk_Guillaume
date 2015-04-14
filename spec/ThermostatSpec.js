describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.hasInitialTemperature(20)).toEqual(20);
  });

  it('can increase the temperature with the up button', function() {
    expect(thermostat.toIncreaseTemperature(1)).toEqual(21);
  });
});

