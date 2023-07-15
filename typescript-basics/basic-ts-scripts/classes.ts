class Stark {
    name : string;
    static castle: string = "Winterfell";
    saying : string;

    constructor(){
        this.saying = "Winterfell";
    }

    hello(person:string){
        console.log("Hello, " + person);
    }
}

var ned = new Stark();

ned.saying = "Winter is coming"

console.log(Stark.castle);

ned.hello("Robert");

/*
If you don't define a constructor in a class in TypeScript, the language will automatically 
generate a default constructor for you. This default constructor takes no parameters and 
doesn't contain any code inside its body. It serves as a placeholder and allows you to create 
instances of the class without providing any arguments.

This example illustrates this behavior:

```typescript
class MyClass {
  // No constructor defined
  // TypeScript will generate a default constructor

  // Other class members...
}

const instance = new MyClass(); // Creating an instance using the default constructor
```

In this example, `MyClass` doesn't have a constructor defined explicitly. 
TypeScript will automatically add a default constructor behind the scenes. 
You can still create an instance of `MyClass` by calling `new MyClass()`, 
and the default constructor will be invoked.
Keep in mind that if you need to perform initialization logic or require specific arguments 
for your class, you should define a constructor explicitly to override the default one.
*/