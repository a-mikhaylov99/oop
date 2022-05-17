import readline from 'readline'
import {stdin as input, stdout as output} from 'process'
import {TV} from './TV'
import {TVController} from './TVController'

const tv = new TV()
const tvController = new TVController()

function main() {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.on('line', (command: string) => {
        tvController.turnOnTV(tv, command)
        // tvController.turnOffTV(tv, command)
        tvController.tvGetInfo(tv, command)
    })
}

main()