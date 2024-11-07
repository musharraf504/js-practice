//  THIS and arrow

function name (){
    console.log("Musharraf");
}
// name()

const forThis = {
    userName : "Musharraf",
    rollNum : 2232332,

    welcomeMassage : function () {
        console.log(`${this.userName}, Welcome to our webside`);
        
    }

}


// forThis.welcomeMassage()

function thisContext(){
    console.log(this);
    
}

// thisContext()

// console.log(this);

// arrow function 

const arrowFunc = () => {
    return "test";
    
}

// console.log(arrowFunc())

// add using arrow

const forArrow = (num1, num2) => {
    return num1 + num2
}

// console.log(forArrow(4, 5));


//THIS test is arrow function


const thisInArrow = () => {
    return this
}

// console.log(thisInArrow())


// single line
const single = () => (4 + 5)
// console.log(single());


//single for object
const singleForObject = () => ({name : "Musharraf", roll : 2232332})

// console.log(singleForObject());




