/**
 * 
 * By using these access modifiers, you can control the visibility and accessibility of 
 * class members to enforce encapsulation and data hiding in your TypeScript code.
 * 
 * `private`: When a member is marked as `private`, it can only be accessed within the same class.
 * It is not accessible from outside the class or its subclasses.
 * 
 */

class Example0 {
  private privateProperty: string;

  private privateMethod() {
    // Code here can only be accessed within this class
  }
}

const instance0 = new Example0();
// instance0.privateProperty; // Error: privateProperty is private and cannot be accessed
// instance0.privateMethod(); // Error: privateMethod is private and cannot be accessed


/**
 * 
 * `protected`: A `protected` member can be accessed within the same class and its subclasses. 
 * It is not accessible from outside the class hierarchy.
 * 
 */


class Example1 {
  protected protectedProperty: string;

  protected protectedMethod() {
    // Code here can be accessed within this class and its subclasses
  }
}

class SubExample1 extends Example1 {
  someMethod() {
    this.protectedProperty; // Accessible within subclasses
    this.protectedMethod(); // Accessible within subclasses
  }
}

const instance1 = new Example1();
// instance1.protectedProperty; // Error: protectedProperty is protected and cannot be accessed
// instance1.protectedMethod(); // Error: protectedMethod is protected and cannot be accessed

/**
 * `public`: The `public` modifier is the default and allows access to a member from anywhere. 
 * It is not required to explicitly specify `public`.
 */

class Example2 {
  public publicProperty: string;

  public publicMethod() {
    // Code here can be accessed from anywhere
  }
}

const instance2 = new Example2();
instance2.publicProperty; // Accessible
instance2.publicMethod(); // Accessible


