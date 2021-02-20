const functions = require('./loginClient');

test('login Alice', () => {
    expect(functions.loginClient('Alice')).toEqual('Alice')
})