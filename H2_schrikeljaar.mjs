import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let jaar = parseFloat(await userInput.question('Geef een jaartal in : '));

if( jaar % 4 == 0 && jaar % 100 != 0 || jaar % 400 == 0){
    console.log('februari heeft dit jaar 29 dagen.')
}else{
    console.log('februrari heeft 28 dagen.')
}

process.exit()