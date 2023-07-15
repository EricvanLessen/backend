let array1: number[] = [1,45654,5463546];

let array2: Array<string> = ["sadf", "dsaf"];



class objectGenericsCLass<TYPE1, TYPE2 extends string>{


    constructor(public value1: TYPE1, public value2: TYPE2){


    }

}

let object1 = new objectGenericsCLass("asdfdsa", "sadfas");
let object2 = new objectGenericsCLass<boolean, string>(true, "asfdsa");