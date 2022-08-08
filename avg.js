var math = 89;
var eng = 90;
var bio = 96;
var bang = 76;

var average = (math + eng + bio + bang)/4;
console.log(average.toFixed(1)); //toFixed

function avg(a, b, c){
    var average = (a +b +c)/3;
    return average;
}
var average = avg(3,4,5);
console.log(average);

var array = [23, 34, 54];
var length = array.length;
var total = 0;
for(var i = 0; i < length; i++){
    var total = total+array[i];
}
console.log(total / length);

//nested function
function foo(){
    console.log('foo');
    bar();
}
function bar(){
    console.log('bar');
}

bar();
foo();

//odd checking
//has return , has parameter
function odd_even(a){
    if((a % 2) == 1){
        return 'odd';
    }
    else{
        return 'even';
    }
}
var test = odd_even(5);
console.log(test);

//has no return , has parameter

function odd_even1(a){
    if((a % 2) == 1){
        console.log('odd') ;
    }
    else{
        console.log('even') ;
    }
}
odd_even1(6);

