const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db = require('../database/mysql');

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/api/cows', (req, res) => {
  db.get((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
      // console.log(res);
    }
  });
})

app.post('/api/cows', (req, res) => {
  db.post(req.body, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
      // console.log(res);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    // readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
    //   if(choice==='mongo') {
    //     console.log('Your db is Mongo');
    //     db = require('../database/mongo');
    //   } else if(choice === 'mysql') {
    //     console.log('Your db is mysql');
    //     db = require('../database/mysql');
    //   } else {
    //     console.log('Stop node, restart and try again, valid options are mysql and mongo')
    //   }
    // })

});
