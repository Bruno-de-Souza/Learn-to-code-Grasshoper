import { subsequences, stringSequence } from subsequences.words;
    
let subsequences = ['able', 'ale', 'apple'];
let stringSequence = ['abppplee'];


function longestWord(array) {
    let longeststring = "";

    for (const word of array) {
        if(word.length > longeststring.length)
        longestWord = word;
    }
        return longeststring;
}
