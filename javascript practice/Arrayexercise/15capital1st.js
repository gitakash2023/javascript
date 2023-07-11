
// Capitalize the First Letter of Each Word in a Sentence:

const capitalizeWords = (str)=>str.split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')


console.log(capitalizeWords('i am a boy'))