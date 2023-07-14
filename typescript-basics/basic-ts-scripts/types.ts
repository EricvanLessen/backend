var n : Number = 1;
n = 123;

// any: defeats the purpose of types
var m : any = 1;
m = 'Robb';

var isBoolean : boolean = false;
var count : number = 5;
var firstname : string = "Bran";

// arrays
var firstnames : string[] = ["Jon", "Rickson", "Arya"]
var firstnames_number : any[] = ["Jon", 25, "Rickson", 53, "Arya", 14]

enum Starks {Jon, Bran, Eddard, Catlyn}

var cat : Starks = Starks.Catlyn;

function getAge() : number{
    return 14;
}

function getName() : string{
    return "Jon";
}

function winterIsComing() : void{
    console.log("Winter is coming");
}