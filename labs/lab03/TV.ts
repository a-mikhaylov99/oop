class TV {
    private isOn: boolean = false
    private selectedChannel: number = 1

    public isTurned(): boolean {
        return this.isOn
    }

    public turnOn(): void {
        this.isOn = true
    }

    public turnOff(): void {
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
    TV,
}