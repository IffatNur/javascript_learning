var fruits = ['apple', 'banana', 'mango'];
var fruit = fruits.splice(1,1,'watermelon');
fruits.push('kiwi');
fruits.pop('kiwi');

console.log(fruits)

//multiplication of 13
for(var i = 1; i <= 10; i++){
    var product = 13* i;
    console.log('13 * '+ i +' = '+ product);
}

// to lowercase
function word(a){
    var result = a.toLowerCase();
    console.log(result);
}
word('IFFAT');

//return full name
function fullName(first, last){
    var result = first + last;
    return result;
}
var full = fullName('Iffat', ' Nur');
console.log(full);

//square
function square(a){
    return a*a;
}
var sqr = square(9);
console.log(sqr);

//object pizza
const pizza = {
    toppings: ['cheese', 'bellpaper', 'pepperoni'],
    serves: 2,
    price: 500
}
console.log(pizza.toppings[2]);
