/**
 * The code demonstrates the usage of the State pattern in TypeScript.
 * It defines a module named "test" that implements the State pattern for managing the states of an order.
 * The module defines interfaces for the states and a class for the order.
 * Each state implements the State interface and handles the corresponding actions for the order.
 * The Order class manages the current state and transitions between different states based on actions.
 * The code creates an instance of the Order class, performs various actions, and outputs the current state.
 */

/**
 * The purpose of the state pattern is to allow an object to alter its behavior when its internal state 
 * changes. It enables an object to appear as if it has changed its class, providing different behaviors 
 * based on its internal state. The state pattern promotes loose coupling between the object and its 
 * behaviors, making it easier to add or modify behaviors independently. It also helps in managing complex 
 * state transitions and simplifies the code by encapsulating state-specific logic within separate state 
 * classes.
 */

/**
 * The State interface represents the common methods that all states must implement.
 */
interface State {
    order: Order;
  
    /**
     * Method for canceling the order.
     */
    cancelOrder();
  
    /**
     * Method for verifying the payment of the order.
     */
    verifyPayment();
  
    /**
     * Method for shipping the order.
     */
    shipOrder();
  }
  
  /**
   * The Order class represents the context of the state pattern.
   * It manages the current state and transitions between different states based on actions.
   */
  class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPrepared: State;
  
    public currentState: State;
  
    constructor() {
      this.cancelledOrderState = new CancelledOrderState(this);
      this.paymentPendingState = new PaymentPendingState(this);
      this.orderShippedState = new OrderShippedState(this);
      this.orderBeingPrepared = new OrderBeingPrepared(this);
  
      // Set the initial state to PaymentPendingState
      this.setState(this.paymentPendingState);
    }
  
    /**
     * Sets the current state of the order.
     * @param state - The state object to set.
     */
    public setState(state: State) {
      this.currentState = state;
    }
  
    /**
     * Returns the current state of the order.
     * @returns The current state object.
     */
    public getCurrentState(): State {
      return this.currentState;
    }
  }
  
  /**
   * The CancelledOrderState represents the state of an order when it is cancelled.
   */
  class CancelledOrderState implements State {
    order: Order;
  
    constructor(order: Order) {
      this.order = order;
    }
  
    /**
     * Cancels the order.
     */
    public cancelOrder() {
      console.log('This order is already cancelled.');
      this.order.setState(this.order.cancelledOrderState);
    }
  
    /**
     * Verifies the payment of the order.
     */
    public verifyPayment() {
      console.log('The order is cancelled, you cannot pay anymore.');
    }
  
    /**
     * Ships the order.
     */
    public shipOrder() {
      console.log('The order is cancelled, you cannot ship it anymore.');
    }
  }
  
  /**
   * The PaymentPendingState represents the state of an order when the payment is pending.
   */
  class PaymentPendingState implements State {
    order: Order;
  
    constructor(order: Order) {
      this.order = order;
    }
  
    /**
     * Cancels the order.
     */
    public cancelOrder() {
      console.log('Cancelling your unpaid order...');
      this.order.setState(this.order.cancelledOrderState);
    }
  
    /**
     * Verifies the payment of the order.
     */
    public verifyPayment() {
      console.log('Payment verified! Shipping soon.');
      this.order.setState(this.order.orderBeingPrepared);
    }
  
    /**
     * Ships the order.
     */
    public shipOrder() {
      console.log('Cannot ship order when payment is pending.');
    }
  }
  
  /**
   * The OrderBeingPrepared represents the state of an order when it is being prepared for shipping.
   */
  class OrderBeingPrepared implements State {
    order: Order;
  
    constructor(order: Order) {
      this.order = order;
    }
  
    /**
     * Cancels the order.
     */
    public cancelOrder() {
      console.log('Cancelling your order... You will be refunded.');
      this.order.setState(this.order.cancelledOrderState);
    }
  
    /**
     * Verifies the payment of the order.
     */
    public verifyPayment() {
      console.log('Payment is already verified.');
    }
  
    /**
     * Ships the order.
     */
    public shipOrder() {
      console.log('Shipping your order now...');
      this.order.setState(this.order.orderShippedState);
    }
  }
  
  /**
   * The OrderShippedState represents the state of an order when it is shipped.
   */
  class OrderShippedState implements State {
    order: Order;
  
    constructor(order: Order) {
      this.order = order;
    }
  
    /**
     * Cancels the order.
     */
    public cancelOrder() {
      console.log('You cannot cancel an order that has been shipped.');
    }
  
    /**
     * Verifies the payment of the order.
     */
    public verifyPayment() {
      console.log('Payment is already verified.');
    }
  
    /**
     * Ships the order.
     */
    public shipOrder() {
      console.log('Order is already shipped.');
    }
  }
  
  // Create an instance of the Order class
  let order = new Order();
  
  // Perform actions on the order
  order.getCurrentState().verifyPayment();
  order.getCurrentState().shipOrder();
  order.getCurrentState().cancelOrder();
  
  console.log('Order state: ' + (<any>order.getCurrentState()).constructor.name);

/**
 * Certainly! In TypeScript, the `<any>` type assertion is used to temporarily override the type checking for
 * a specific expression and treat it as the `any` type. The `any` type is a special type in TypeScript that
 * essentially turns off type checking for that specific expression, allowing you to perform operations that
 * might not be type-safe. 
 * In the code `console.log('Order state: ' + (<any>order.getCurrentState()).constructor.name);`, the `<any>` 
 * type assertion is applied to the `order.getCurrentState()` expression. This means that the compiler 
 * treats `order.getCurrentState()` as having the `any` type, ignoring its inferred or declared type. The 
 * purpose of using `<any>` in this context is to access the `constructor` property of the state object 
 * returned by `order.getCurrentState()`. By default, the compiler doesn't allow accessing the `constructor` 
 * property on objects, as it's reserved for class constructors. However, by asserting the type as `any`, 
 * the compiler allows accessing the `constructor` property. In this case, the `constructor.name` property 
 * is used to retrieve the name of the constructor function of the current state object. It provides a way 
 * to identify the specific state class and display it in the console output as part of the log message. 
 * It's important to note that using `<any>` should be done with caution, as it bypasses type checking and 
 * can lead to potential type errors if not used carefully. It's generally recommended to use type assertions 
 * sparingly and ensure that the underlying types are compatible to avoid runtime errors.
 */