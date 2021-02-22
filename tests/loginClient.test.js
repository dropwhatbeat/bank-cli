const functions = require('../functions/loginClient');

test('return current logged in user', () => {
    db = {Alice:0, Bob: 0}
    owe = {Alice:{}, Bob:{}}
    current = ''
    expect(functions.loginClient('Alice')).toEqual(['Alice', db, owe])
})

test('create new user with 0 balance', () => {
    db = {Alice: 0, Bob: 0};
    owe = {Alice:{}, Bob:{}}
    current = ''
    expect(functions.loginClient('Charlie')).toEqual(['Charlie', {Alice:0, Bob:0, Charlie:0},{Alice:{}, Bob:{}, Charlie:{}} ])
})