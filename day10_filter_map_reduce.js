//filter, maps and reduce for loop


//filters

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 800 },
    { id: 3, name: "T-shirt", category: "Clothing", price: 25 },
    { id: 4, name: "Jeans", category: "Clothing", price: 50 },
    { id: 5, name: "Book", category: "Books", price: 15 },
    { id: 6, name: "Headphones", category: "Electronics", price: 100 }
  ];


// const items = products.filter( (pd) => pd.category === 'Clothing')

// const items = products.filter( (pd) => {
//     return pd.price >= 100
// })
const items = products.filter( (pd) => {
    return pd.price >= 45 && pd.category === 'Clothing'
})
// console.log(items);



// Maps

// const nums = [1,2,3,4,5,6,7,8,9,10]

// const myNums = nums.map( (element) => element * 10)
// console.log(myNums);

// multiple maps

const nums = [1,2,3,4,5,6,7,8,9,10]

const myNums = nums.map( (element) => element * 10).map( (element) => element + 5).filter((element) => element > 50)
// console.log(myNums);



// reduce


const num = [1,2,3,4,5,6,7,8,9,10]

const myNums2 = num.reduce( function (acc , currval) {
    // console.log(`${acc} and ${currval}`);
    return acc + currval
}, 0)


// console.log(myNums2);

const cart = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 100 }
  ];

  const cost = cart.reduce( (acc, rate) => acc + rate.price, 0)

  console.log(cost);
  
