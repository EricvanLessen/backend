function printNameNoInterface(stark) {
    console.log(stark.name);
}
printNameNoInterface({ name: "Eddard" });
// we pass a Stark, it has a name per definition
// all interface properties must be covered
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
