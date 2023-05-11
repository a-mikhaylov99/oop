import {StudentInterface} from './StudentInterface'

interface AdvancedStudentInterface extends StudentInterface {
    dissertationTopic: string
}

export {
    AdvancedStudentInterface,
}