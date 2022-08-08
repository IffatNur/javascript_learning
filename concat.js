//check if it is an array
var arr = [23, 44, 21, 12];
console.log(Array.isArray(arr));

//concat two arrays
var arr2 = [22, 31, 22, 43, 33, 43];
console.log(arr2.concat(arr));

//remove duplicacy

function removeDuplicate(names){
    let arr = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if(arr.includes(name) === false){
            arr.push(name);
        }
    }
    return arr;
}
var uniqueNames = ['harry', 'griffindor', 'harmione', 'harry', 'slytherene', 'john', 'harmione', 'voldemort', 'griffindor'];

let unique = removeDuplicate(uniqueNames);
console.log(unique);

//finding numbers
for(let i = 1; i <=50; i++){
    if(((i % 3) === 0) && ((i % 5)!==0)){
        console.log('foo');
    }
    else if(((i % 3) !== 0 )&& ((i % 5)===0)){
        console.log('bar');
    }
    else if(((i % 3) === 0) && ((i % 5)===0)){
        console.log('foobar');
    }
    else{
        console.log(i);
    }
}