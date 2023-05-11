import readline from 'readline'
import {stdin as input, stdout as output} from 'process'
import {TVController} from './TVController'
import {TV} from './TV'

const tv: TV = new TV()
const tvController: TVController = new TVController(tv)

function main(): void {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.on('line', (command: string) => {
        console.log(tvController.executeCommand(command))
    })
}

main()