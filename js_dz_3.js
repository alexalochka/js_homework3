
function pow(number, expon) {
    let c = 1;
    for (expon; expon>0; expon--) {
        c = c * number;
    }
    return c;
}
let c = pow(4, 3);
console.log(c);











// v1
// function pow(number, expon) {
//     let c = 1;
//     for (expon; expon>0; expon--) {
//         c = c * number;
//     }
//     return c;
// }
//let c = pow(4, 3);
//console.log(c);

// v2
// function pow(number, expon) {
//     let c = 1;
//     for (let i=1; i<=expon; i++) {
//         c = c * number;
//     }
//     return c;
// }
//let c = pow(4, 3);
//console.log(c);


// v3
// function pow(number, expon) {
//     let c = 1;
//     for(let i=1;i<=expon;i++){
//         //console.log(c);
//         c*=number; //c = c * number;
//     }
//     return c;
// }
// let c = pow(4, 3);
// console.log(c);

// v4
// function pow(number, expon) {
//     let c = 1;
//     let i = 1;
//     while(i<=expon){       
//         c*=number; //c = c * number;
//         console.log('i'+c);
//         i++;
//     }
//     return c;
// }
// let c = pow(4, 3);
// console.log(c);


// v5
// function fn(a, b) {
//     return b ? a * fn(a, b - 1) : 1;
// }






// ============================================================================================
// Notes:

// c*=number; //c = c * number;
// ________________________

// console.log('Test text: '+c+' qwerty');
// console.log("Test text: "+c+" qwerty");
// console.log(`Test text:${c}qwerty`);
// console.log("Test text:${c}qwerty"); // not working

// =================================================================================================



// function pow(number, expon) {
//     for (expon; expon<=16; expon++) {
//         let c = number * expon;
//         if (c !== 64) {
//             continue;
//         }
        
//         else if(c == 64) {
//             return c;
//         }
        
//     }
    
// }
// let c = pow(4, 3);
// console.log(c);


