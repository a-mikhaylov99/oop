class StringStack {
    private stack: string[]
    private size: number = 0

    constructor(other?: StringStack) {
        if (other) {
            this.stack = [...other.stack]
        } else {
            this.stack = []
        }
    }

    public clear(): void {
        this.stack = []
    }

    public getSize(): number {
        return this.size
    }

    public copy(): StringStack {
        return new StringStack(this)
    }

    public isEmpty(): boolean {
        return this.stack.length === 0
    }

    public move(): StringStack {
        const movedStack = new StringStack(this)
        this.clear()
        return movedStack
    }

    public operatorAssignCopy(other: StringStack): void {
        const copy: StringStack = new StringStack(other)
        try {
            this.stack = copy.stack
            this.size = copy.size
            copy.clear()
        } catch (error) {
            copy.clear()
            throw error
        }
    }

    public peek(): string | undefined {
        return this.stack[this.stack.length - 1]
    }

    public pop(): string | undefined {
        return this.stack.pop()
    }

    public push(value: string): void {
        this.stack.push(value)
    }
}

export {
    StringStack
}
