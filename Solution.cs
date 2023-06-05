
using System;
using System.Collections.Generic;

public class Solution
{
    static readonly string NOT_POSSIBLE = "";
    public string FindLongestWord(string toTransform, IList<string> dictionary)
    {
        int indexLongestWord = -1;
        for (int i = 0; i < dictionary.Count; ++i)
        {
            if (!wordCanBeExtracted(toTransform, dictionary[i]))
            {
                continue;
            }
            if (indexLongestWord == -1)
            {
                indexLongestWord = i;
                continue;
            }
            if (isLongerOrSameLengthAndLexicographicallySmaller(dictionary[indexLongestWord], dictionary[i]))
            {
                indexLongestWord = i;
            }
        }
        return indexLongestWord > -1 ? dictionary[indexLongestWord] : NOT_POSSIBLE;
    }

    private bool isLongerOrSameLengthAndLexicographicallySmaller(string longestWord, string word)
    {
        return longestWord.Length < word.Length || (longestWord.Length == word.Length && longestWord.CompareTo(word) > 0);
    }

    private bool wordCanBeExtracted(string toTransform, string target)
    {
        if (toTransform.Length < target.Length)
        {
            return false;
        }
        int countMatches = 0;
        int indexTarget = 0;
        for (int i = 0; i < toTransform.Length && countMatches < target.Length; ++i)
        {
            if (toTransform[i] == target[indexTarget])
            {
                ++countMatches;
                ++indexTarget;
            }
        }
        return countMatches == target.Length;
    }
}
