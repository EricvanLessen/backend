function stringFunction():string{

    console.log("HELLO I'm a string");


}


function cal(val1:number, val2:number): number{

    let total: number = val1 + val2;
3
    return total;
};

cal(2,2);


let universal: (value1: number, value2: number)=> number;

universal =  cal;
console.log(universal(3,2));




