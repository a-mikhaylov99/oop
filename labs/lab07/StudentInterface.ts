import {PersonInterface} from './PersonInterface'

interface StudentInterface extends PersonInterface {
    schoolName: string
    classNumber: string
    universityName: string
    studentTicketNumber: string
}

export {
    StudentInterface,
}