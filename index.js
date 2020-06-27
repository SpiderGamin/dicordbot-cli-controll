var stdin = process.openStdin();
require('colors')

var cmd = {
    help: {
        use: '[command]',
        desc: 'the help command'
    },
    send: {
        use: 'n',
        desc: 'nnn'
    }
}

var commands = [
    'help',
    'send'
]
var s = '>>> '.blue;
var l = '| '.green;
var p = '---------------\n'.cyan;

console.log(s+'Started')
stdin.addListener("data", function(d) {
    var a = d.toString().trim();
    var b = a.split(/ +/);
    var c = a.split('|')
    a = b[0];
    switch (a) {
        case 'help':
            if (!b[1]) {
                commands.forEach(cm => {
                    console.log(`${cm} ${cmd[cm].use || ' '} - ${cmd[cm].desc}`)
                })
                console.log(p + `Commands\n[ ] help [command] - display this message\nsend <message> | [channel] - send a message to discord server\nconfig <setting> [options] - configure the bot\nexit - stop the bot in a correct manner\ncredits - get the bots credits\n`+p)
            } else {
                if (b[1] === 'send') {
                    console.log(s+'\nsend command help\n')
                }
            }
            break;
        case 'send': 
            if (!b[1]) return console.log('No arguments were provided. Useage: <message> | [channel]')
            console.log(s+`Message sent to${c[1] || ' the log channel'}`)
            break;
        case 'exit':
            console.log(s + `Stopping`.brightBlue)
            return process.exit(0);
        default:
            console.log(`That is not a valid command, type ${'help'.brightYellow} for help.`.brightBlue)
    }
  });

/*
const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'idk',
    type: 'input'
}]).then((answers) => {
    if (answers.idk === 'idk ok') {
        inquirer.prompt([{
            name: 'okok',
            type: 'input'
        }]).then((answers) => {
            console.log(answers.okok + ' Then')
        })
    }
})

*/