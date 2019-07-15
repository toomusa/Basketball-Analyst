const connection = require("../../config/connection.js");
var $ = require('jquery');
const cTable = require("console-table");
// FIREBASE AUTHENTICATION FUNCTIONS


// SELECT * FROM users;

// INSERT INTO users (user_token, user_name, email, table1) VALUES ('acbd', 'tommyW', 'binlin@gmail.com', '{objstringliteralynaut}');

// SELECT * FROM users WHERE user_token = 'acbd';


//PSUEDOCODE for login:
// verify user identity with login, grab user_token
// const userCheck = () => {
//   connection.query(`SELECT * FROM users WHERE user_token = ?`, user_token, function(err, data){
//   if (err) throw err;
//   console.log(data);
//       // if doesn't exist, bring player to search page, and run function (newUser();)
//       // if it exists, loop through table1-table 20 fields to determine how many tables they have
//       // res.render tables onto dashboard and redirect player to dashboard (existingUser(data);)
// }); 

// const newUser(data) {
//   connection.query(`INSERT INTO users (user_token, user_name, email) VALUES ?`, [userObj from login here], function(err, data){
//     console.log('user added!');
//     window.location.href = '/search'
//   })
// };

// const existingUser(data from userCheck) {
//   if (data.length>5) {          //for checking if there are tables at all
//   for(let i=4; i<data.length) {
//     // data[i] feed into dashboard with tabulator
//   }
//   // render dashboard page after all loaded
//   } else {
//     window.location.href = '/search'  //go to search page
//   }
// }

// test
// connection.query(`SELECT * FROM users WHERE ?`,{user_token: 'acbd'}, function(err, data){
//     if (err) throw err;
//     console.log(data);
//     console.log(`i'm hit`);
// });