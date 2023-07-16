/**
 * The code demonstrates the usage of Observer pattern in TypeScript.
 * It defines the Subject and Observer interfaces.
 * The WeatherStation class implements the Subject interface and manages the observers and temperature measurement.
 * The TemperatureDisplay and Fan classes implement the Observer interface and update their display or perform actions based on temperature changes.
 * The code creates instances of the WeatherStation, TemperatureDisplay, and Fan classes, registers the observers with the WeatherStation, and updates the temperature.
 */
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    return WeatherStation;
}());
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log('TemperatureDisplay: I need to update my display');
    };
    return TemperatureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
        }
        else {
            console.log('Fan: Its nice and cool, turning myself off...');
        }
    };
    return Fan;
}());
var weatherStation = new WeatherStation();
var tempDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
weatherStation.setTemperature(22);
