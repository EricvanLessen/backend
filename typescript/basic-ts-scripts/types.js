var n = 1;
n = 123;
// any: defeats the purpose of types
var m = 1;
m = 'Robb';
var isBoolean = false;
var count = 5;
var firstname = "Bran";
// arrays
var firstnames = ["Jon", "Rickson", "Arya"];
var firstnames_number = ["Jon", 25, "Rickson", 53, "Arya", 14];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
var cat = Starks.Catlyn;
function getAge() {
    return 14;
}
function getName() {
    return "Jon";
}
function winterIsComing() {
    console.log("Winter is coming");
}
