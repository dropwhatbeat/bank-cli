const functions = require('../functions/topupClient');

test('current balance should increase by topup amount', () => {
    db = {Alice: 0, Bob:0}; 
    owe = {Alice:{}, Bob: {}};
    current = 'Alice'
    expect(functions.topupClient(20)).toEqual(
        [{Alice: 20, Bob:0}, {Alice:{}, Bob: {}}]
    )
})

test('reduce in amount owed', () => {
    db = {Alice: 0, Bob: 0}; 
    owe = {Alice:{Bob:20}, Bob:{Alice:-20}};
    current = 'Alice'
    expect(functions.topupClient(10)).toEqual(
        [{Alice: 0, Bob:10}, {Alice:{Bob:10}, Bob: {Alice:-10}}]
    )
})

test('clear debt', () => {
    db = {Alice: 0, Bob: 0}; 
    owe = {Alice:{Bob:20}, Bob:{Alice:-20}};
    current = 'Alice'
    expect(functions.topupClient(50)).toEqual(
        [{Alice: 30, Bob:20}, {Alice:{}, Bob: {}}]
    )
})