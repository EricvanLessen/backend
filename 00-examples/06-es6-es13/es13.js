/* 1. private fields
 we can now use a preceding # in the field names to block anybody from accessing 
 them outside of the class they're defined on.
*/
class ColorButton extends HTMLElement {
    // All fields are public by default
    color = "red"
  
    // Private fields start with a #, can only be changed from inside the class
    #clicked = false
  }
  
  const button = new ColorButton()
  // Public fields can be accessed and changed by anyone
  button.color = "blue"
  
  // SyntaxError here 
  console.log(button.#clicked) // Cannot be read from outside
  button.#clicked = true // Cannot be assigned a value from outside


  // Private instance methods and accessors
  class Banner extends HTMLElement {
    // Private variable that cannot be reached directly from outside, but can be modified by the methods inside:
  
    #slogan = "Hello there!"
    #counter = 0
  
    // private getters and setters (accessors):
  
    get #slogan() {return #slogan.toUpperCase()}
    set #slogan(text) {this.#slogan = text.trim()}
  
    get #counter() {return #counter}
    set #counter(value) {this.#counter = value}
  
    constructor() {
      super();
      this.onmouseover = this.#mouseover.bind(this);
    }
  
    // private method:
    #mouseover() {
      this.#counter = this.#counter++;
      this.#slogan = `Hello there! You've been here ${this.#counter} times.`
    }
  }



/* 2. # Ergonomic brand checks for Private Fields
In public fields, if you try to access a non-existent field on a class, you get undefinedas a result. 
However, private class fields throw an exception instead of returning undefinedwhen you try to access 
a non-existent field on an object. Then, one way to check if a private field exists in an object is 
to see if accessing that field inside the class throws an exception or not. However, this approach 
has a big shortcoming. The exception might simply be because of another reason, such as a faulty getter 
on an existing field.
That's why, in keyword was proposed to allow us to check if a given private property/method exists in 
a class instance:
*/ 

class VeryPrivate {
    constructor() {
      super()
    }
  
    #variable
    #method() {}
    get #getter() {}
    set #setter(text) {
      this.#variable = text
    }
  
    static isPrivate(obj) {
      return (
        #variable in obj && #method in obj && #getter in obj && #setter in obj
      )
    }
  }

/*
  RegExp Match Indices
  Regular expressions allow us to search for patterns in strings. If you're not familiar with 
  regular expressions, you might want to start by reading this article first.
  Both Regexp.execand String.matchAllgives us a list of matches as a result. Regexp.execgives 
  these results one by one, so you need to call it multiple times to get all matches until it 
  returns null. On the other hand String.matchAllreturns an iterator where you can iterate 
  over all matches. These results include both the full string of characters and the parenthesized 
  substrings being matched, the input string and the 0-based index of the match. 
  Take a look at the following example:
*/
  
const str1 = 'Ingredients: cocoa powder, cocoa butter, other stuff'
const regex1 = /(cocoa) ([a-z]+)/g
const matches1 = [...str1.matchAll(regex1)]
  
// 0: "cocoa powder", 1: "cocoa", 2: "powder"
// index: 13
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
console.log(matches1[0])
  
  
// 0: "cocoa butter", 1: "cocoa", 2: "butter"
// index: 27
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
console.log(matches1[1])

/*
  While these results are pretty informative about the location of the entire match in the 
  original input, they lack information regarding the indices of the substring matches. 
  By using the new /dflag, we can ask for the start and end positions of each matched capture group.
*/
  
const str2 = 'Ingredients: cocoa powder, cocoa butter, other stuff'
const regex2 = /(cocoa) ([a-z]+)/gd
const matches2 = [...str2.matchAll(regex2)]
  
// 0: "cocoa powder", 1: "cocoa", 2: "powder"
// index: 13
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
// indices: [[13,25],[13,18],[19,25]]
console.log(matches2[0])
  
  
// 0: "cocoa butter", 1: "cocoa", 2: "butter"
// index: 27
// input: "Ingredients: cocoa powder, cocoa butter, other stuff"
// indices: [[27,39],[27,32],[33,39]]
console.log(matches2[1])

// 4. Top-level await
// Before the top-level await, JavaScript would have given you a SyntaxError 
// with this line of code, but that is no more
await Promise.resolve(console.log("🎉"))


