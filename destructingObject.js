const myObj = { id: 1, name: 'Bed', price: 20000, color: 'black' };
function productDetail(myObj) {
    const { name, price, color } = myObj;
    return `product name: ${name} 
product price: ${price}tk 
color: ${color}`;
}
const result = productDetail(myObj);
console.log(result);