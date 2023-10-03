INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Electives");

INSERT INTO role (title, salary, department_id)
VALUES ("Intro to JavaScript", 50000.00, 1),
       ("Data Science",100000.00, 2),
       ("Linear Algebra",105000.00, 3),
       ("History of the Internet",110000.00, 4),
       ("Machine Learning",200000.00, 4),
       ("Game Design", 150000.00, 1 ),
       ("Cloud Development",160000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", null, 1),
       ("Paul","Smith", null, null);


       