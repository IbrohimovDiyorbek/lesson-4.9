let isPalindromeArr = ['non', 'olma', 'aziza', 'gul', 'mashina'];

let palindromes = [];
let nonPalindromes = [];

for (const word of isPalindromeArr) {
    const lowercaseWord = word.toLowerCase();
    if (lowercaseWord === lowercaseWord.split('').reverse().join('')) {
        palindromes.push(word);
    } else {
        nonPalindromes.push(word);
    }
}

console.log("Palindromes:", palindromes);
console.log("Non-Palindromes:", nonPalindromes);