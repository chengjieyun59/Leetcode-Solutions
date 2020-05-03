class Solution {
public:
    int numJewelsInStones(string J, string S) {
        map<char, int> jewels;
        int count = 0;
        
        // get all jewels into the map
        for (int i = 0; i < J.length(); i++)
            jewels.insert(pair<char, int> (J[i], 1));

        // iterate through the stones, and check if a stone is in the jewel map
        for (int i = 0; i < S.length(); i++)
            if(jewels.count(S[i]))
                count++;
        return count;
    }
};

// JavaScript solution:
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewels = new Set(J);
  return S.split('').reduce((totalJ, stone) => totalJ + jewels.has(stone), 0);
};
