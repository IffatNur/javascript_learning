var shoppingCart = [
    {product: 'shirt', price: 1000, quantity: 3},
    {product: 'pant', price: 1200, quantity: 2},
    {product: 'shoe', price: 2000, quantity: 1},
    {product: 'watch', price: 1500, quantity: 2},
]
function shop(name){
    let bill = 0;
    for(var i = 0; i< name.length; i++){
        let product = name[i];
        bill = bill + (product.price * product.quantity);
    }
    return bill;
}
let payment = shop(shoppingCart);
console.log(payment);