// array part 2

const mv_heros = ["superman", "batman", "ironman"]
const ind_heros = ["shaktiman", "baalveer", "bheem"]


//pushing

// mv_heros.push(ind_heros)
// console.log(mv_heros);


//flating

// console.log(mv_heros.flat(Infinity))
// console.log(mv_heros);


//concatination

// console.log(mv_heros.concat(ind_heros));


//checking if the given data is array or not
// console.log(Array.isArray("Musharraf"));

//converting to array
// console.log(Array.from("Musharraf"));


//Object to array

const nameObj = {
    1 : "Musharraf",
    2 : "Amir",
    3 : "Inzamam",
    4 : "Jamale",
    5 : "Harsh",
    6 : "Rahman"
}
// console.log(Object.keys(nameObj));


//multiple variables into a single array

let score1 = 8646
let score2 = 548
let score3 = 4854
let score4 = 684

// console.log(Array.of(score1, score2, score3, score4));


//spreading an array

const friends = ["Amir","Inzu"]
const friends2 = ["Harsh","Jamale","Ramish","Rahil"]

//==================== important ====================
console.log([...friends, ...friends2, ...mv_heros]);  //This most used method in productions
//===================================================


