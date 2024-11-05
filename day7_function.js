// function

function name() {
    console.log('M');
    console.log('u');
    console.log('s');
    console.log('h');
    console.log('f');
    console.log('i');
    
}

// name()


// return check

function forCheck() {
    console.log('before return');
    return
    console.log('after return');
    
    
}

// forCheck()

// parameterized function

function add(num1, num2){
    return num1 + num2
}

// console.log(add(4,5));


// handling undefined

// function isLogIn(userName){
//     if(userName === undefined){
//         return(`Please enter user name!`);
//     }

//     return (`The user name is ${userName}!`);
    
// }

// console.log(isLogIn("Musharraf"));

// console.log(isLogIn());

// console.log(isLogIn(""));



// also handle the empty data like -> ""

// function isLogIn(userName){
//     if(!userName) return `Please enter user name!`

//     return `The user name is ${userName}`
// }

// console.log(isLogIn(""));
// console.log(isLogIn());
// console.log(isLogIn("Musharraf"));



// function with Object

const Obj1 = {
    name : "Musharraf",
    roll : 2232332,
    email : "musharraf.dev@gmail.com"
}

function forObj(){
    console.log(`Your name is ${Obj1.name}, and email is ${Obj1.email}.`);
}

// forObj(Obj1)

