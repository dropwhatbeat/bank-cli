const functions = require('../functions/splitCommand');

test('split command into list of strings', () => {
    expect(functions.splitCommand('login Alice')).toEqual(['login', 'Alice'])
})