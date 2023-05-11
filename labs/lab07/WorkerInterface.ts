import {PersonInterface} from './PersonInterface'

interface WorkerInterface extends PersonInterface {
    specialty: string
}

export {
    WorkerInterface,
}