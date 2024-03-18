// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects


  // let employeesArray = [];
  // do{

  // let employeeinfo = {
  //   firstName: prompt("Please enter first name."),
  //   lastName: prompt("Please enter last name."),
  //   salary: prompt("Please enter Salary.")
  // };

  // employeesArray.push(employeeinfo)

  // } while(confirm("Do you want to add another employee?"))

  // above is a do while loop while below is a while loop 
     


  let employeesArray = [];



  while (true) {
    let employeeinfo = {
      firstName: prompt("Please enter employee First Name."),
      lastName: prompt("Please enter employee Last Name."),
      salary: parseFloat(prompt("Please enter employee Salary.")),
    };
    employeeinfo.salary = parseFloat(employeeinfo.salary)|| 0;


    
    while(isNaN(employeeinfo.salary) || employeeinfo.salary <= 0) {
      employeeinfo.salary = parseFloat(prompt("Please enter a valid salary."))
    }

      
    
    employeesArray.push(employeeinfo)

    yesOrNO = prompt(" Do you want to add another employee? ('yes' or 'no')").toLowerCase();
    if (yesOrNO === "no") {
      break
    }
  

  }

  console.log(employeesArray);

  return employeesArray;
};






// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
