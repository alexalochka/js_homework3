function pow(number, expon) {
    for (expon; expon<=16; expon++) {
        let c = number * expon;
        if (c !== 64) {
            continue;
        }
        
        else if(c == 64) {
            return c;
        }
        
    }
    
}
let c = pow(4, 3);
console.log(c);





