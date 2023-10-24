function reverseEveryWordsInSentence(sentence) {
  //Spliting the every words
  const word = sentence.split(" ");

  //Reversing each word and storing them in a new Array
  const reversedWord = word.map((singleWord) => {
    return singleWord.split("").reverse().join("");
  });

  //Reassemble the reversed words into a sentence
  const reversedSentence = reversedWord.join(" ");

  //Finally returning the reversed sentence
  return reversedSentence;
}

//input sentence
const inputSentence = "This is a sunny day";
//calling reeverseEveryWordsInSentence
const reversedSentence = reverseEveryWordsInSentence(inputSentence);
//Logging the reversed sentence
console.log(reversedSentence);
