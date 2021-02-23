// object to hold current balance
let  db = {
    Alice: 0,
    Bob: 0};

// object to hold current 
let owe = {
    Alice: {},
    Bob: {}
};

// logged in user
let current = " ";

module.exports = {db, owe, current};