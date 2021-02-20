
let  db = {
    Alice: 0,
    Bob: 0};

let owe = {
    Alice: {Bob: 0},
    Bob: {Alice: 0}
}

current = " ";

function loginClient (client) {
    if (db.hasOwnProperty(client)) {
        console.log(`Hello, ${client}`);
        console.log('Your balance is ' + db[client])
        for (user in owe[client]) {
            if (Math.sign(owe[client][user]) == 1) {
                console.log('Owing ' + owe[client][user] + ' to ' + user + '.')
            } else if (Math.sign(owe[client][user]) == -1) {
                console.log('Owing ' + -owe[client][user] + ' from ' + user + '.')
            }
        }
    } else {
        var obj = {[`${client}`]: 0}; //assuming new users are initalised with balance = 0
        var obj1 = {[`${client}`]: {}};
        Object.assign(db, obj);
        Object.assign(owe,obj1)
        console.log('Create a new user')
        console.log(`Hello, ${client}!`)
    }
    current = client
    return current
  }

module.exports.loginClient = loginClient;