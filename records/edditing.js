let clientname = document.querySelector(".name2");
let phoneN = document.querySelector(".phone-no2");
let meterN = document.querySelector(".meter-no2");
let initialN = document.querySelector(".initial-reading2");
let finalN = document.querySelector(".final-reading2");
let units = document.querySelector(".unit-cost2");
let submitB = document.querySelector("#submit-btn2");
const backbtn = document.querySelector(".back");
let paidA = document.querySelector(".paid");

// let TheId = JSON.stringify(Myuserid);
// console.log(TheId);

function getUser() {
  let TheId = localStorage.getItem("myid");
  //   let TheId = JSON.stringify(Myuserid);
  //   console.log(TheId);
  fetch("http://localhost:3320/user/" + TheId)
    .then((resp) => resp.json())
    .then((records) => {
      console.log(records);
      records.forEach((record) => {
        clientname.value = record.name;
        phoneN.value = record.contact;
        meterN.value = record.meterNumber;
        initialN.value = record.initialUnits;
        finalN.value = record.finalUnits;
        units.value = record.unitCost;
        paid.value = record.paid;
      });
    });
}

getUser();

backbtn.addEventListener("click", () => {
  history.back();
});
