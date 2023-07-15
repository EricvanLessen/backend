// // synchronous
//
// fetch("http://google.com");
//
// hello("HELLO");
//
// console.log('Eric van Lessen');
//
//
// // asynchronous
//
//
// db.query("SELECT users", function(result){
//
//
//     console.log(result);
//
// });
//
// console.log("something else");
//


let myPromise = new Promise(function(resolve, reject){

    let isComplete = true;


    if(isComplete){


        resolve("This is complete");

    } else {

        reject("This is NOT complete");

    }


});

myPromise.then((result)=>{


    console.log(result);

}, (error)=>{

    console.log(error);


});


console.log('Eric van Lessen');









