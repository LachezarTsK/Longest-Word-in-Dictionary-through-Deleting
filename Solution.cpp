
#include <vector>
#include <string>
using namespace std;

class Solution {
    
    inline static const string NOT_POSSIBLE;

public:
    string findLongestWord(const string& toTransform, const vector<string>& dictionary) const {
        int indexLongestWord = -1;
        for (int i = 0; i < dictionary.size(); ++i) {
            if (!wordCanBeExtracted(toTransform, dictionary[i])) {
                continue;
            }
            if (indexLongestWord == -1) {
                indexLongestWord = i;
                continue;
            }
            if (isLongerOrSameLengthAndLexicographicallySmaller(dictionary[indexLongestWord], dictionary[i])) {
                indexLongestWord = i;
            }
        }
        return indexLongestWord > -1 ? dictionary[indexLongestWord] : NOT_POSSIBLE;
    }

private:
    bool isLongerOrSameLengthAndLexicographicallySmaller(const string& longestWord, const string& word) const {
        return longestWord.length() < word.length() || (longestWord.length() == word.length() && longestWord > word);
    }

    bool wordCanBeExtracted(const string& toTransform, const string& target) const {
        if (toTransform.length() < target.length()) {
            return false;
        }
        int countMatches = 0;
        int indexTarget = 0;
        for (int i = 0; i < toTransform.length() && countMatches < target.length(); ++i) {
            if (toTransform[i] == target[indexTarget]) {
                ++countMatches;
                ++indexTarget;
            }
        }
        return countMatches == target.length();
    }
};
