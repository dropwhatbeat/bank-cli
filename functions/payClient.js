const status = require('../status');

db = status.db;
owe = status.owe;
current = status.current;

function payClient(user, amount) {
    if (user in owe[current] == true){
        if (amount < owe[user][current]){
            owe[current][user] += amount;
            owe[user][current] -= amount;
            console.log('Transferred ' + amount + ' to ' + user)
            console.log('Owing ' + owe[user][current] + ' from ' + user)
        } else {
            db[current] -=amount-owe[user][current];
            db[user] +=amount-owe[user][current];
            delete owe[current][user];
            delete owe[user][current];
            console.log(delete owe[current].user)
            console.log('Transferred ' + owe[user][current] + ' to ' + user)
        }
    } else {
        if (db[current] >= amount) {
            db[current] -=amount;
            db[user] += amount;
            console.log('Transferred ' + amount + ' to ' + user)
        } else {
            diff = amount - db[current]
            db[user] += db[current];
            db[current] -= db[current];
            var obj = {[`${user}`]: diff}
            var obj1 = {[`${current}`]: -diff}
            Object.assign(owe[current], obj)
            Object.assign(owe[user], obj1)
            console.log('Transferred ' + db[current] + ' to ' + user)
            console.log('Owing ' + owe[current][user] + ' to ' + user)
        }
    }
    console.log('Your balance is ' + db[current] + '.')
    return [db, owe]
};

module.exports.payClient = payClient;