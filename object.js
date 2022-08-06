var mobile = {
    color: 'black',
    RAM: '4gb',
    ROM: '64gb',
    price: 18000
}
//Get properties of an object

console.log(mobile.price);
console.log(mobile["RAM"]);

var property = 'ROM';
console.log(mobile[property]);

var propertyName = Object.keys(mobile);
var propertyValue = Object.values(mobile);

console.log(propertyName);
console.log(propertyValue);

//Set properties of an object

mobile['price'] = 30000; //set value with keys
console.log(mobile);

mobile[property] = '128gb'; //set value with variable
console.log(mobile);

mobile.RAM = '8gb';
console.log(mobile);


