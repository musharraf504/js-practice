// Strings day3 1/11/24

let heros = ["Shaktiman","Superman","Ironman","Spiderman"]

let name = "Musharraf"
let name2 = "khan"

// concatenation in new way using `` and ${}

// console.log(`${name} ${name2} is Good`);

// console.log(`This is my name ${name}. and you have to pronounce it properly!`);


// console.log(name.length);
// console.log(name.toUpperCase());




const heroName = new String("Musharraf-sdgfwr-s-sfd-bgdr-g-df")
const heroSurName = new String("Khan")

// console.log(heroName.toUpperCase());
// console.log(heroName.indexOf('f'));

//New way concatenation

// console.log(`${heroName} ${heroSurName} is Smart`);

// console.log(heroName.fontsize(10));
// console.log(heroName.repeatAll(10));

// spliting

const heroName2 = new String("Musharraf-sdgfwr-s-sfd-bgdr-g-df")


const words = heroName2.split('-')

// console.log(words[5]);


// checking starts with or not

// console.log(heroName2.startsWith('a', 7));

//checking weather availabole or not

// console.log(heroName2.includes("Musharraf"))


//Triming
const forTrim = "     Musharraf.   "

// console.log(forTrim.trim()) // output -> Musharraf

//slicing
const forSlice = "Hello World!"

// console.log(forSlice.slice(0, 9));

//replacing 

const forReplace = "https://github.com/musharraf504/drum%20musharraf%20fine"

// console.log(forReplace.replaceAll("%20", "-"));

//subString

const forSubString = "Hello World! This Musharraf"

console.log(forSubString.substring(2, 4));


