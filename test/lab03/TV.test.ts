import {TV} from '../../labs/lab03/TV'
import {expect} from 'chai'
import {TVController} from '../../labs/lab03/TVController'

const INFO_THAT_TV_ON = 'TV is turn on'
const INFO_THAT_TV_OFF = 'TV is turn off'
const CHANNEL_INFO = 'Channel is: '
const NO_SUCH_CHANNEL = 'There is no such channel'

describe('Tv set', function () {

    describe('Turned on TV', function () {
        const tv: TV = new TV()
        beforeEach(function () {
            tv.turnOn()
        })

        it('The null channel should not be selected when tv is turn on', function () {
            expect(tv.selectChannel(0)).equals(false)
        })

        it('The first channel can be selected when tv set is turn on', function () {
            expect(tv.selectChannel(1)).equals(true)
        })

        it('The ninety-ninth channel can be selected when tv set is turn on', function () {
            expect(tv.selectChannel(99)).equals(true)
        })

        it('The hundredth channel can be selected when tv set is turn on', function () {
            expect(tv.selectChannel(100)).equals(false)
        })

        afterEach(function () {
            tv.turnOff()
        })
    })

    describe('Tests for tv controller', function () {
        const tv: TV = new TV()
        const tvController: TVController = new TVController(tv)

        describe('Output information about the TV when the TV is on', function () {

            beforeEach(function () {
                tvController.turnOnTV()
            })

            it('at the first power-up, information about the power-up and the selected first ' +
                'channel should be displayed', function () {
                expect(tvController.getTvInfo()).equals(INFO_THAT_TV_ON + '\r\n' + CHANNEL_INFO
                    + '1')
            })

            it('Should output channel 44, when we specified it, after turning off ' +
                'and turning on the TV again', function () {
                tvController.selectTvChannel('44')
                tvController.turnOffTV()
                tvController.turnOnTV()
                expect(tvController.getTvInfo()).equals(INFO_THAT_TV_ON + '\r\n' + CHANNEL_INFO
                    + '44')
            })

            afterEach(function () {
                tvController.turnOffTV()
            })
        })

        describe('Tests for turning the TV on and off', function () {

            it('should display a message about turning off the TV when we turned it on', function () {
                expect(tvController.turnOnTV()).equals(INFO_THAT_TV_ON)
            })

            it('should display a message about turning off the TV when we turned it on and off', function () {
                tvController.turnOnTV()
                expect(tvController.turnOffTV()).equals(INFO_THAT_TV_OFF)
            })
        })

        describe('Tests for selecting TV channels when tv set is turn on', function () {

            beforeEach(function () {
                tvController.turnOnTV()
            })

            it('The TV should switch to channel 1 ', function () {
                expect(tvController.selectTvChannel('1')).equals(INFO_THAT_TV_ON +
                    '\r\n' + CHANNEL_INFO + '1')
            })

            it('The TV should switch to channel 99', function () {
                expect(tvController.selectTvChannel('99')).equals(INFO_THAT_TV_ON +
                    '\r\n' + CHANNEL_INFO + '99')
            })

            it('The TV should not switch to channel 100', function () {
                expect(tvController.selectTvChannel('100')).equals(NO_SUCH_CHANNEL)
            })

            it('The TV should not switch to channel 0', function () {
                expect(tvController.selectTvChannel('0')).equals(NO_SUCH_CHANNEL)
            })

            it('The TV should not switch to channel 4.5', function () {
                expect(tvController.selectTvChannel('4.5')).equals(NO_SUCH_CHANNEL)
            })

            afterEach(function () {
                tvController.turnOffTV()
            })
        })
    })
})