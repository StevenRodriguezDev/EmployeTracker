const mysql = require("mysql2");
const inquirer = require("inquirer");
const util = require("util");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "jordan23",
    database: "employee_db",
  },
  console.log(`Connected`)
);

const query = util.promisify(db.query).bind(db);

const initialQuestion = [
  {
    type: "list",
    message: "Please choose one.",
    name: "initialUserAction",
    choices: [
      "View Departments",
      "View Roles",
      "View Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee",
      "Quit",
    ],
  },
];

const init = async () => {
  const { initialUserAction } = await inquirer.prompt(initialQuestion);
  switch (initialUserAction) {
    case "view departments":
    viewDepartment();
    break;
    case "View roles.":
      viewAllRole();
      break;
    case "View employees.":
      viewAllEmployees();
      break;
    case "Add a department.":
      addADepartment();
      break;
    case "Add a role.":
      addARole();
      break;
    case "Add an employee.":
      addAEmployee();
      break;
    case "Update an employee role.":
      updateEmployeeRole();
      break;
    case "Quit.":
      quit();
      break;
    default:
  }
  return;
}


//   db.promise().query('SELECT * FROM employee')
//   .then(([results]) => {
//     console.table(results)
//   })

// db.promise()
//   .query("SELECT * FROM role")
//   .then(([results]) => {
//     console.table(results);
//   });

// const roleVal = {
//     title: "Human Resource",
//     salary: 55000.00,
//     department_id: 1
// };

// db.promise().query("INSERT INTO role SET ?", roleVal)
// .then(([role]) => {
//     console.table(role);
// })
