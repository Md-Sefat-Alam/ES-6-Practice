let changeAbleVar = 50;
const notChangaAble = 100;

let result = changeAbleVar + notChangaAble;
console.log(result);

try {
    changeAbleVar = 100;
    notChangaAble = 100;
    result = changeAbleVar + notChangaAble;
    console.log(result);
}
catch (er) {
    console.log(er.name);
    console.log(er.message);
    // console.log(er);
}