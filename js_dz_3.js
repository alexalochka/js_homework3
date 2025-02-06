
function pow(number, expon) {
    let c = 1;
    for (expon; expon>0; expon--) {
        c = c * number;
    }
    return c;
}
let c = pow(4, 3);
console.log(c);
