/**
 * The code demonstrates the usage of Observer pattern in TypeScript.
 * It defines the Subject and Observer interfaces.
 * The WeatherStation class implements the Subject interface and manages the observers and temperature measurement.
 * The TemperatureDisplay and Fan classes implement the Observer interface and update their display or perform actions based on temperature changes.
 * The code creates instances of the WeatherStation, TemperatureDisplay, and Fan classes, registers the observers with the WeatherStation, and updates the temperature.
 */

/**
 * The observer pattern is used when you want to establish a one-to-many relationship between objects. 
 * In this pattern, there is a subject (also known as observable) that maintains a list of observers. 
 * Whenever the state of the subject changes, it notifies all the observers, and they can update themselves 
 * accordingly. This pattern is useful when you have a situation where multiple objects need to be notified 
 * and updated when a specific event or change occurs in another object.
 */

interface Subject {
    /**
     * Register an observer to receive updates from the subject.
     * @param o - The observer object.
     */
    registerObserver(o: Observer);
  
    /**
     * Remove an observer from the subject.
     * @param o - The observer object.
     */
    removeObserver(o: Observer);
  
    /**
     * Notify all registered observers of a change in the subject's state.
     */
    notifyObservers();
  }
  
  interface Observer {
    /**
     * Update the observer with the new temperature value.
     * @param temperature - The new temperature value.
     */
    update(temperature: number);
  }
  
  class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number;
  
    registerObserver(o: Observer) {
      this.observers.push(o);
    }
  
    removeObserver(o: Observer) {
      let index = this.observers.indexOf(o);
      this.observers.splice(index, 1);
    }
  
    notifyObservers() {
      for (let observer of this.observers) {
        observer.update(this.temperature);
      }
    }
  
    setTemperature(temp: number) {
      console.log('WeatherStation: new temperature measurement: ' + temp);
      this.temperature = temp;
      this.notifyObservers();
    }
  }
  
  class TemperatureDisplay implements Observer {
    private subject: Subject;
  
    constructor(weatherStation: Subject) {
      this.subject = weatherStation;
      weatherStation.registerObserver(this);
    }
  
    update(temperature: number) {
      console.log('TemperatureDisplay: I need to update my display');
    }
  }
  
  class Fan implements Observer {
    private subject: Subject;
  
    constructor(weatherStation: Subject) {
      this.subject = weatherStation;
      weatherStation.registerObserver(this);
    }
  
    update(temperature: number) {
      if (temperature > 25) {
        console.log('Fan: Its hot here, turning myself on...');
      } else {
        console.log('Fan: Its nice and cool, turning myself off...');
      }
    }
  }
  
  let weatherStation = new WeatherStation();
  
  let tempDisplay = new TemperatureDisplay(weatherStation);
  let fan = new Fan(weatherStation);
  
  weatherStation.setTemperature(20);
  weatherStation.setTemperature(30);
  