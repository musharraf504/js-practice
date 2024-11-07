// truthy and falsy values

// const userEmail = "musharraf.dev@gmai.com"
const userEmail = ""

if(userEmail){
    console.log(`User email found -> ${userEmail}!`);
    
}else {
    console.log(`User email not found!`);
    
}


// all falsy values are given below :

// false, 0, -0, bigInt -> 0n, NaN, undefined, "", null //// other than these all are truthy values

// truthy values

// true, "0", "false", " ", {}, [], function(){}  




///////////////////////////////////


//if an empty object or array comes it set as true, so how can we check if it is empty or not in (if)


const emails = []
if (emails.length === 0) {
    // console.log(`Email not found`);

}

const empObj = {}
if (Object.keys(empObj).length === 0) {
    console.log(`Object is Empty`);
    
}

// nullish coalescing operator -> ??
//it basically handles the error means if the value is null or undefined it automatically set next first value

let forNullish;

// forNullish = null ?? 10
// forNullish = undefined ?? 11
// forNullish = 12 ?? 15
forNullish = null ?? 13 ?? 16

console.log(forNullish);


