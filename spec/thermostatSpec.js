
describe("Thermostat:", function() {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has default temp 20 degrees', function() {
    expect(thermostat._temperature).toEqual(20);
  });
});