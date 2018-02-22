'use strict';

function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype = {

  increase: function() {
     this._temperature += 1;
  },

  decrease: function() {
      this._temperature -= 1;
  }
};
