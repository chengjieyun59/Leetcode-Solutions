class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int letters[26] = {0};
        for (char c : magazine) {
            letters[c - 'a'] += 1;
        }
        for (char c : ransomNote) {
            letters[c - 'a'] -= 1;
            if (letters[c - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
};