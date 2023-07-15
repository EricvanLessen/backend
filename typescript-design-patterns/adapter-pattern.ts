/**
 * The purpose of the Adapter pattern is to convert the interface of one class into another interface that 
 * clients expect. It allows incompatible classes to work together by wrapping the interface of one class 
 * with a compatible interface. The Adapter pattern is useful in scenarios where you have existing code or 
 * components that cannot be directly modified, but you still need to integrate them with other code that 
 * expects a different interface. By using an adapter, you can bridge the gap between incompatible interfaces
 * and enable communication and interaction between different components of a system.
 */

/**
 * The code demonstrates the usage of the Adapter pattern in TypeScript.
 * It defines the IPhone and Android interfaces to represent the phone interfaces.
 */
interface IPhone {
    useLightning();
  }
  
  interface Android {
    useMicroUSB();
  }
  
  /**
   * The iPhone7 class implements the IPhone interface and provides the implementation for using the lightning port.
   */
  class iPhone7 implements IPhone {
    useLightning() {
      console.log('Using lightning port..');
    }
  }
  
  /**
   * The GooglePixel class implements the Android interface and provides the implementation for using the micro USB port.
   */
  class GooglePixel implements Android {
    useMicroUSB() {
      console.log('Using micro USB...');
    }
  }
  
  /**
   * The LightningToMicroUSBAdapter class implements the Android interface and acts as an adapter to convert the IPhone's lightning port to a micro USB port.
   * It takes an instance of IPhone as a parameter in its constructor and delegates the useMicroUSB() method to the useLightning() method of the IPhone instance.
   */
  class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;
  
    constructor(iphone: IPhone) {
      this.iphoneDevice = iphone;
    }
  
    useMicroUSB() {
      console.log('Want to use micro USB, converting...');
      this.iphoneDevice.useLightning();
    }
  }
  
  // Create instances of the classes
  let iphone = new iPhone7();
  let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
  
  // Use the adapter to charge the iPhone using micro USB
  chargeAdaptor.useMicroUSB();
  