$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
  updateTemperature()

  $('#temperature-up').on('click', function() {
    thermostat.increase();
    updateTemperature();
  })

  $('#temperature-down').on('click', function() {
    thermostat.decrease();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.saverMode();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.saverMode();
    $('#power-saving-status').text('off')
    updateTemperature();
  })





})
