const reverseString = function(str) {
    let strChars = str.split("");
    let reversedStr = strChars.reverse().join("");
    return reversedStr; 
};

// Do not edit below this line
module.exports = reverseString;
