function pizzaOven(crustType, sauceType, cheeses, toppings){

    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var s1 = pizzaOven("deep dish", "traditional", "mozzerella", ["pepperoni", "sausage"])
console.log(s1);

var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(s2);

var s3 = pizzaOven("thin", "marinara", "mozzarella", "bell pepper")
console.log(s3);

var s4 = pizzaOven("pan", "pesto", ["mozzarella", "feta"], ["mushroom", "pepperoni", "anchovies"])
console.log(s4);

// function randomPizza(crustType, sauceType, cheeses, toppings){
//     crustType = ["thin", "deep dish", "hand tossed", "pan", "stuffed crush"]
//     sauceType = ["marinara", "pesto", "alfredo", "mustard", "ranch"]
//     cheeses = ["mozzarella", "feta", "gouda", "american slices", "parmesean"]
//     toppings = ["pepperoni", "anchovies", "mushroom", "onion", "bell peppers"]

    
//     let crust= crustType[Math.floor(Math.random()*crustType.length)];
//     console.log(crust);
// }
