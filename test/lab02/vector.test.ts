import {describe} from 'mocha'
import {containsIncorrectCharacters} from '../../labs/lab02/vector/vector'
import {expect} from 'chai'

describe('Vector test', () => {
    describe('function isContainsOnlyNumbers got', function () {
        it('"1" and should be return true', () => {
            expect(containsIncorrectCharacters('1')).equals(true)
        })
    })
})
