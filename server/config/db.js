const Pool = require('pg').Pool

// const pool = new Pool({
//     user:'postgres',
//     password:"13252",
//     host:'localhost',
//     port:5432,
//     database:'perntodo',
// })

const pool = new Pool({
    user: 'qbaqmmad', 
    host: 'cornelius.db.elephantsql.com', 
    database: 'qbaqmmad', 
    password: 'fY5I9t1U3h6RrIr7gw9_ERlw4z5r1gP9', 
    port: 5432, 
    ssl: {
      rejectUnauthorized: false, // For testing; use true in production with proper certificates
    },
  });

module.exports = pool