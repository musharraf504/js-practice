// array


//push, pop
const arr = [2,5,8,6,4,2,0,1]
arr.pop()
// console.log(arr);
arr.push(9,5,6,3)
// console.log(arr);


//slice and splice

// console.log(arr.slice(1,5));
// console.log("a", arr);

// console.log(arr.splice(1,5));
// console.log("b", arr);


//map and filter

const arr2 = [9,7,5,3,1,6,4]
const mapedArray = arr2.map((x) => x * 2)
const filteredArray = arr2.filter((x) => x>5)

// console.log(mapedArray);
// console.log(filteredArray);


//includes  T/F

// console.log(arr2.includes(5));   //  -> true
// console.log(arr2.includes(88));  // -> false


// reverse 

// console.log(arr2.reverse());

//flat

const arr3  = [8,6,2,16,[8,12,3,25,[4,7,3[5,9,3]]]]

// console.log(arr3.flat());
// console.log(arr3.flat(2));
// console.log(arr3.flat(Infinity));


// sort

const forSort = [9,7,5,3,1,6,4]
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// console.log(months);

// console.log(forSort.sort());


//shift and unshift

const forShiftAndUnShift = [9,7,5,3,1,6,4]

forShiftAndUnShift.shift()
// console.log(forShiftAndUnShift);

forShiftAndUnShift.unshift(1)
// console.log(forShiftAndUnShift);


//join 

const forJoin = [9,7,5,3,1,6,4]
const joins = forJoin.join()
// console.log(joins);
// console.log(typeof joins);


//toString

const arr4 = [9,7,5,3,1,6,4]
// console.log(arr4.toString());


//length

const forLength = [9,7,5,3,1,6,4]
// console.log(forLength.length);


// forEach

const arr5 = [9,7,5,3,1,6,4]
arr5.forEach((e) => {
    // console.log(e);
});


//indexOf

const forIndexOf = [9,7,5,3,1,6,4]
// console.log(forIndexOf.indexOf(5));



