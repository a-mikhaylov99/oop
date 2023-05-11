import {StudentInterface} from './StudentInterface'
import {CPersonImpl} from './Person'

class CStudentImpl<T extends StudentInterface> extends CPersonImpl<T> implements StudentInterface {
    public schoolName: string
    public classNumber: string
    public universityName: string
    public studentTicketNumber: string

    constructor(data: T) {
        super(data)
        this.schoolName = data.schoolName
        this.classNumber = data.classNumber
        this.universityName = data.universityName
        this.studentTicketNumber = data.studentTicketNumber
    }
}

export {
    CStudentImpl,
}