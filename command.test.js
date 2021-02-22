const {consoleLog} = require('./command')

test ('login as Alice', () => {
    db = {Alice: 20, Bob: 40}; 
    owe = {Alice:{}, Bob:{}};
    expect (consoleLog.runPrompt('login Alice')).toBe('Hello, Alice <br> Your balance is 20.')
})