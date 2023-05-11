
interface IPerson {
    firstName: string
    lastName: string
    middleName: string
    address: string
}

interface IStudent extends IPerson {
    schoolName: string
    classNumber: string
    universityName: string
    studentTicketNumber: string
}

interface ITeacher extends IPerson {
    subjectName: string
}

interface IWorker extends IPerson {
    specialty: string
}

interface IPhDStudent extends IStudent {
    dissertationTopic: string
}

class CPersonImpl<T extends IPerson> implements IPerson {
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

class CStudentImpl<T extends IStudent> extends CPersonImpl<T> implements IStudent {
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

class CTeacherImpl<T extends ITeacher> extends CPersonImpl<T> implements ITeacher {
    public subjectName: string

    constructor(data: T) {
        super(data)
        this.subjectName = data.subjectName
    }
}

class CWorkerImpl<T extends IWorker> extends CPersonImpl<T> implements IWorker {
    public specialty: string

    constructor(data: T) {
        super(data)
        this.specialty = data.specialty
    }
}

class CPhDStudentImpl<T extends IPhDStudent> extends CStudentImpl<T> implements IPhDStudent {
    public dissertationTopic: string

    constructor(data: T) {
        super(data)
        this.dissertationTopic = data.dissertationTopic
    }
}
