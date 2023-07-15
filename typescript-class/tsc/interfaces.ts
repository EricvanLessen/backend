interface AutomobileInterface{

    brand?: string;
    speed?: number;
    speedMethod?(velocidad: number): void


}

interface AutomobileInterface2 extends AutomobileInterface{

    brand: string;
    speed: number;


}

const automobile2: AutomobileInterface2 = {

    brand: "Porsche",


};











const automobile: AutomobileInterface = {

    brand: "BMW",
    speed: 20,

    speedMethod(){

        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);

    }


};


function car1(automobile: AutomobileInterface){

    automobile.speed = 500;


    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles an hour`);


}

// car1(automobile);


class AutoMobileClass implements AutomobileInterface{

    brand:string;
    speed: number;


    speedMethod(speed){

        console.log(`Hi my cars is going at ${speed}`);

    }

}

let carObject = new AutoMobileClass();

carObject.speedMethod(1000);




