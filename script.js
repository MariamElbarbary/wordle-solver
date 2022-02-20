import { readFile } from 'fs';


function readTextFile() {
    readFile('five-lettere-words.txt', 'utf-8', (err, data) => {
        if (err) throw err;

        console.log(data);
    })

}
