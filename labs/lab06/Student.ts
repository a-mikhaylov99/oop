const ERROR_MESSAGE = 'Incorrect student data'
const ERROR_AGE = 'Incorrect age'

class Student {
    private name: string
    private surname: string
    private patronymic: string
    private age: number

    constructor(name: string, surname: string, patronymic: string, age: number) {
        if (!(Student.isValidName(name) && Student.isValidSurname(surname)
            && Student.isValidPatronymic(patronymic) && Student.isValidStudentAge(age))) {
            throw new Error(ERROR_MESSAGE)
        }
        this.name = name
        this.surname = surname
        this.patronymic = patronymic ?? ''
        this.age = age
    }

    public getName(): string {
        return this.name
    }

    public getSurname(): string {
        return this.surname
    }

    public getPatronymic() {
        return this.patronymic
    }

    public getAge() {
        return this.age
    }

    public renameStudent(name: string, surname: string, patronymic: string): Student {
        if (!(Student.isValidName(name) && Student.isValidSurname(surname) && Student.isValidPatronymic(patronymic))) {
            throw new Error(ERROR_MESSAGE)
        }
        this.name = name
        this.surname = surname
        this.patronymic = patronymic ?? ''
        return this
    }

    public setAge(age: number): Student {
        if (!this.isValidSetAge(age) || (age < 14 && age > 60)) {
            throw new Error(ERROR_AGE)
        }

        this.age = age
        return this
    }

    private static isValidName(name: string): boolean {
        return !(Number(name) && !isNaN(Number(name)))
    }

    private static isValidSurname(surname: string): boolean {
        return !(Number(surname) && !isNaN(Number(surname)))
    }

    private static isValidPatronymic(patronymic: string) {
        return !(Number(patronymic) && !isNaN(Number(patronymic)))
    }

    private static isValidStudentAge(age: number): boolean {
        return Number.isInteger(age)
    }

    private isValidSetAge(age: number) {
        return this.age < age
    }
}

export {
    Student,
}