/**
 * 
 * The People class is defined as an abstract class with a displayDate method that logs "some data".
 * The Kids class extends the People class. The abstract class is used to model what other classes should have.
 * An instance of the Kids class is created with let KidsClass = new Kids, and the displayDate method 
 * is called on the KidsClass instance, resulting in the log of "some data".
 * Please note that abstract classes cannot be instantiated directly, but can be extended by other classes.
 * 
 */


/**
 * Represents an abstract class for people.
 */
abstract class People {
    /**
     * Displays some data.
     */
    displayDate() {
      console.log("A person");
    }
  }
  
  /**
   * Represents a class for kids that extends the People class.
   */
  class Kids extends People {}
  
  // Create an instance of the Kids class
  let KidsClass = new Kids;
  
  // Call the displayDate method on the KidsClass instance
  KidsClass.displayDate();
  