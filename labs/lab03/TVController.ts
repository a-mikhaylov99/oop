import {TV} from './TV'

const COMMAND_TURN_ON = 'on'
const COMMAND_TURN_OFF = 'off'
const COMMAND_INFO = 'info'
const COMMAND_SELECT_CHANNEL = 'select'
const INFO_THAT_TV_ON = 'TV is turn on'
const INFO_THAT_TV_OFF = 'TV is turn off'
const CHANNEL_INFO = 'Channel is: '
const INCORRECT_INPUT = 'Incorrect input, enter the command again:'
const NO_SUCH_CHANNEL = 'There is no such channel'

class TVController {
    private tv: TV

    constructor(tv: TV) {
        this.tv = tv
    }

    public turnOnTV(): string {
        this.tv.turnOn()
        return INFO_THAT_TV_ON
    }

    public turnOffTV(): string {
        this.tv.turnOff()
        return INFO_THAT_TV_OFF
    }

    public getTvInfo(): string {
        if (this.tv.isTurned()) {
            return INFO_THAT_TV_ON + '\r\n' + CHANNEL_INFO
                + this.tv.getChannel().toString()
        } else {
            return INFO_THAT_TV_OFF
        }
    }

    public selectTvChannel(command: string): string {
        if (this.tv.isTurned()) {
            if (this.tv.selectChannel(Number(command)) && Number.isInteger(Number(command))) {
                return INFO_THAT_TV_ON + '\r\n' + CHANNEL_INFO
                    + this.tv.getChannel().toString()
            } else {
                return NO_SUCH_CHANNEL
            }
        } else {
            return INFO_THAT_TV_OFF
        }
    }

    public executeCommand(command: string): string {
        const currentCommand: string[] = command.split(' ')
        switch (currentCommand[0]) {
            case COMMAND_TURN_ON: {
                return this.turnOnTV()
            }
            case COMMAND_TURN_OFF: {
                return this.turnOffTV()
            }
            case COMMAND_INFO: {
                return this.getTvInfo()
            }
            case COMMAND_SELECT_CHANNEL: {
                return this.selectTvChannel(currentCommand[1])
            }
            default: {
                return INCORRECT_INPUT
            }
        }
    }
}

export {
    TVController,
}