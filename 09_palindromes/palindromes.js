const palindromes = function (string) {
    const letters = string
        .toLowerCase()
        .split('')
        .filter(character => /[a-z]/.test(character))
        ; 
    const reverseLetters = [...letters].reverse(); 
    return letters.join('') === reverseLetters.join('')
};

// Do not edit below this line
module.exports = palindromes;
