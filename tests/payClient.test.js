const functions = require('../functions/payClient');

test('decrease in current user, increase in paid user', () => {
    db = {Alice: 20, Bob: 40}; 
    owe = {Alice:{}, Bob:{}};
    current = 'Alice'
    expectedOutput = [{Alice: 10, Bob: 50},owe]
    expect(functions.payClient('Bob',10)).toEqual(
        expectedOutput
    )
})

test('insufficient balance, result in increase in owed amount', () => {
    db = {Alice: 20, Bob: 40}; 
    owe = {Alice:{}, Bob:{}};
    current = 'Alice'
    expectedOutput = [{Alice: 0, Bob: 60},{Alice:{Bob:20}, Bob:{Alice:-20}}]
    expect(functions.payClient('Bob',40)).toEqual(
        expectedOutput
    )
})

test('reduce in owed amount', () => {
    db = {Alice: 20, Bob: 0}; 
    owe = {Alice:{Bob:-50}, Bob:{Alice:50}};
    current = 'Alice'
    expectedOutput = [{Alice: 20, Bob: 0},{Alice:{Bob:-10}, Bob:{Alice:10}}]
    expect(functions.payClient('Bob',40)).toEqual(
        expectedOutput
    )
})