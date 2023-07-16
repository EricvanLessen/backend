/**
 * Namespace: myNameSpace
 * Description: This namespace contains a variable 'name' and a function 'displayData' for displaying data.
 */
namespace myNameSpace {
    /**
     * Variable: name
     * Description: A string variable that holds the name value.
     */
    export const name = "Maria";

    /**
     * Function: displayData
     * Description: A function that takes a string value and returns it.
     * @param value - The string value to be displayed.
     * @returns The provided value.
     */
    export function displayData(value: string) {
        return value;
    }
}

/* The main difference between modules and namespaces is the scope in which they operate. 
Modules provide file-level scope and allow code to be organized across multiple files,
while namespaces provide a way to organize code within a single file and avoid naming conflicts. 
Modules are recommended for new projects as they provide better modularity and encapsulation, 
and can be used in combination with module loaders or bundlers to optimize code loading and execution. */
