import { expect } from 'chai'
import {StringStack} from '../../labs/lab06/StringStack'

describe('StringStack', () => {
    let stack: StringStack

    beforeEach(() => {
        stack = new StringStack()
    })

    it('should push values onto the stack', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.getSize()).to.equal(2)
    })

    it('should pop values off the stack in LIFO order', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.pop()).to.equal('b')
        expect(stack.pop()).to.equal('a')
        expect(stack.pop()).to.be.undefined
    })

    it('should get the last value on the stack without removing it', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.peek()).to.equal('b')
        expect(stack.peek()).to.equal('b')
    })

    it('should clear the stack', () => {
        stack.push('a')
        stack.push('b')
        stack.clear()
        expect(stack.getSize()).to.equal(0)
    })

    it('should create a copy of the stack', () => {
        stack.push('a')
        stack.push('b')
        const copy = stack.copy()
        stack.pop()
        expect(stack.getSize()).to.equal(1)
        expect(copy.getSize()).to.equal(2)
    })

    it('should move the stack to a new instance', () => {
        stack.push('a')
        stack.push('b')
        const movedStack = stack.move()
        expect(stack.getSize()).to.equal(0)
        expect(movedStack.getSize()).to.equal(2)
    })

    it('should assign a copy of another stack', () => {
        const otherStack = new StringStack()
        otherStack.push('a')
        otherStack.push('b')
        stack.operatorAssignCopy(otherStack)
        expect(stack.getSize()).to.equal(2)
        expect(otherStack.getSize()).to.equal(2)
    })
})