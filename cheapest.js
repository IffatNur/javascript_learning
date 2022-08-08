var phones = [
    {brand: 'xaomi', price: 30000, color:'black'},
    {brand: 'iphone', price: 100000, color:'black'},
    {brand: 'oppo', price: 20000, color:'black'},
    {brand: 'nokia', price: 35000, color:'black'},
    {brand: 'samsung', price: 40000, color:'black'}
];

function cheapest(phones){
    let cheap = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(phone.price < cheap.price){
            cheap = phone;
        }
    }
    return cheap;
}
var cheapPhone = cheapest(phones);
console.log(cheapPhone);