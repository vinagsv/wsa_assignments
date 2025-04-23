function Person(firstName, age, phoneNumber) {
  this.firstName = firstName;
  this.age = age;
  this.phoneNumber = phoneNumber;
}

Person.prototype.lastName = "A H";

function createPerson() {
  let firstName = document.getElementById("firstName").value;
  let age = document.getElementById("age").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  let person = new Person(firstName, age, phoneNumber);

  let details = `
        First Name: ${person.firstName}<br>
        Last Name: ${person.lastName}<br>
        Age: ${person.age}<br>
        Phone Number: ${person.phoneNumber}
    `;

  document.getElementById("details").innerHTML = details;
}
