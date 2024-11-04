//objects

//There are two methods of declaring an array :
// 1 -> constructor based
// 2 -> object literal based

//key decleration

const mySym = Symbol("key1")

const Obj1 = {
    name : "Musharraf",
    "full name" : "Mohammad Musharraf",
    age : 23,
    gender : "Male",
    email : "musharrafdev@gmail.com",
    [mySym] : "myKey1",
    lastLogInDays : ["Mon", "Wed", "Sat"]

}

// console.log(Obj1[mySym]);
// console.log(Obj1);
// console.log(Obj1.lastLogInDays[2]);
// console.log(Obj1["name"]);

//accessing using 

// console.log(Obj1["full name"]);



// freeze 

// Object.freeze(Obj1);
// Obj1.name = "hjhjbds"
// console.log(Obj1.name);


//greeting

// Obj1.greetings = function(){
//     console.log(`Welcome to Obj1!`);
// }

// Obj1.greetings()

// Obj1.greetings2 = function (){
//     console.log(`Welcome again! and your name is ${this.name}.`);  // we can't access object's function's data so we need to use (this)keyword.
    
// }

// Obj1.greetings2()


//object in object

const Obj2 = {
    name : {
        fullName : {
            firstName : "Mohammad",
            secondName : "Musharraf"
        },
    },
    gender : "Male",
    email : "musharrafdev@gmail.com",
    lastLogInDays : ["Mon", "Wed", "Sat"]
}

// console.log(Obj2.name.fullName.firstName);

const Obj3 = {
    name : "Musharraf",
    "full name" : "Mohammad Musharraf",
    gender : "Male",
    email : "musharrafdev@gmail.com",
}

const Obj4 = {
    [mySym] : "myKey1",
    age : 23,
    lastLogInDays : ["Mon", "Wed", "Sat"]
}

// concatination
// const Obj5 = {Obj3, Obj4};


// assignation -> It basically add all keys and values in object without adding the extra object

// const Obj5 = Object.assign(Obj3, Obj4)
// console.log(Obj5);


//spreadibg in Object  -> It is again most used method in object and array

const Obj5 = {...Obj3, ...Obj4}
// console.log(Obj5);



//Multiple objects in an array

const forMultiObj = [
    {
        id : 1,
        email : "m@gmail.com"
    },
    {
        id : 2,
        email : "a@gmail.com"
    },
    {
        id : 3,
        email : "b@gmail.com"
    },
    {
        id : 4,
        email : "c@gmail.com"
    },
]

// console.log(forMultiObj[2].email);



//keys and values opration

//we can store both in an array so easely we can operate and make loop

// console.log(Object.keys(Obj1));
// console.log(Object.values(Obj1));
// console.log(Object.entries(Obj1)); // it convertes one key and value in a single array in main array


//checking key if available or not

// console.log(Obj1.hasOwnProperty("name")); // true
// console.log(Obj1.hasOwnProperty("roll")); //false

