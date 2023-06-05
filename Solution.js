
/**
 * @param {string} toTransform
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (toTransform, dictionary) {
    const NOT_POSSIBLE = "";
    let indexLongestWord = -1;
    for (let i = 0; i < dictionary.length; ++i) {
        if (!wordCanBeExtracted(toTransform, dictionary[i])) {
            continue;
        }
        if (indexLongestWord === -1) {
            indexLongestWord = i;
            continue;
        }
        if (isLongerOrSameLengthAndLexicographicallySmaller(dictionary[indexLongestWord], dictionary[i])) {
            indexLongestWord = i;
        }
    }
    return indexLongestWord > -1 ? dictionary[indexLongestWord] : NOT_POSSIBLE;
};

/**
 * @param {string} longestWord
 * @param {string} word
 * @return {boolean}
 */
function isLongerOrSameLengthAndLexicographicallySmaller(longestWord, word) {
    return longestWord.length < word.length || (longestWord.length === word.length && longestWord > word);
}

/**
 * @param {string} toTransform
 * @param {string} target
 * @return {boolean}
 */
function wordCanBeExtracted(toTransform, target) {
    if (toTransform.length < target.length) {
        return false;
    }
    let countMatches = 0;
    let indexTarget = 0;
    for (let i = 0; i < toTransform.length && countMatches < target.length; ++i) {
        if (toTransform.charAt(i) === target.charAt(indexTarget)) {
            ++countMatches;
            ++indexTarget;
        }
    }
    return countMatches === target.length;
}
