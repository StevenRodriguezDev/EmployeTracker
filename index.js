const mysql = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "jordan23",
    database: "employee_db",
  },
  console.log(`Connected to the movies_db database.`)
);


//   db.promise().query('SELECT * FROM employee')
//   .then(([results]) => {
//     console.table(results)
//   })

db.promise()
  .query("SELECT * FROM role")
  .then(([results]) => {
    console.table(results);
  });

// const roleVal = {
//     title: "Human Resource",
//     salary: 55000.00,
//     department_id: 1
// };

// db.promise().query("INSERT INTO role SET ?", roleVal)
// .then(([role]) => {
//     console.table(role);
// })
