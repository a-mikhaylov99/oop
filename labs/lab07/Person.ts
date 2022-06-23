class Person {
    protected name: string
    protected surname: string
    protected patronymic: string
    protected address: string

    constructor(name: string, surname: string, patronymic: string, address: string) {
        this.name = name
        this.surname = surname
        this.patronymic = patronymic ?? ''
        this.address = address
    }

    public getName() {
        return this.name
    }

    public getSurname() {
        return this.surname
    }

    public getPatronymic() {
        return this.patronymic
    }

    public getAddress() {
        return this.address
    }
}

export {
    Person,
}