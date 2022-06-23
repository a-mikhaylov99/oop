import {expect} from 'chai'
import {Time} from '../../labs/lab05/Time'
import {it} from 'mocha'


describe('Time', function () {
    let time: Time

    it('should be throw exception by initialization with invalid hours = 109', function () {
        try {
            time = new Time(109, 0, 0)
            time.getHours()
        } catch (error) {
            expect(error.message).equal('Wrong parameters')
        }
    })

    it('should be throw exception by initialization with invalid hours = 8.5', function () {
        try {
            time = new Time(8.5, 0, 0)
            time.getHours()
        } catch (error) {
            expect(error.message).equal('Wrong parameters')
        }
    })

    it('should be throw exception by initialization with invalid minutes = 1000', function () {
        try {
            time = new Time(12, 1000, 0)
            time.getHours()
        } catch (error) {
            expect(error.message).equal('Wrong parameters')
        }
    })

    it('should be throw exception by initialization with invalid minutes = 0.44434', function () {
        try {
            time = new Time(12, 0.44434, 0)
            time.getMinutes()
        } catch (error) {
            expect(error.message).equal('Wrong parameters')
        }
    })

    it('should be throw exception by initialization with invalid seconds = 34545', function () {
        try {
            time = new Time(12, 0, 34545)
            time.getSeconds()
        } catch (error) {
            expect(error.message).equal('Wrong parameters')
        }
    })

    it('should be throw exception by initialization with invalid seconds = 6.012', function () {
        try {
            time = new Time(12, 0, 6.012)
            time.getSeconds()
        } catch (error) {
            expect(error.message).equal('Wrong parameters')
        }
    })

    it('should display 3 hours', function () {
        time = new Time(3, 3, 9)
        expect(time.getHours()).equal(3)
    })

    it('should display 55 minutes', function () {
        time = new Time(3, 55, 9)
        expect(time.getMinutes()).equal(55)
    })

    it('should display 45 seconds', function () {
        time = new Time(3, 55, 45)
        expect(time.getSeconds()).equal(45)
    })

    it('should be increment seconds and return new time value', function () {
        time = new Time(23, 59, 59)
        const time2 = new Time(0, 0, 0)
        expect(Time.increment(time)).eql(time2)
        expect(time).eql(time2)
    })

    it('should be decrement seconds and return new time value ', function () {
        time = new Time(0, 0, 0)
        const time2 = new Time(23, 59, 59)
        expect(Time.decrement(time)).eql(time2)
        expect(time).eql(time2)
    })

    it('should add one time to another', function () {
        time = new Time(23, 59, 59)
        const time2 = new Time(0, 0, 1)
        const time3 = new Time(0, 0, 0)
        expect(Time.add(time, time2)).eql(time3)
    })

    it('should subtract one time from another', function () {
        time = new Time(23, 59, 59)
        const time2 = new Time(0, 0, 1)
        const time3 = new Time(23, 59, 58)
        expect(Time.subtraction(time, time2)).eql(time3)
    })

    it('should be throw exception by multi with invalid coefficient = 0.5', function () {
        time = new Time(23, 59, 58)
        const coefficient = 0.5
        try {
            Time.multiplication(time, coefficient)
        } catch (error) {
            expect(error.message).equal(`It's not an integer`)
        }
    })

    it('should multiplication the time by an integer', function () {
        time = new Time(3, 15, 5)
        const time2 = new Time(6, 30, 10)
        expect(Time.multiplication(time, 2)).eql(time2)
    })

    it('should divide the time by an integer', function () {
        time = new Time(6, 30, 10)
        const time2 = new Time(3, 15, 5)
        expect(Time.divisionByInteger(time, 2)).eql(time2)
    })

    it('should divide the time to time and get an integer', function () {
        time = new Time(6, 30, 10)
        const time2 = new Time(3, 15, 5)
        expect(Time.divisionTimeToTime(time, time2)).eql(2)
    })

    it('checking two times for equality and should return the value of false', function () {
        time = new Time(6, 30, 10)
        const time2 = new Time(3, 15, 5)
        expect(Time.isEquality(time, time2)).eql(false)
    })

    it('checking two times for equality and should return the value of false', function () {
        time = new Time(3, 15, 5)
        const time2 = new Time(3, 15, 5)
        expect(Time.isEquality(time, time2)).eql(true)
    })

    it('must check the values of two times strict larger, must return the value of false', function () {
        time = new Time(3, 15, 5)
        const time2 = new Time(3, 15, 7)
        expect(Time.isStrictLarger(time, time2)).eql(false)
    })

    it('must check the values of two times strict larger, must return the value of true', function () {
        time = new Time(3, 16, 5)
        const time2 = new Time(3, 15, 5)
        expect(Time.isStrictLarger(time, time2)).eql(true)
    })

    it('should check the values of two times strict less, must return the value of false', function () {
        time = new Time(3, 15, 5)
        const time2 = new Time(3, 15, 5)
        expect(Time.isStrictLess(time, time2)).eql(false)
    })

    it('should check the values of two times strict less, must return the value of true', function () {
        time = new Time(3, 15, 1)
        const time2 = new Time(3, 15, 5)
        expect(Time.isStrictLess(time, time2)).eql(true)
    })

    it('should check the values of two times no strict less, must return the value of true', function () {
        time = new Time(3, 15, 5)
        const time2 = new Time(3, 15, 5)
        expect(Time.isNotStrictLarger(time, time2)).eql(true)
    })

    it('should check the values of two times no strict less, must return' +
        ' the value of true when the first time has more minutes', function () {
        time = new Time(3, 20, 5)
        const time2 = new Time(3, 15, 5)
        expect(Time.isNotStrictLarger(time, time2)).eql(true)
    })

    it('should check the values of two times not strict less, must return the value of false', function () {
        time = new Time(3, 15, 1)
        const time2 = new Time(3, 15, 5)
        expect(Time.isNotStrictLess(time, time2)).eql(true)
    })
})
