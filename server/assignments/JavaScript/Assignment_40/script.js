function Doctor(docName, docExperience) {
  this.docName = docName;
  this.docExperience = docExperience;
}

function Nurse(nurseName, nurseExperience) {
  this.nurseName = nurseName;
  this.nurseExperience = nurseExperience;
}

Nurse.prototype = new Doctor();
Nurse.prototype.constructor = Nurse;
Nurse.prototype.patientName = "William";

function showDetails() {
  let docName = document.getElementById("docName").value;
  let docExperience = document.getElementById("docExperience").value;
  let nurseName = document.getElementById("nurseName").value;
  let nurseExperience = document.getElementById("nurseExperience").value;

  let nurse = new Nurse(nurseName, nurseExperience);
  nurse.docName = docName;
  nurse.docExperience = docExperience;

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <p><strong>Doctor's Name:</strong> ${nurse.docName}</p>
        <p><strong>Doctor's Experience:</strong> ${nurse.docExperience}</p>
        <p><strong>Nurse's Name:</strong> ${nurse.nurseName}</p>
        <p><strong>Nurse's Experience:</strong> ${nurse.nurseExperience}</p>
        <p><strong>Patient's Name:</strong> ${nurse.patientName}</p>
    `;
}
