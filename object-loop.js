var shopping = {
    pen: 20,
    book: 3,
    diary:3,
    offset: 1,
    eraser:5
}

var propertyName = Object.keys(shopping);
var propertyValue = Object.values(shopping);
console.log(propertyName);
console.log(propertyValue);

for(var i = 0; i < propertyName.length; i++){
    var property = propertyName[i];
    var value = propertyValue[i];
    console.log(property, value);
}

for(var bla in shopping){
    var value = shopping[bla];
    console.log(bla, value);
}