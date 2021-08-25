const product = [
    { name: 'Bed', color: 'black', price: 20000 },
    { name: 'Dracing', color: 'whtie', price: 5000 },
    { name: 'Dring Table', color: 'black', price: 50000 },
    { name: 'Bed Side', color: 'black', price: 2000 },
    { name: 'Reading Table', color: 'black', price: 1500 },
    { name: 'Sofa', color: 'Brown', price: 60000 },
];

let price5000Product = product.find(p => p.price == 5000);
console.log(price5000Product);
price5000Product = product.filter(p => p.price <= 5000);
console.log(price5000Product);