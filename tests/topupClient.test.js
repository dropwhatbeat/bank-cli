const functions = require('../functions/topupClient');

test('login Alice', () => {
    expect(functions.splitCommand('login Alice')).toEqual(['login', 'Alice'])
})