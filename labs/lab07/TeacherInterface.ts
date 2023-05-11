import {PersonInterface} from './PersonInterface'

interface TeacherInterface extends PersonInterface {
    subjectName: string
}

export {
    TeacherInterface,
}