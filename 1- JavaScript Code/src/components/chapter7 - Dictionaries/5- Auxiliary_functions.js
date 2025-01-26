function findLongestWord(sentence) {
    const words = splitIntoWords(sentence);
    return getLongestWord(words)
}

function splitIntoWords(sentence) {
    return sentence.split(' ')
}

function getLongestWord(words) {
    let longest = ""
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest
}

const sentence = "JavaScript is a versatile programming language";

const longestWord = findLongestWord(sentence)

console.log(`The longest word is: ${longestWord}`);
