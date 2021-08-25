//3.(a) arrow function [single parameter] get modulas of 5;
const divideBy5 = n => n % 5;
let result = divideBy5(54);
console.log(result);


//3.(b) arrow function [double parameter (a,b)];    [   (a+2)*(b+2)  ]
const a2MultiplicationB2 = (a, b) => `(${a} + 2) * (${b} + 2) = ${(a + 2) * (b + 2)}`;
result = a2MultiplicationB2(5, 12);
console.log(result);


//3.(c) arrow function [Three parameter (a,b,c=default value)];
const threeParam = (a = 1, b = 1, c = 1) => `${a} * ${b} * ${c} = ${a * b * c}`;
result = threeParam(5, 5);  // there is default parameter
console.log(result);


//3.(d) arrow function [multiline arrow function (two parameter and get return)];
const multilineArrowFunction = (firstName, lastName) => {
    lastName = lastName || "";
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}
result = multilineArrowFunction("Sinthiya", "Rahman");
console.log(result);