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
      addDepartment();
      break;
    case "Add a role.":
      addRole();
      break;
    case "Add an employee.":
      addEmployee();
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
};

const viewDepartment = async () => {
  const result = await query("SELECT * FROM department");
  console.table(result);
  init();
};
const viewAllRole = async () => {
  const roleResult = await query("SELECT * FROM role");
  console.table(roleResult);
  init();
};
const viewAllEmployees = async () => {
  const employeeResult = await query(`SELECT e.id, CONCAT(e.first_name, " ", e.last_name) AS name, r.title, d.name AS department, CONCAT(e2.first_name, " ", e2.last_name) AS manager, r.salary
  FROM employee AS e
  JOIN role AS r 
  ON e.role_id = r.id
  LEFT JOIN employee AS e2
  ON e.manager_id = e2.id
  JOIN department AS d
  ON d.id = r.department_id
  ORDER BY e.id;`);

  console.table(employeeResult);
  init();
};


const addDepartment = async () => {
  const addDepartmentQuestion = [
    {
      type: "input",
      message: "Type in the name of the new department.",
      name: "name",
    },
  ];
  const { name } = await inquirer.prompt(addDepartmentQuestion);
  await query("INSERT INTO department (name) VALUES(?)", [name]);
  viewDepartment();
};


const addDepartment = async () => {
  const addDepartmentQuestion = [
    {
      type: "input",
      message: "Type in the name of the new department.",
      name: "name",
    },
  ];
  const { name } = await inquirer.prompt(addDepartmentQuestion);
  await query("INSERT INTO department (name) VALUES(?)", [name]);
  viewDepartment();
};


const addDepartment = async () => {
  const addDepartmentQuestion = [
    {
      type: "input",
      message: "Type in the name of the new department.",
      name: "name",
    },
  ];
  const { name } = await inquirer.prompt(addDepartmentQuestion);
  await query("INSERT INTO department (name) VALUES(?)", [name]);
  viewDepartment();
};

