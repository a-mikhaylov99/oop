import {describe} from 'mocha'
import {
    containsIncorrectCharacters, isZeroMaxElement, divideArrayElementsByHalfMaxElem,
    transformStringArrayToNumber, transformStringToArray,
} from '../../labs/lab02/vector/vector'
import {expect} from 'chai'

describe('Vector test: ', () => {

    describe('function containsIncorrectCharacters', function () {

        it('Correct integer processing', () => {
            expect(containsIncorrectCharacters('5')).equals(false)
        })

        it('Correct processing of a negative number', function () {
            expect(containsIncorrectCharacters('-1')).equals(false)
        })

        it('Correct processing of floating-point numbers', function () {
            expect(containsIncorrectCharacters('1.1')).equals(false)
        })

        it('Correct processing of long digits', function () {
            expect(containsIncorrectCharacters('37289473289473284923 723842374893274 7283947324')).equals(false)
        })

        it('Correct operation of the string: letter, digit, digit, letter', function () {
            expect(containsIncorrectCharacters('f 1 4 r')).equals(true)
        })

        it('Correct number processing: digit dot, digit dot', function () {
            expect(containsIncorrectCharacters('1.1.1')).equals(true)
        })

        it('Correct processing of the letter number', function () {
            expect(containsIncorrectCharacters('1a')).equals(true)
        })

        it('Correct processing of numbers: digit minus, digit minus', function () {
            expect(containsIncorrectCharacters('-1-1-1-1')).equals(true)
        })

        it('Correct processing of special characters', function () {
            expect(containsIncorrectCharacters('!"№;%:?*()_+/*-')).equals(true)
        })

        it('Correct handling of spaces', function () {
            expect(containsIncorrectCharacters('   ')).equals(true)
        })

        it('Correct operation of the string: space, number', function () {
            expect(containsIncorrectCharacters('   1.1')).equals(false)
        })

        it('Correct operation of Latin and Cyrillic letters', function () {
            expect(containsIncorrectCharacters('ффффaasss')).equals(true)
        })
    })

    describe('function stringToArray', function () {

        it('The string must be processed correctly and converted into an array', function () {
            expect(transformStringToArray('4 4.4 9 0.4')).eql(['4', '4.4', '9', '0.4'])
        })
    })

    describe('function transformStringArrayToNumber', function () {

        it('The string array must be processed correctly and converted into an number array', function () {
            expect(transformStringArrayToNumber(['4', '4.4', '9', '0.4'])).eql([4, 4.4, 9, 0.4])
        })
    })
    describe('function divideArrayElementsByHalfMaxElem', function () {

        it('Correct division of an array of integers by half of the maximum element', function () {
            expect(divideArrayElementsByHalfMaxElem([4, 2, 4])).eql([2, 1, 2])
        })

        it('Correct division of an array of integers by half of the maximum element', function () {
            expect(divideArrayElementsByHalfMaxElem([])).eql([])
        })

        it('Correct division of an array of long integers by half of the maximum element', function () {
            expect(divideArrayElementsByHalfMaxElem([Number.MAX_VALUE, Number.MAX_VALUE - 100000])).eql([2.000, 2.000])
        })

        it('Correct division of an array with zero by half of the maximum element', function () {
            expect(divideArrayElementsByHalfMaxElem([2, 0, 0])).eql([2.000, 0.000, 0.000])
        })

        it('Correct division of an array of floating-point numbers by half of the maximum element', function () {
            expect(divideArrayElementsByHalfMaxElem([20.3, 5.06, 0.01, 100.6])).eql([0.4035785288270378, 0.10059642147117297, 0.00019880715705765408, 2.000])
        })

        it('Correct division of an array of negative numbers by half of the maximum element', function () {
            expect(divideArrayElementsByHalfMaxElem([-20, -5, -100])).eql([8.000, 2.000, 40.000])
        })

        it('Correct division of an array consisting of negative and positive numbers by half of the maximum element', function () {
            expect(divideArrayElementsByHalfMaxElem([-20, -5, -100, 80, 90, 7])).eql([-0.4444444444444444, -0.1111111111111111, -2.2222222222222223, 1.7777777777777777, 2, 0.15555555555555556])
        })
    })

    describe('function handleZero', function () {

        it('Correct processing of an array of zeros', function () {
            expect(isZeroMaxElement([0, 0, 0])).equals(true)
        })

        it('Correct processing of an array where the maximum element is zero', function () {
            expect(isZeroMaxElement([-1, 0, -1])).equals(true)
        })

        it('Correct processing of an array with positive, negative and zero', function () {
            expect(isZeroMaxElement([1, 0, -1])).equals(false)
        })
    })
})
