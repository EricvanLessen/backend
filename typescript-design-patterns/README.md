# TypeScript Design Patterns

This repository contains TypeScript code examples that illustrate the implementation of various design patterns. Each pattern has its own script file showcasing its usage and demonstrating how it solves specific design problems.

## Patterns Included

### Adapter Pattern

The Adapter pattern allows objects with incompatible interfaces to work together by creating a middle layer (adapter) that converts the interface of one object into another interface that the client expects.

**Script:** `adapter.ts`

This script demonstrates the Adapter pattern by showing an example of converting a lightning port interface to a micro USB interface using an adapter.

### Decorator Pattern

The Decorator pattern allows behavior to be added or removed dynamically from an object at runtime by wrapping it with decorator objects. It provides a flexible alternative to subclassing for extending functionality.

**Script:** `decorator.ts`

This script showcases the Decorator pattern by demonstrating how decorators can add additional features and modify the behavior of objects dynamically. It uses a car example with various optional features.

### Facade Pattern

The Facade pattern provides a simplified interface to a complex subsystem or set of interfaces. It hides the complexities of the subsystem and provides a unified interface for the client to interact with.

**Script:** `facade.ts`

This script exemplifies the Facade pattern by creating a Home Theater Facade that simplifies the interaction with multiple home theater components, such as a Blu-ray player, amplifier, lights, TV, and popcorn maker.

### Observer Pattern

The Observer pattern establishes a one-to-many relationship between objects, where changes in one object are automatically reflected in other dependent objects. It enables loose coupling and allows objects to be notified and updated in a consistent manner.

**Script:** `observer.ts`

This script demonstrates the Observer pattern by showing how a Weather Station object can notify multiple Observer objects (Temperature Display and Fan) about temperature changes.

### State Pattern

The State pattern allows an object to alter its behavior when its internal state changes. It encapsulates state-specific behavior into separate state classes and allows the object to dynamically switch between different states.

**Script:** `state.ts`

This script illustrates the State pattern by modeling the behavior of an order in different states (payment pending, order being prepared, order shipped, and cancelled). It demonstrates how the order transitions between states and performs actions accordingly.

Certainly! Here's the updated section with the additional information on running the scripts:

---

## Getting Started

To run the scripts, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/EricvanLessen/typescript-design-patterns.git
   ```

2. Navigate to the repository's directory:

   ```bash
   cd typescript-design-patterns
   ```

3. Make sure you have Node.js and TypeScript installed.

4. Open a terminal and navigate to the repository's directory.

5. Run the TypeScript compiler to compile the scripts. For example: `tsc adapter.ts`

6. Run the compiled JavaScript files using Node.js. For example: `node adapter.js`

Feel free to explore and modify the scripts to understand how each pattern works.

## Contributing

If you'd like to contribute to this repository, feel free to open a pull request. Contributions, improvements, and suggestions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

