"use strict"

var add = document.getElementById("add")
var removeLast = document.getElementById("remove-last")
var removeFirst = document.getElementById("remove-first")
var inputName = document.getElementById("input-1")
var inputSurname = document.getElementById("input-2")
var inputAge = document.getElementById("input-3")




function addRow() {
   if(inputName.value && inputSurname.value && inputAge.value >= 1 && !isNaN(inputAge.value)) {
      var input = document.getElementsByClassName("input")
      var table = document.getElementById("tableBody");
      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);
      var c1 = row.insertCell(0);
      var c2 = row.insertCell(1);
      var c3 = row.insertCell(2);
      c1.innerText = inputName.value
      c2.innerText = inputSurname.value
      c3.innerText = inputAge.value
      inputName.value = ""
      inputSurname.value = ""
      inputAge.value = ""
   } else {
      alert("Yra Tuščių Laukelių Arba Amžius Buvo Ivęstas neteisingai!!")
   }
    
 }

 add.addEventListener("click", addRow )
 
    






 removeFirst.addEventListener("click", removeRow)
removeLast.addEventListener("click", removeRowLast)



 function removeRow() {
    document.getElementById("tableBody").deleteRow(0);
  }
 function removeRowLast() {
    document.getElementById("tableBody").deleteRow(-1);
  }

  
