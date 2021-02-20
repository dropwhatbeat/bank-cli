
const prompt = require('prompt-sync')({sight:true});

let exit = false;

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

  function splitCommand (value) {
      var c_list = value.split(" ");
    //   console.log (c_list);
      return c_list
  }

  function topupClient (value) {
      v = value
      for (user in owe[current]) {
          if (owe[current][user] > 0) {
              if (v >= owe[current][user]) {
                  console.log('Transferred ' + owe[current][user] + ' to ' + user)
                  db[user] += owe[current][user]
                  v -= owe[current][user]
                  owe[current][user] = 0
                  owe[user][current] = 0
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
  }

  function payClient(user, amount) {
        if (db[current] >= amount) {
            if (owe[user][current]>0){
                owe[current][user] += amount;
                owe[user][current] -= amount;
                console.log('Owing ' + owe[user][current] + ' from ' + user)
            } else {
                db[current]-=amount;
                db[user]+=amount;
                console.log('Transferred ' + amount + ' to ' + user)
            } 
            console.log('Your balance is ' + db[current] + '.')
        } else {
            if (user in owe[current] == false){
                var obj = {[`${user}`]: 0}
                var obj1 = {[`${current}`]: 0}
                Object.assign(owe[current], obj)
                Object.assign(owe[user], obj1)
            } 
            db[user]+=db[current];
            console.log('Transferred ' + db[current] + ' to ' + user)
            var diff = amount - db[current]
            owe[current][user] += diff
            owe[user][current] -= diff
            db[current]-=db[current];
            console.log('Your balance is 0')
            console.log('Owing ' + owe[current][user] + ' to ' + user)
        }
  }

while (!exit) {
    let input = prompt('>');
    c_list = splitCommand(input);
    mode = c_list[0];
    value1 = c_list[1];
    value2 = c_list[2];

    if (mode == 'login') {
        loginClient (value1);
        console.log(db, owe)
    } else if (mode == 'topup') {
        topupClient (Number(value1));
        console.log(db, owe)
    } else if (mode == 'pay') {
        payClient (value1, Number(value2));
        console.log(db, owe)
    } else if (mode == 'exit') {
        exit = true
    }
}

module.exports.loginClient = loginClient;
module.exports.splitCommand = splitCommand;
module.exports.topupClient = topupClient;
module.exports.payClient = payClient;