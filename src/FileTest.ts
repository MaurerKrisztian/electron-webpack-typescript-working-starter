const fs = require('fs');
const path = require('path');

export class FileTest {

    createFile() {
        fs.writeFile('./testfile.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
}
