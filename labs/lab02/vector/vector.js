"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorOutput = exports.outputResult = exports.processArray = exports.transformStringArrayToNumber = exports.transformStringToArray = exports.containsIncorrectCharacters = exports.main = void 0;
var process_1 = require("process");
var readline = require("readline");
var ERROR_MESSAGE = 'Numbers must not contain letters, commas, more than two dots or more than two cons in a row';
main();
function main() {
    var readLine = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
    readLine.question('Enter several numbers in a row: ', function (array) {
        if (containsIncorrectCharacters(array)) {
            errorOutput(new Error(ERROR_MESSAGE));
        }
        else {
            transformStringToArray(array);
            transformStringArrayToNumber(array);
            processArray(array);
            outputResult(array);
        }
        readLine.close();
    });
}
exports.main = main;
function containsIncorrectCharacters(str) {
    var searchResult;
    var stringArray = transformStringToArray(str);
    for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
        var string = stringArray_1[_i];
        searchResult = !string.match(/^-?(?:\.\d+|\d+\.?\d*)$/);
    }
    return searchResult;
}
exports.containsIncorrectCharacters = containsIncorrectCharacters;
function transformStringToArray(str) {
    return str.split(' ');
}
exports.transformStringToArray = transformStringToArray;
function transformStringArrayToNumber(str) {
    var numberArray = [];
    var stringArray = transformStringToArray(str);
    for (var _i = 0, stringArray_2 = stringArray; _i < stringArray_2.length; _i++) {
        var string = stringArray_2[_i];
        if (string) {
            numberArray.push(parseFloat(string));
        }
    }
    return numberArray;
}
exports.transformStringArrayToNumber = transformStringArrayToNumber;
function processArray(str) {
    var numberArray = transformStringArrayToNumber(str);
    var maxNumber = Math.max.apply(Math, numberArray) / 2;
    var resultArray = [];
    for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
        var number = numberArray_1[_i];
        resultArray.push(Number((number / maxNumber).toFixed(3)));
    }
    return resultArray;
}
exports.processArray = processArray;
function outputResult(str) {
    console.log(processArray(str).toString());
}
exports.outputResult = outputResult;
function errorOutput(error) {
    console.log(error.message);
}
exports.errorOutput = errorOutput;
//# sourceMappingURL=vector.js.map