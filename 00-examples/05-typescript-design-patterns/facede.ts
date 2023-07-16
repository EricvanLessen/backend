/**
 * The Facade pattern is commonly used for the following purposes:
 * Simplifying complex systems: It provides a simplified interface to a complex system, making it easier to 
 * understand, use, and manage. By encapsulating the complexity behind a facade, clients can interact with 
 * the system without needing to understand its internal workings.
 * Promoting loose coupling: The facade acts as an intermediary between the client and the subsystem, decoupling
 *  them from each other. This allows changes in the subsystem to be isolated and reduces the impact on the client code.
 * Providing a higher-level interface: The facade presents a higher-level interface that abstracts away the details 
 * of the subsystem. It offers a more convenient and concise set of methods that encapsulate multiple operations
 *  or interactions with different components of the subsystem.
 * Improving maintainability: By encapsulating the subsystem behind a facade, the codebase becomes more modular 
 * and maintainable. Changes and updates to the subsystem can be confined to the facade, minimizing the impact 
 * on other parts of the system.
*/

/**
 * Represents a Bluray player.
 */
class BlurayPlayer {
    /**
     * Turns on the Bluray player.
     */
    on() {
      console.log('Bluray player turning on...');
    }
  
    /**
     * Turns off the Bluray player.
     */
    turnOff() {
      console.log('Bluray turning off..');
    }
  
    /**
     * Plays the Bluray disc.
     */
    play() {
      console.log('Playing bluray disc...');
    }
  }
  
  /**
   * Represents an Amplifier.
   */
  class Amplifier {
    /**
     * Turns on the amplifier.
     */
    on() {
      console.log('Amp is turning on..');
    }
  
    /**
     * Turns off the amplifier.
     */
    turnOff() {
      console.log('Amplifier turning off..');
    }
  
    /**
     * Sets the source of the amplifier.
     * @param source - The source to set.
     */
    setSource(source: string) {
      console.log('Setting source to ' + source);
    }
  
    /**
     * Sets the volume level of the amplifier.
     * @param volumeLevel - The volume level to set.
     */
    setVolume(volumeLevel: number) {
      console.log('Setting volume to ' + volumeLevel);
    }
  }
  
  /**
   * Represents lights in the home theater.
   */
  class Lights {
    /**
     * Dims the lights.
     */
    dim() {
      console.log('Lights are dimming..');
    }
  }
  
  /**
   * Represents a TV in the home theater.
   */
  class TV {
    /**
     * Turns on the TV.
     */
    turnOn() {
      console.log('TV turning on..');
    }
  
    /**
     * Turns off the TV.
     */
    turnOff() {
      console.log('TV turning off..');
    }
  }
  
  /**
   * Represents a popcorn maker in the home theater.
   */
  class PopcornMaker {
    /**
     * Turns on the popcorn maker.
     */
    turnOn() {
      console.log('Popcorn maker turning on..');
    }
  
    /**
     * Turns off the popcorn maker.
     */
    turnOff() {
      console.log('Popcorn maker turning off..');
    }
  
    /**
     * Pops the corn.
     */
    pop() {
      console.log('Popping corn!');
    }
  }
  
  /**
   * Represents the Home Theater Facade that provides a simplified interface for controlling the home theater system.
   */
  class HomeTheaterFacade {
    private bluray: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcornMaker: PopcornMaker;
  
    /**
     * Initializes a new instance of the HomeTheaterFacade class.
     * @param amp - The amplifier instance.
     * @param bluray - The Bluray player instance.
     * @param lights - The lights instance.
     * @param tv - The TV instance.
     * @param popcornMaker - The popcorn maker instance.
     */
    constructor(
      amp: Amplifier,
      bluray: BlurayPlayer,
      lights: Lights,
      tv: TV,
      popcornMaker: PopcornMaker
    ) {
      this.bluray = bluray;
      this.amp = amp;
      this.lights = lights;
      this.tv = tv;
      this.popcornMaker = popcornMaker;
    }
  
    /**
     * Simulates watching a movie in the home theater.
     */
    public watchMovie() {
      this.popcornMaker.turnOn();
      this.popcornMaker.pop();
  
      this.lights.dim();
  
      this.tv.turnOn();
  
      this.amp.on();
      this.amp.setSource('bluray');
      this.amp.setVolume(11);
  
      this.bluray.on();
      this.bluray.play();
    }
  
    /**
     * Ends the movie and turns off the home theater components.
     */
    endMovie() {
      this.popcornMaker.turnOff();
      this.amp.turnOff();
      this.tv.turnOff();
      this.bluray.turnOff();
    }
  }
  
  // Create instances of the components
  let bluray = new BlurayPlayer();
  let amp = new Amplifier();
  let lights = new Lights();
  let tv = new TV();
  let popcornMaker = new PopcornMaker();
  
  // Create a HomeTheaterFacade instance
  let hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
  // Simulate watching a movie
  hometheater.watchMovie();
  
  