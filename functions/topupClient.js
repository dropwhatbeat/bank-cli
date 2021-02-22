const status = require('../status');

db = status.db;
owe = status.owe;
current = status.current;

function topupClient (value) {
    v = value
    for (user in owe[current]) {
        if (owe[current][user] > 0) {
            if (v >= owe[current][user]) {
                console.log('Transferred ' + owe[current][user] + ' to ' + user)
                db[user] += owe[current][user]
                v -= owe[current][user]
                console.log(owe)
                delete owe[current][user];
                delete owe[user][current];
             } else {
                 db[user] += v
                 console.log('Transferred ' + v + ' to ' + user)
                 owe[current][user] -= v
                 owe[user][current] += v
                 console.log('Owing ' + owe[current][user] + ' to ' + user)
                 v -= v
              }
        }
    }
    db[current] +=v
    console.log('Your balance is ' + db[current] + '.')
    return [db, owe];
};

module.exports.topupClient = topupClient;