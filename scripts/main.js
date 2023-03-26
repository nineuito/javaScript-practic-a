// function multByFactor(value, multiplier) {
//     if (multiplier === undefined) {
//         multiplier = 1;
//     }
//     return value * multiplier
// }

// console.log(multByFactor(10,2))
// console.log(multByFactor(10))

// const multByFactor = function(value, multiplier) {
//     if (multiplier === undefined) {
//         multiplier = 1;
//     }

//     return value * multiplier;
// }

// console.log(multByFactor(2,6))

const multByFactor = (value, multiplier = 1) => {
    return value * multiplier;
}

console.log(multByFactor(6))