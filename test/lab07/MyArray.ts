import { expect } from 'chai'
import {MyArray} from '../../labs/lab07/MyArray'

describe('MyArray', () => {
    let myArray: MyArray<number>

    beforeEach(() => {
        myArray = new MyArray<number>()
        myArray.push(1)
        myArray.push(2)
        myArray.push(3)
    })

    describe('#getSize()', () => {
        it('should return the number of elements in the array', () => {
            expect(myArray.getSize()).to.equal(3)
        })
    })

    describe('#clear()', () => {
        it('should clear the array', () => {
            myArray.clear()
            expect(myArray.getSize()).to.equal(0)
            expect(() => myArray.at(0)).to.throw('Index out of range')
        })
    })

    describe('#resize()', () => {
        it('should resize the array to a larger size', () => {
            myArray.resize(5)
            expect(myArray.getSize()).to.equal(5)
            expect(() => myArray.at(4)).to.not.throw()
            expect(myArray.at(0)).to.equal(1)
            expect(myArray.at(1)).to.equal(2)
            expect(myArray.at(2)).to.equal(3)
            // expect(myArray.at(3)).to.equal(0)
            // expect(myArray.at(4)).to.equal(0)
        })
        it('should resize the array to a smaller size', () => {
            myArray.resize(1)
            expect(myArray.getSize()).to.equal(1)
            expect(() => myArray.at(0)).to.not.throw()
            expect(() => myArray.at(1)).to.throw('Index out of range')
            expect(myArray.at(0)).to.equal(1)
        })
    })

    describe('#at()', () => {
        it('should return the element at the given index', () => {
            expect(myArray.at(0)).to.equal(1)
            expect(myArray.at(1)).to.equal(2)
            expect(myArray.at(2)).to.equal(3)
        })
        it('should throw an error when the index is out of range', () => {
            expect(() => myArray.at(3)).to.throw('Index out of range')
        })
    })
    describe('#push()', () => {
        it('should add an element to the end of the array', () => {
            myArray.push(4)
            expect(myArray.getSize()).to.equal(4)
            expect(myArray.at(3)).to.equal(4)
        })
    })

    describe('#operatorAssignCopy()', () => {
        it('should copy the elements from another array', () => {
            const otherArray = new MyArray<number>()
            otherArray.push(4)
            otherArray.push(5)
            myArray.operatorAssignCopy(otherArray)
            expect(myArray.getSize()).to.equal(2)
            expect(myArray.at(0)).to.equal(4)
            expect(myArray.at(1)).to.equal(5)
        })
    })

    describe('#begin()', () => {
        it('should return an iterable containing all the elements', () => {
            const iterator = myArray.begin()
            expect(iterator.next().value).to.equal(1)
            expect(iterator.next().value).to.equal(2)
            expect(iterator.next().value).to.equal(3)
            expect(iterator.next().done).to.be.true
        })
    })

    describe('#end()', () => {
        it('should return an iterable containing all the elements in reverse order', () => {
            const iterator = myArray.end()
            expect(iterator.next().value).to.equal(3)
            expect(iterator.next().value).to.equal(2)
            expect(iterator.next().value).to.equal(1)
            expect(iterator.next().done).to.be.true
        })
    })
})