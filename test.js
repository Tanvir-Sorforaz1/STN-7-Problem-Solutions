
const {
    staircase,
    gradingStudents,
    timeConversion,
    repeatStr,
    solution,
    positiveSum,
    summation,
    booleanToString,
    fizzBuzz,
    runningSum,
    maximumWealth,
    removeDuplicates,
    containsDuplicate,
    moveZeroes,
    merge,
    threeSum,
    plusOne,
    reverseString,
    lengthOfLastWord,
    longestCommonPrefix
} = require("./solution.js");

console.log("Problem 1:")
console.log(staircase(5));
console.log("Problem 2:", gradingStudents([73, 67, 38, 33]));
console.log("Problem 3:", timeConversion("07:05:45PM"));
console.log("Problem 4:", repeatStr(3, "ha"));
console.log("Problem 5:", solution("world"));
console.log("Problem 6:", positiveSum([1, -4, 7, 12]));
console.log("Problem 7:", summation(8));
console.log("Problem 8:", booleanToString(true));
console.log("Problem 9:");
fizzBuzz(5);
console.log("Problem 10:", runningSum([1, 2, 3, 4]));
console.log("Problem 11:", maximumWealth([[1, 2, 3], [3, 2, 1]]));

let nums12 = [1, 1, 2];
let k = removeDuplicates(nums12);
console.log("Problem 12:", k, nums12.slice(0, k));

console.log("Problem 13:", containsDuplicate([1, 2, 3, 1]));

let nums14 = [0, 1, 0, 3, 12];
moveZeroes(nums14);
console.log("Problem 14:", nums14);

let nums15 = [1, 2, 3, 0, 0, 0];
merge(nums15, 3, [2, 5, 6], 3);
console.log("Problem 15:", nums15);

console.log("Problem 16:", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("Problem 17:", plusOne([1, 2, 9]));

let chars18 = ["h", "e", "l", "l", "o"];
reverseString(chars18);
console.log("Problem 18:", chars18);

console.log("Problem 19:", lengthOfLastWord("Hello World"));
console.log("Problem 20:", longestCommonPrefix(["flower", "flow", "flight"]));
