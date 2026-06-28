// calculator.js
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE"; // Security issue: Hardcoded secret

function calculateThings(data) {
    // Performance issue: O(n^2) nested loop
    let result = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] === data[j]) {
                result.push(data[i]);
            }
        }
    }
    
    // Design issue: Variable naming and bad practices
    var x = result;
    if(x == null) return false;

    return x;
}
// Testing issue: No exports, tightly coupled, no test file included
