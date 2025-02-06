function pow(number, expon) {
    for (expon; expon<=16; expon++) {
        let c = number * expon;
        if (c !== 64) {
            continue
        }
        
        else if(c == 64) {
            return c
        }
        
    }
    
}
let c = pow(4, 3);
console.log(c)




// Other working schemes but not meet requirements fully



// function so(a) {
//     return a * a * a;
// };
// let result = so(4);
// console.log(result);




// function fn(a, b) {
//     return b ? a * fn(a, b - 1) : 1;
// };

// console.log(fn(4, 3));




// let number = 4;
// // let k;
// for (let q = 3; q<=16; q++){
//     if ((number * q) !== 64) continue;
//     // return result = (number * q);
//     console.log(number*q);
// }



