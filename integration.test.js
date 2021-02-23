const func = require('./functions/index');

db = {Alice:0, Bob: 0}
owe = {Alice:{}, Bob:{}}
current = ''

 testfunction = (input) => {
    c_list = func.splitCommand(input);
    mode = c_list[0];
    value1 = c_list[1];
    value2 = c_list[2];
    
    if (mode == 'login') {
        func.loginClient (value1);
    } else if (mode == 'topup') {
        func.topupClient (Number(value1));
    } else if (mode == 'pay') {
        func.payClient (value1, Number(value2));
    } else if (mode == 'exit') {
        exit = true
    }
}

test('login as Alice', () => {
    console.log = jest.fn()
    testfunction('login Alice')
    expect(console.log).toHaveBeenCalledWith("Hello, Alice")
    expect(console.log).toHaveBeenCalledWith("Your balance is 0.")
})

test('topup 100', () => {
    console.log = jest.fn()
    testfunction('topup 100')
    expect(console.log).toHaveBeenCalledWith("Your balance is 100.")
})

test('pay Bob 50', () => {
    console.log = jest.fn()
    testfunction('pay Bob 50')
    expect(console.log).toHaveBeenCalledWith("Transferred 50 to Bob")
})