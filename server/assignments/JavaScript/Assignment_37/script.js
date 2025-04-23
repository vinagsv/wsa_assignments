function createEmployee() {
  let name = document.getElementById("name").value;
  let empId = document.getElementById("empId").value;
  let empSalary = document.getElementById("empSalary").value;
  let deptName = document.getElementById("deptName").value;

  let employee = {
    name: name,
    empId: empId,
    empSalary: empSalary,
    deptName: deptName,
  };

  document.getElementById("output").innerHTML =
    "name: " +
    employee.name +
    "<br>" +
    "empId: " +
    employee.empId +
    "<br>" +
    "empSalary: " +
    employee.empSalary +
    "<br>" +
    "deptName: " +
    employee.deptName;

  let employeeLength = Object.keys(employee).length;
  document.getElementById("lengthOutput").innerHTML =
    "Length of the Employee object: " + employeeLength;

  delete employee.deptName;
  document.getElementById("output").innerHTML += "<br>deptName deleted";

  document.getElementById("output").innerHTML +=
    "<br><br>Updated Employee Details:<br>" +
    "name: " +
    employee.name +
    "<br>" +
    "empId: " +
    employee.empId +
    "<br>" +
    "empSalary: " +
    employee.empSalary;
}
