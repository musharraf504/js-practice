// Immediately invoked function espression -> IIFE

// regular function with iife

(function iifeFunc () {
    console.log("This for IIFE");
    
})();


// (function forIife (){
//     console.log("2nd test");
    
// })();


//arrow with IIFE

(() => {
    console.log("array IIFE");
    
})();

// with parameter and arg

(function withPara(num1, num2){
    console.log(num1 + num2);
    
})(4, 5);

//array with para and arg
((num1, num2) => {
    console.log(num1 + num2);
    
})(4,1);


