# TypeScript Tutorial

This is a step-by-step tutorial that covers the introduction and in-depth explanation of TypeScript, a popular JavaScript superset developed by Microsoft. TypeScript enhances the capabilities of JavaScript, adding static types, classes, interfaces, and many other features. It is an excellent tool for larger projects, where it helps to prevent bugs and ease maintenance.

## Table of Contents

1. [Introduction](#introduction)
2. [Course Breakdown](#course-breakdown)
3. [Getting Started](#getting-started)
4. [Basic TypeScript](#basic-typescript)
5. [TypeScript Implementation](#typescript-implementation)
6. [Homework](#homework)
7. [Conclusion](#conclusion)
8. [Running the App](#running-the-app)

## Introduction

- Why learn TypeScript
- Origin and use cases of TypeScript
- Advantages of TypeScript over plain JavaScript
- Importance of TypeScript in larger projects
- Tools that work with TypeScript, like Grunt, Gulp, and Webpack

## Course Breakdown

The course is divided into several parts, each focusing on different aspects of TypeScript:

- Installation and compilation of TypeScript
- Basic Features:
    - Types and Interfaces
    - Class Inheritance
    - Modules

## Getting Started

- Explanation about how TypeScript compiles into JavaScript
- Installation of TypeScript globally via NPM
- TypeScript compilation process
- Introduction to Type Annotations

## Basic TypeScript

- Basic types: boolean, number, string, any, enum, and void
- Interfaces: used as blueprints for objects
- Classes: creating, constructing, and using instances
- Inheritance: extending classes, overriding functions, and calling super
- Modules: sharing code between files, keeping file sizes small

## TypeScript Implementation

- Automating TypeScript compilation with Grunt: gruntfile.js
- Explanation about what Grunt is and who uses it (Microsoft, Twitter, Adobe, jQuery, ...)
- Installation and setup of Grunt and Grunt plugins for TypeScript: npm install grunt grunt-ts

## Homework

- Going through the TypeScript handbook
- Exploring Grunt documentation

## Conclusion

- Recap of the topics covered: installation, compilation, basic features, and implementation with Grunt
- Other resources for further learning

## Running the App

In the repository, you'll find basic TypeScript scripts in the folder `basic-ts-scripts` and a `gruntfile.ts` to define grunt steps.

The grunt file looks like this:

```javascript
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            main: {
                src: ['typescript/*.ts'], // src argument, an array of TS files that are turned into JS files
                outFile: 'javascript/main.js' // combined output
            }
        }
    })

    grunt.registerTask('default', ['ts']);
}
```

You can run the app by executing `npm install` and then typing `grunt`. If you encounter a 'grunt not found' error, make sure to install grunt globally and add it to your PATH.

For individual TypeScript scripts located in the `typescript` sub-folder, you can compile them by changing into the directory and installing TypeScript with `npm install typescript`, and then compiling each script individually to observe the resulting JavaScript output. 

## Introduction

- **Why learn TypeScript**: TypeScript enhances JavaScript applications by adding types, making development more robust and error-prone.
- **Origin and use cases of TypeScript**: Created by Microsoft, TypeScript expands the capabilities of JavaScript, making it a popular choice for large-scale applications and projects.
- **Advantages of TypeScript over plain JavaScript**: TypeScript brings static typing, classes, interfaces, and more, resulting in cleaner, more organized code and an overall better development experience.
- **Importance of TypeScript in larger projects**: TypeScript's static typing helps catch bugs early, making it crucial for large projects where scalability and maintainability are paramount.
- **Tools that work with TypeScript, like Grunt, Gulp, and Webpack**: These tools help automate and streamline development tasks when working with TypeScript, from compiling code to module bundling.

## Course Breakdown

- **Installation and compilation of TypeScript**: Installing TypeScript involves using npm, Node.js package manager, while compilation to JavaScript is done via the TypeScript Compiler (`tsc`).
- **Types and Interfaces**: TypeScript introduces a variety of types and interfaces to statically type variables and function parameters, significantly improving the clarity and reliability of the code.
- **Class Inheritance**: TypeScript supports object-oriented programming concepts like classes and inheritance, allowing for code reuse and encapsulation.
- **Modules**: TypeScript's module system helps structure the codebase, enabling developers to isolate components and manage dependencies more efficiently.

## Getting Started

- **Explanation about how TypeScript compiles into JavaScript**: TypeScript isn't natively understood by browsers and needs to be compiled into JavaScript, a process carried out by the TypeScript Compiler (`tsc`).
- **Installation of TypeScript globally via NPM**: TypeScript can be installed globally on your system using the Node Package Manager (`npm install -g typescript`).
- **TypeScript compilation process**: Compilation is done using the TypeScript Compiler (`tsc`), converting `.ts` files into JavaScript `.js` files.
- **Introduction to Type Annotations**: Type Annotations in TypeScript are a way to declare the type of a variable, helping to avoid type-related errors (`let varName: type;`).

## Basic TypeScript

- **Basic types**: TypeScript includes basic types like boolean, number, string, any, enum, and void, each serving a specific purpose in typing variables and function parameters.
- **Interfaces**: Interfaces in TypeScript provide a way to define custom types, specifying the structure that objects should adhere to.
- **Classes**: Classes in TypeScript allow for encapsulation and inheritance, enabling object-oriented programming practices.
- **Inheritance**: TypeScript supports class inheritance, allowing classes to extend others, reusing and overriding properties and methods when needed.
- **Modules**: Modules in TypeScript help split code into separate files, making the codebase more organized and manageable.

## TypeScript Implementation

- **Automating TypeScript compilation with Grunt**: Grunt, a task runner for JavaScript, can be set up to automatically compile TypeScript files into JavaScript, easing the development process.
- **Explanation about what Grunt is and who uses it**: Grunt is a popular JavaScript task runner used for automating repetitive tasks; it's used by organizations like Twitter, Adobe, and jQuery.
- **Installation and setup of Grunt and Grunt plugins for TypeScript**: Grunt and its plugins for TypeScript can be installed via npm. You can then set up a `gruntfile.js` to define tasks for automatically compiling TypeScript files.

## Homework

- **Going through the TypeScript handbook**: The TypeScript Handbook is a comprehensive guide and reference to TypeScript's features and usage, ideal for deepening your understanding.
- **Exploring Grunt documentation**: Grunt's official documentation provides valuable insights into its capabilities, how to set it up, and how to define and run tasks.

## Conclusion

- **Recap of the topics covered**: We've covered the installation and usage of TypeScript, basic TypeScript features such as types, interfaces, classes, inheritance, and modules, and how to implement TypeScript with Grunt.
- **Other resources for further learning**: The TypeScript Handbook and TypeScript's GitHub repository are excellent resources for continued learning and staying up-to-date with TypeScript.

## Running the App

- **Setup and Execution**: After installing all necessary npm packages, you can run the application by using the command `grunt`. Ensure Grunt is installed globally and added to your PATH to avoid any execution errors.
- **Individual TypeScript scripts**: For each TypeScript script located in the `typescript` sub-folder, you can compile them individually by changing into the directory, installing TypeScript with `npm install typescript`, and then using the `tsc` command to compile each script. Observe the JavaScript output to understand how TypeScript compiles to JavaScript.

## Working with the Gruntfile

- **Understanding the Gruntfile**: The `gruntfile.ts` in the repository is a script that defines tasks for Grunt. It's configured to load the 'grunt-ts' plugin and compile TypeScript files located in the 'typescript' directory into a single JavaScript file in the 'javascript' directory.
- **Running Grunt tasks**: After installing the necessary npm packages, you can execute the tasks defined in the `gruntfile.ts` using the `grunt` command.
- **Dealing with Grunt not found errors**: If you encounter a 'grunt not found' error, ensure that Grunt is installed globally on your system and is added to your PATH. This can be done by adding it to the bash_profile or equivalent, depending on your system.

## Additional Scripts

- **Understanding the basic TypeScript scripts**: The 'basic-ts-scripts' directory contains a collection of TypeScript scripts demonstrating basic TypeScript features and concepts. You can compile and examine these scripts individually to better understand TypeScript.

## Conclusion and Homework

- **Recap of the topics covered**: The repository provides hands-on learning on TypeScript basics, including types, interfaces, classes, inheritance, modules, as well as using Grunt for TypeScript compilation.
- **Homework**: To solidify your understanding, it's recommended to further explore the TypeScript Handbook and Grunt documentation. 
- **Next Steps**: After familiarizing yourself with the provided scripts and the topics covered, consider starting your own TypeScript project or contributing to open-source TypeScript projects to gain practical experience.

Your journey in TypeScript does not end here. There are many advanced concepts and features to explore. Stay curious and continue learning!

Enjoy your TypeScript journey!
