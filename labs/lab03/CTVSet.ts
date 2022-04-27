class CTVSet {
    private isOn: boolean
    private selectedChannel: number = 1

    public isTurned() {
        return this.isOn
    }

    public turnOn() {
        this.isOn = true
    }

    public turnOff() {
        this.isOn = false
    }

    public getChannel(): number {
        return this.isOn ? this.selectedChannel : 0
    }

    public selectChannel(channel: number): boolean {
        if (channel >= 1 && channel <= 99 && this.isOn) {
            this.selectedChannel = channel
            return true
        }
        return false
    }
}

export {
    CTVSet,
}