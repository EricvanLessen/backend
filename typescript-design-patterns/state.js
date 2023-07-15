/**
 * The code demonstrates the usage of the State pattern in TypeScript.
 * It defines a module named "test" that implements the State pattern for managing the states of an order.
 * The module defines interfaces for the states and a class for the order.
 * Each state implements the State interface and handles the corresponding actions for the order.
 * The Order class manages the current state and transitions between different states based on actions.
 * The code creates an instance of the Order class, performs various actions, and outputs the current state.
 */
/**
 * The Order class represents the context of the state pattern.
 * It manages the current state and transitions between different states based on actions.
 */
var Order = /** @class */ (function () {
    function Order() {
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
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    /**
     * Returns the current state of the order.
     * @returns The current state object.
     */
    Order.prototype.getCurrentState = function () {
        return this.currentState;
    };
    return Order;
}());
/**
 * The CancelledOrderState represents the state of an order when it is cancelled.
 */
var CancelledOrderState = /** @class */ (function () {
    function CancelledOrderState(order) {
        this.order = order;
    }
    /**
     * Cancels the order.
     */
    CancelledOrderState.prototype.cancelOrder = function () {
        console.log('This order is already cancelled.');
        this.order.setState(this.order.cancelledOrderState);
    };
    /**
     * Verifies the payment of the order.
     */
    CancelledOrderState.prototype.verifyPayment = function () {
        console.log('The order is cancelled, you cannot pay anymore.');
    };
    /**
     * Ships the order.
     */
    CancelledOrderState.prototype.shipOrder = function () {
        console.log('The order is cancelled, you cannot ship it anymore.');
    };
    return CancelledOrderState;
}());
/**
 * The PaymentPendingState represents the state of an order when the payment is pending.
 */
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    /**
     * Cancels the order.
     */
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
    };
    /**
     * Verifies the payment of the order.
     */
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log('Payment verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPrepared);
    };
    /**
     * Ships the order.
     */
    PaymentPendingState.prototype.shipOrder = function () {
        console.log('Cannot ship order when payment is pending.');
    };
    return PaymentPendingState;
}());
/**
 * The OrderBeingPrepared represents the state of an order when it is being prepared for shipping.
 */
var OrderBeingPrepared = /** @class */ (function () {
    function OrderBeingPrepared(order) {
        this.order = order;
    }
    /**
     * Cancels the order.
     */
    OrderBeingPrepared.prototype.cancelOrder = function () {
        console.log('Cancelling your order... You will be refunded.');
        this.order.setState(this.order.cancelledOrderState);
    };
    /**
     * Verifies the payment of the order.
     */
    OrderBeingPrepared.prototype.verifyPayment = function () {
        console.log('Payment is already verified.');
    };
    /**
     * Ships the order.
     */
    OrderBeingPrepared.prototype.shipOrder = function () {
        console.log('Shipping your order now...');
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPrepared;
}());
/**
 * The OrderShippedState represents the state of an order when it is shipped.
 */
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    /**
     * Cancels the order.
     */
    OrderShippedState.prototype.cancelOrder = function () {
        console.log('You cannot cancel an order that has been shipped.');
    };
    /**
     * Verifies the payment of the order.
     */
    OrderShippedState.prototype.verifyPayment = function () {
        console.log('Payment is already verified.');
    };
    /**
     * Ships the order.
     */
    OrderShippedState.prototype.shipOrder = function () {
        console.log('Order is already shipped.');
    };
    return OrderShippedState;
}());
// Create an instance of the Order class
var order = new Order();
// Perform actions on the order
order.getCurrentState().verifyPayment();
order.getCurrentState().shipOrder();
order.getCurrentState().cancelOrder();
console.log('Order state: ' + order.getCurrentState().constructor.name);
