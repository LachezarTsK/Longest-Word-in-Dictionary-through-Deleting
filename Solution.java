
import java.util.List;

public class Solution {

    private static final String NOT_POSSIBLE = "";

    public String findLongestWord(String toTransform, List<String> dictionary) {
        int indexLongestWord = -1;
        for (int i = 0; i < dictionary.size(); ++i) {
            if (!wordCanBeExtracted(toTransform, dictionary.get(i))) {
                continue;
            }
            if (indexLongestWord == -1) {
                indexLongestWord = i;
                continue;
            }
            if (isLongerOrSameLengthAndLexicographicallySmaller(dictionary.get(indexLongestWord), dictionary.get(i))) {
                indexLongestWord = i;
            }
        }
        return indexLongestWord > -1 ? dictionary.get(indexLongestWord) : NOT_POSSIBLE;
    }

    private boolean isLongerOrSameLengthAndLexicographicallySmaller(String longestWord, String word) {
        return longestWord.length() < word.length() || (longestWord.length() == word.length() && longestWord.compareTo(word) > 0);
    }

    private boolean wordCanBeExtracted(String toTransform, String target) {
        if (toTransform.length() < target.length()) {
            return false;
        }
        int countMatches = 0;
        int indexTarget = 0;
        for (int i = 0; i < toTransform.length() && countMatches < target.length(); ++i) {
            if (toTransform.charAt(i) == target.charAt(indexTarget)) {
                ++countMatches;
                ++indexTarget;
            }
        }
        return countMatches == target.length();
    }
}
