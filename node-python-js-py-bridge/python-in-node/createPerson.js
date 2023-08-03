import { python } from "pythonia";
const data = await python("./person.py");
const person1 = await data.Person("John", "Doe");
console.log(await person1.getFullName());
python.exit();