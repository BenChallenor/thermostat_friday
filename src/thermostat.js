'use strict';

function Thermostat() {
  this._temperature = 20;
  this._powerSave = true;
};

Thermostat.prototype = {

  increase: function() {
    if (this._temperature === 32) {
      throw "Maximum temperature is 32 degrees";
    };
    if (this._temperature === 25 && this._powerSave === true) {
      throw "Maximum temperature with powerSave is 25 degrees";
    }
     this._temperature += 1;
  },

  decrease: function() {
    if (this._temperature === 10) {
      throw "Minimum temperature is 10 degrees";
    };
    this._temperature -= 1;
  },

  saverMode: function() {
    if(this._powerSave === false) {
      this._powerSave = true;
    } else if (this._powerSave === true) {
      this._powerSave = false
    };
  },
  reset: function() {
    this._temperature = 20;
  },

  energyUsage: function () {
    if(this._temperature < 18) {
      return "low-usage";
    } else if(this._temperature < 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    };
  }
};
