import {Person} from './Person'

class Teacher <T extends Person> {
    protected itemName: string

    constructor(itemName: string) {
        this.itemName = itemName
    }
}

export {
    Teacher,
}