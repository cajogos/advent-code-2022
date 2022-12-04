const fs = require('fs');
const path = require('path');

class Utils
{
    static getInput(fileName = 'input.txt')
    {
        return fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    }
}


module.exports = Utils;