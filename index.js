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


