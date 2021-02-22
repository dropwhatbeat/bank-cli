const func = require('./functions/index');

let exit = false;

const runPrompt = () => {
    while (!exit) {
        let input = func.prompt('>');
        c_list = func.splitCommand(input);
        mode = c_list[0];
        value1 = c_list[1];
        value2 = c_list[2];
    
        if (mode == 'login') {
            func.loginClient (value1);
        } else if (mode == 'topup') {
            func.topupClient (Number(value1));
            console.log (db, owe)
        } else if (mode == 'pay') {
            func.payClient (value1, Number(value2));
            console.log (db, owe)
        } else if (mode == 'exit') {
            exit = true
        }
    }
}

runPrompt.call()
module.exports.runPrompt = runPrompt;
