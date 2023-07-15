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
var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    /**
     * Turns on the Bluray player.
     */
    BlurayPlayer.prototype.on = function () {
        console.log('Bluray player turning on...');
    };
    /**
     * Turns off the Bluray player.
     */
    BlurayPlayer.prototype.turnOff = function () {
        console.log('Bluray turning off..');
    };
    /**
     * Plays the Bluray disc.
     */
    BlurayPlayer.prototype.play = function () {
        console.log('Playing bluray disc...');
    };
    return BlurayPlayer;
}());
/**
 * Represents an Amplifier.
 */
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    /**
     * Turns on the amplifier.
     */
    Amplifier.prototype.on = function () {
        console.log('Amp is turning on..');
    };
    /**
     * Turns off the amplifier.
     */
    Amplifier.prototype.turnOff = function () {
        console.log('Amplifier turning off..');
    };
    /**
     * Sets the source of the amplifier.
     * @param source - The source to set.
     */
    Amplifier.prototype.setSource = function (source) {
        console.log('Setting source to ' + source);
    };
    /**
     * Sets the volume level of the amplifier.
     * @param volumeLevel - The volume level to set.
     */
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log('Setting volume to ' + volumeLevel);
    };
    return Amplifier;
}());
/**
 * Represents lights in the home theater.
 */
var Lights = /** @class */ (function () {
    function Lights() {
    }
    /**
     * Dims the lights.
     */
    Lights.prototype.dim = function () {
        console.log('Lights are dimming..');
    };
    return Lights;
}());
/**
 * Represents a TV in the home theater.
 */
var TV = /** @class */ (function () {
    function TV() {
    }
    /**
     * Turns on the TV.
     */
    TV.prototype.turnOn = function () {
        console.log('TV turning on..');
    };
    /**
     * Turns off the TV.
     */
    TV.prototype.turnOff = function () {
        console.log('TV turning off..');
    };
    return TV;
}());
/**
 * Represents a popcorn maker in the home theater.
 */
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    /**
     * Turns on the popcorn maker.
     */
    PopcornMaker.prototype.turnOn = function () {
        console.log('Popcorn maker turning on..');
    };
    /**
     * Turns off the popcorn maker.
     */
    PopcornMaker.prototype.turnOff = function () {
        console.log('Popcorn maker turning off..');
    };
    /**
     * Pops the corn.
     */
    PopcornMaker.prototype.pop = function () {
        console.log('Popping corn!');
    };
    return PopcornMaker;
}());
/**
 * Represents the Home Theater Facade that provides a simplified interface for controlling the home theater system.
 */
var HomeTheaterFacade = /** @class */ (function () {
    /**
     * Initializes a new instance of the HomeTheaterFacade class.
     * @param amp - The amplifier instance.
     * @param bluray - The Bluray player instance.
     * @param lights - The lights instance.
     * @param tv - The TV instance.
     * @param popcornMaker - The popcorn maker instance.
     */
    function HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }
    /**
     * Simulates watching a movie in the home theater.
     */
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource('bluray');
        this.amp.setVolume(11);
        this.bluray.on();
        this.bluray.play();
    };
    /**
     * Ends the movie and turns off the home theater components.
     */
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    };
    return HomeTheaterFacade;
}());
// Create instances of the components
var bluray = new BlurayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new TV();
var popcornMaker = new PopcornMaker();
// Create a HomeTheaterFacade instance
var hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
// Simulate watching a movie
hometheater.watchMovie();
