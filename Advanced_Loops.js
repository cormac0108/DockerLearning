
// Advanced Loops in JavaScript  fro , while, do   ,for Each
// there is also two other ways we can use. 


//what we are doing here is called itrating over this array.
// iterating means we are able to go one by one and look at these items. Iterables -
// JS provides us.    Iterating  -  arrays, strings. Both of these are iterable in JS

const basket = ["grapes" , "melons" , "apples"];

// 1  - for loop
for (let i =0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2  - forEach
basket.forEach(item => {
    console.log(item);
})

// for of 
//iterating - strings, arrays. 
for (item of basket) {
    console.log(item);
}

const detailedBasket = {
    apples: 5,
    oranges: 100,
    pears: 200,
    grapes: 999,
}


// for in   - the for in loop works with objects.  - object properties. here we are not iterating
// here we are doing something called enumerating.  enumerating is for objects. 

for (item in detailedBasket) {
    console.log(item);
}

for (item of detailedBasket) {
    console.log(item);
}
// this will throw an error because detailedBasket is not iterable (because it is an object)

//lets try the other way with for item in basket - this works because arrays are basically 
// objects. with properties of index no: and values of the item in the array.

const basket2 = {
    0: "apples",
    1: "oranges",
}

for (item in basket) {
    console.log(item);
}

// for of will log the properties of the object for us. enumerating - objects. 
// iterating - strings, arrays 

Object.keys()
Object.entries()
Object.values()