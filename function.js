function sum(a, b, c){
    var sum = a+b+c;
    console.log(sum);
}

sum(5,6,4);

function task(A1, A2, A3){
    var average = (A1 + A2 + A3) / 3;
    return average;
}

var avg = task(60, 56, 55);
console.log(avg);

function add(x, y, z){
    var sum = x + y + z;
    return sum;
}

var result1 = add(34, 23, 12);
var result2 = add(65, 21, 22);

console.log(result1 + result2);

//inch to feet conversion
function toFeet(inches){
    var feet = inches / 12;
    return feet;
}

var input = 84;
var inFeet = toFeet(input);
console.log(inFeet+' feet');

//mile to km conversion
function toKm(miles){
    var kilo = miles*1.60934;
    return kilo;
}
var inKilo = toKm(2);
console.log(inKilo+'Kilo');

//odd or even
function even(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
var num = even(55);
console.log(num);

//sum of all array element
var numbers = [23, 11, 9, 24, 4];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var sum = sum + numbers[i];
    
}
console.log(sum);

//sum of odd numbers
function odd_sum(number){
    var total = 0;
    for(let i = 0; i < number.length; i++){
        if((number[i] % 2) == 1){
            var total = total + number[i];
            console.log(number[i]);
        }
        else{ 
        }
    }
    console.log(total);
}
var arr = [2, 5, 9 ,4, 1];
odd_sum(arr);

//factorial using for decrementing loop
function factorial(number){
    var mult = 1;
    for(var i = number; i >= 1; i-- ){
        var mult = mult * i;
    }
    return mult;
}
var factorialOperation = factorial(7);
console.log(factorialOperation);

//factorial using while decrementing loop
function factorialProduct(num){
    var mult = 1;
    var i = num;
    while(i >= 1){
        var mult = mult * num;
        i--;
    }
    return mult;
} 
var factorialWhileOperation = factorial(7);
console.log(factorialWhileOperation);


//celsius to fahrenheit conversion
function toFahrenheit(celsius){
    var result = ((celsius * (9 / 5)) + 32);
    return result;
}
var celsius = toFahrenheit(5);
console.log(celsius , 'F');

//fahrenheit to celsius
function toCelsius(fahrenheit){
    var result = ((fahrenheit - 32) *(5 / 9));
    return result;
}

var fahrenheit = toCelsius(34);

console.log(fahrenheit.toFixed(2), 'C');

