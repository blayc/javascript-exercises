const fibonacci = function(n) {
    let fibSequence = [1,1]; 
    if(n < 0){return 'OOPS'}
    else {
    for(i = 2; i <= n; i++) {
        let a = fibSequence[i - 2]; 
        let b = fibSequence[i - 1]; 
        let c = a + b; 
        fibSequence.push(c);
    }
}
    return (fibSequence[n - 1])
};

// Do not edit below this line
module.exports = fibonacci;
