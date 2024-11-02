//number


//absolute value
const score = new Number(400)

// console.log(Math.abs(score));

// Number to string
const numToString = (score.toString())

// console.log(numToString);


//precising the number
const balance = 125.897
// console.log(balance.toPrecision(4));


//Local string

const stock = 150000000000
// console.log(stock.toLocaleString('en-IN')); //In Indian Term
// console.log(stock.toLocaleString()); //In International Term




// ========================================= Maths =============================================

//tan
const forMath = 180
// console.log(Math.tan(forMath));


//random number

const randomNum = Math.floor(Math.random() * 100)
// console.log(randomNum);

// random number b/w 10 and 20

function randomNumByRange(min, max){
    // const min = 10
    // const max = 20
    const randomNumByRange = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumByRange
}
// console.log(randomNumByRange(10, 20));

const min = 10
const max = 20
const randomNumByRange2 = Math.floor(Math.random() * (max - min + 1) + min)
// console.log(randomNumByRange2);



//ceil , basically it does the number closest to it, means it create the number nearest greater than given number or equal to given number
// in simple word ceil gives ceiling value like floor() floor value and round make the number in round figure
// ceil, floor, round


const forCeil = 8.111
const forFloor = 8.111
const forRound = 8.111

// console.log(Math.ceil(forCeil));
// console.log(Math.floor(forCeil));
// console.log(Math.round(forCeil));


// cubic root & square root - cbrt & sbrt

const forCubicRoot = 64
const forSquareRoot = 81
// console.log(Math.cbrt(forCubicRoot));
// console.log(Math.sqrt(forSquareRoot));


// log

const forLog = 100
// console.log(Math.log(forLog));

