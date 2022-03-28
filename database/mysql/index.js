const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

module.exports = connection;





// Don't forget to export your functions!
module.exports = {
  get: function(cb) {
    connection.query("SELECT * FROM cows", (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    })
  },

  post: function(values, cb) {
    let queryString = "INSERT INTO cows (cowName, cowDescription) VALUES (? , ?)";
    let queryArgs = [values.cowName, values.cowDescription];
    connection.query(queryString, queryArgs, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    })
  }

};
