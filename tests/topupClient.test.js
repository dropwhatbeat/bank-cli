const functions = require('../functions/topupClient');

test('current balance should increase by topup amount', () => {
    db = {Alice: 0, Bob:0}; 
    owe = {Alice:{Bob:0}, Bob: {Alice:0}};
    current = 'Alice'
    expect(functions.topupClient(20)).toEqual(
        [{Alice: 20, Bob:0}, {Alice:{Bob:0}, Bob: {Alice:0}}]
    )
})

test('reduce in amount owed', () => {
    db = {Alice: 0, Bob: 0}; 
    owe = {Alice:{Bob:20}, Bob:{Alice:-20}};
    current = 'Alice'
    expect(functions.topupClient(20)).toEqual(
        [{Alice: 0, Bob:20}, {Alice:{Bob:0}, Bob: {Alice:0}}]
    )
})