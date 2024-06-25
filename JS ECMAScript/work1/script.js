const array = [1,3,5,7,10];

function max(param1, param2, ...rest) {
    if (param1 > param2) {
        console.log(param1);
    } else {
        console.log(param2);
    }
    console.log(rest);
}

console.log(max(...array));

