import { stopWords } from "../libs/stopWords";

/**
 * Takes in the unparsed html as string
 * find the stop words in that string
 * wrap a span around it with 'fade' class
 * @param {string} content - content for finding and fading stop words
 * @return {string}
 */
export const fadeStopWords = content => {
  let fadedContent = content.split(" ");
  fadedContent.forEach((word, index) => {
    if (!word || /[<>=&]/.test(word) || /^[^a-zA-Z]+$/.test(word)) {
      return;
    }
    var boldLength = Math.ceil(word.length / 2);
    if (stopWords.includes(word.toLowerCase())) {
      boldLength = 1;
    }
    fadedContent[index] = `<b>${word.slice(0, boldLength)}</b>${word.slice(boldLength)}`;
  });

  return fadedContent.join(" ");
};
