/**
 * The purpose of the Adapter pattern is to convert the interface of one class into another interface that
 * clients expect. It allows incompatible classes to work together by wrapping the interface of one class
 * with a compatible interface. The Adapter pattern is useful in scenarios where you have existing code or
 * components that cannot be directly modified, but you still need to integrate them with other code that
 * expects a different interface. By using an adapter, you can bridge the gap between incompatible interfaces
 * and enable communication and interaction between different components of a system.
 */
/**
 * The iPhone7 class implements the IPhone interface and provides the implementation for using the lightning port.
 */
var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.useLightning = function () {
        console.log('Using lightning port..');
    };
    return iPhone7;
}());
/**
 * The GooglePixel class implements the Android interface and provides the implementation for using the micro USB port.
 */
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('Using micro USB...');
    };
    return GooglePixel;
}());
/**
 * The LightningToMicroUSBAdapter class implements the Android interface and acts as an adapter to convert the IPhone's lightning port to a micro USB port.
 * It takes an instance of IPhone as a parameter in its constructor and delegates the useMicroUSB() method to the useLightning() method of the IPhone instance.
 */
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log('Want to use micro USB, converting...');
        this.iphoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
// Create instances of the classes
var iphone = new iPhone7();
var chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
// Use the adapter to charge the iPhone using micro USB
chargeAdaptor.useMicroUSB();
