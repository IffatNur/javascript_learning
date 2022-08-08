function max(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1, 'is the largest');
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2, 'is the largest');
    }
    else{
        console.log(num3, 'is the largest');
    }
}
max(89, 99, 56);

function min(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        console.log(num1, 'is the smallest');
    }
    else if(num2 < num1 && num2 < num3){
        console.log(num2, 'is the smallest');
    }
    else{
        console.log(num3, 'is the smallest');
    }
}
min(89, 99, 56);

//using math functionality

function maxScore(num1, num2, num3){
    console.log(Math.max(num1, num2, num3), 'is the largest');
}

maxScore(86, 59, 95);

function minScore(num1, num2, num3){
    console.log(Math.min(num1, num2, num3), 'is the smallest');
}

minScore(86, 59, 95);

// find max value in an array 

function maxHeight(numbers){
    let largest = numbers[0];
    for( let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
        console.log(numbers[i]);
    }
    return largest;
}

var height = [160, 190, 200, 230,111];
var mHeight = maxHeight(height);
console.log(mHeight,'is the max height');

//find min height in the array

function minHeight(numbers){
    let smallest = numbers[0];
    for( let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
        console.log(numbers[i]);
    }
    return smallest;
}
var minheight = minHeight(height);
console.log(minheight,"is the smallest height");

//reverse string
function reverseString(sentence){
    let reverse = '';
    for(let i = sentence.length-1; i >= 0; i--){
        let element = sentence[i];
        reverse = reverse + element;
        console.log(reverse);
    }
}
var sentence = 'i am a student';
reverseString(sentence);