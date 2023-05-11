import {expect} from 'chai'
import {getWordsCount, stringToArray} from '../../labs/lab02/map/getWordsCount'

describe('Get words count', () => {
    describe('function stringToArray', () => {
        expect(stringToArray('type type type')).eql(['type', 'type', 'type'])
    })

    describe('function getWordsCount', () => {
        it(`String "'typescript', 'typescript', 'types'" should be return Map(2) { 'typescript' => 2, 'types' => 1 }`, () => {
            expect(getWordsCount(['typescript', 'typescript', 'types'])).eql(new Map([['typescript', 2], ['types', 1]]))
        })

        it(`Two whitespace characters should be return Map(1) { ' ' => 2 }`, () => {
            expect(getWordsCount([' ', ' '])).eql(new Map([[' ', 2]]))
        })

        it(`Empty string should be return Map(1) { '' => 1 }`, () => {
            expect(getWordsCount([''])).eql(new Map([['', 1]]))
        })

        it(`String "'Typescript', 'typescript', 'Typescript'" should be return Map(2) { 'Typescript' => 2, 'typescript' => 1 }`, () => {
            expect(getWordsCount(['Typescript', 'Typescript', 'typescript'])).eql(new Map([['Typescript', 2], ['typescript', 1]]))
        })

        it(`String "'&&&', '&', '&&'" should be return Map(3) { '&&&' => 1, '&' => 1, '&&' => 1, }`, () => {
            expect(getWordsCount(['&&&', '&', '&&'])).eql(new Map([['&&&', 1], ['&', 1], ['&&', 1]]))
        })
    })
})
