class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> prevRow(rowIndex, 1);
        vector<int> currRow(rowIndex + 1, 1); // initialize with 1's
        for(int i = 2; rowIndex > 1 && i < rowIndex + 1; i++) // from row [1,2,1] and below
        {
            prevRow = currRow;
            currRow.clear();
            currRow.push_back(1); //start making the new currRow
            for(int j = 1; j <= i-1; j++)
                currRow.push_back(prevRow[j-1] + prevRow[j]);
            currRow.push_back(1);
        } // done making the last row
        return currRow; // return the last row
    }
};