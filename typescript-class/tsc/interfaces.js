var automobile2 = {
    brand: "Porsche",
};
var automobile = {
    brand: "BMW",
    speed: 20,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
function car1(automobile) {
    automobile.speed = 500;
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles an hour");
}
// car1(automobile);
var AutoMobileClass = (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log("Hi my cars is going at " + speed);
    };
    return AutoMobileClass;
}());
var carObject = new AutoMobileClass();
carObject.speedMethod(1000);
//# sourceMappingURL=interfaces.js.map