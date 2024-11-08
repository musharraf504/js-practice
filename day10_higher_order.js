// day 10 for higher order function

// for of loop

const countries = ["india", "japan", "pakistan"]

for(const name of countries){
    // console.log(`The countrry name is ${name}`);
    
}


const map = new Map();

map.set("In", "India")
map.set("Fr", "France")
map.set("jp", "Japan")
map.set("pk", "pakistan")
map.set("Br", "Brazil")

// for(const key of map){
//     console.log(key);
    
// }
for(const [key, value] of map){
    // console.log(`${key} -> ${value}`);
    
}

const obj1 = {
    In : "India",
    Uk : "United Kingdom",
    Fr : "France"
}


for(const key in obj1){
    // console.log(`${key} -> ${obj1[key]}`);
}

const heros = ["superman", "spiderman", "shaktiman", "Ironman"]

heros.forEach(function (e) {
    // console.log(e);
})

heros.forEach(printNum)

function printNum(e){
    // console.log(e);
    
}


//access multiple obeject values from an array using forEach

const data = [
    {
        name : "musharraf",
        email : "munsharraf.dev@gmail.com"
    },
    {
        name : "amir",
        email : "Amir.dev@gmail.com"
    },
    {
        name : "Inzamam",
        email : "Inzamam.dev@gmail.com"
    },
    {
        name : "Harsh",
        email : "harsh.dev@gmail.com"
    },
    {
        name : "jamale",
        email : "jamale.dev@gmail.com"
    }
]


// data.forEach( (value)=> {console.log(`${value.name} -> ${value.email}`)})


