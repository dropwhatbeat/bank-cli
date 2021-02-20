const prompt = require('./prompt');

test('login as Alice', () => {
    expect(prompt.loginClient(Alice)).toBe(Alice)
}
)