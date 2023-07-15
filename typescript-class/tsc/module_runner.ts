/**
 * Imports the `name` and `displayData` from the "module_external" module.
 * The `name` is assigned to the variable `MyName`.
 */
//import Object = require("./module_external");

import { name as MyName, displayData } from "./module_external";

/**
 * Calls the `displayData` function and logs the returned value to the console.
 */
console.log(displayData("Hey this is cool dudes"));

/**
 * Logs the value of `MyName` variable to the console.
 */
console.log(MyName);
