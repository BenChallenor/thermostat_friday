$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
  updateTemperature()
  displayWeather('London')

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

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city)
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=5b7ef2dd4272204b858df6076fe0b94e';
    var units = '&units=metric';
    $.get(url + token + units, function(response) {
      $('#current-temperature').text(response.main.temp);
    });
  };




})
