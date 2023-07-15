/**
 * The detected type of the arguments may define the type in the function
 * Represents a function that displays and returns some data of generic type.
 * @param someData - The data to be displayed and returned.
 * @returns The input data of generic type.
 */
function displayData<TYPE>(someData: TYPE): TYPE {
    let someOtherData: TYPE;
    return someData;
  }
  
  // Example usage with a string
  let stringData: string = displayData("Hello, world!");
  console.log(stringData); // Output: Hello, world!
  
  // Example usage with a number
  let numberData: number = displayData(42);
  console.log(numberData); // Output: 42
  