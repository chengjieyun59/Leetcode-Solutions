class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> allRows;
        for (int i = 1; i <= numRows; i++) {
            vector<int> eachRow;
            eachRow.push_back(1); // each row starts with 1
            if (i > 1) { // for all rows below the first
                for (int j = 1; j < i-1; j++) // for all rows below the second
                    eachRow.push_back(allRows[i-2][j-1] + allRows[i-2][j]);
                eachRow.push_back(1); // each row ends with 1
            }
            allRows.push_back(eachRow);
        }
        return allRows;
    }
};