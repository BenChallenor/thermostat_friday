
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

  describe("Power saver mode:", function() {
    it('defaults to on', function(){
      expect(thermostat._powerSave).toEqual(true);
    });
    it('allows to change powerSave to false', function() {
      thermostat.saverMode();
      expect(thermostat._powerSave).toEqual(false);
    });

    it('if powerSave is on, temperature can not go above 25 degrees', function () {
      for (temp = 20; temp < 25; temp++) {
        thermostat.increase();
      };      
      expect(function () { thermostat.increase() }).toThrow("Maximum temperature with powerSave is 25 degrees")
    });

    it('if powerSave is off, temperature can not go above 32 degrees', function () {
      thermostat.saverMode();      
      for (temp = 20; temp < 32; temp++) {
        thermostat.increase();
      };
      expect(function () { thermostat.increase() }).toThrow("Maximum temperature is 32 degrees")
    });
  });

    describe("Reset", function() {
      it('resets the temperature to 20 degrees', function() {
        thermostat.increase();
        thermostat.reset();
        expect(thermostat._temperature).toEqual(20);
      });
    });

    describe("energy usage", function() {
      it('low energy usage', function () {
        for (temp = 20; temp > 17; temp --) {
          thermostat.decrease();
        };
        expect(thermostat.energyUsage()).toEqual("low-usage");        
      });
      
      it('medium energy usage', function () {
        expect(thermostat.energyUsage()).toEqual("medium-usage");        
      });
      
      it('high energy usage', function () {
        thermostat.saverMode();        
        for (temp = 20; temp < 26; temp ++) {
          thermostat.increase();
        };
        expect(thermostat.energyUsage()).toEqual("high-usage");        
      });
    });
});
