// 2.(a) template string using variable

const name = 'Mst. Sinthiya Rahman';
const age = 21;
const width = 50;
const hight = 5.4;

const praptiDetail = `Welcome ${name}.\nNow you are in ${age} years old,\nYour width ${width}kg! Oh so sad, If your width 45kg.\nHight ${hight}fit not match to me`;

const praptiDetail2 = `Welcome ${name}.
Now you are in ${age} years old,
Your width ${width}kg! Oh so sad, If your width 45kg.
Hight ${hight}fit not match to me`;

// console.log(praptiDetail);
// console.log();
// console.log(praptiDetail2);

// 2. (b) template variable using Object property
const friendDetails = {
    name: 'Prapti Khatun',
    address: 'Rajshahi'

}

console.log(`Friend Name: ${friendDetails.name}
Address: ${friendDetails.address}`);
