import {PersonInterface} from './PersonInterface'

class CPersonImpl<T extends PersonInterface> implements PersonInterface {
    public firstName: string
    public lastName: string
    public middleName: string
    public address: string

    constructor(data: T) {
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.middleName = data.middleName
        this.address = data.address
    }
}

export {
    CPersonImpl,
}