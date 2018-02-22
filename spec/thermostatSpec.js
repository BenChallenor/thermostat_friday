
describe("Thermostat:", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Change temperature", function() {

    it('has default temp 20 degrees', function() {
      expect(thermostat._temperature).toEqual(20);
    });

    it('increases the temperarture by 1 degrees', function() {
      thermostat.increase();
      expect(thermostat._temperature).toEqual(21);
    });

    it('decreases the temperarture by 1 degrees', function() {
      thermostat.decrease();
      expect(thermostat._temperature).toEqual(19);
    });
  });

  describe("Minimum and maximum temperatures", function() {
    it('Temperature can not go below 10 degrees', function() {
      for (temp = 20; temp > 10; temp --) {
        thermostat.decrease();
      };
      expect(function() { thermostat.decrease() }).toThrow("Minimum temperature is 10 degrees")
    });


  });
});
