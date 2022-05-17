import {TV} from './TV'

const COMMAND_TURN_ON = 'on'
const COMMAND_TURN_OFF = 'off'
const COMMAND_INFO = 'info'
const COMMAND_SELECT_CHANNEL = 'select'


class TVController {
    public turnOnTV(tv: TV, command: string): boolean {
        if (command === COMMAND_TURN_ON) {
            tv.turnOn()
            console.log('TV is turn on')
        }
        return true
    }

    public turnOffTV(tv: TV, command: string): boolean {
        if (command === COMMAND_TURN_OFF) {
            tv.turnOff()
            console.log('TV is turn off')
        }
        return true
    }

    public tvGetInfo(tv: TV, command: string): boolean {
        if (tv.isTurned() && command === COMMAND_INFO) {
            console.log('TV is turn on\n Channel is: '
                + tv.getChannel().toString() + '\n')
        } else {
            console.log('TV is turn off')
        }
        return true
    }

    public tvSelectChannel(channel: number, tv: TV, command: string): boolean {
        if (tv.isTurned() && command === COMMAND_SELECT_CHANNEL) {
            tv.selectChannel(channel)
            console.log('TV is turn on\n Channel is: '
                + tv.getChannel().toString() + '\n')
        } else {
            console.log('TV is turn')
        }
        return true
    }
}

export {
    TVController,
}