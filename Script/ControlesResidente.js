var residents = [];
var inputValue = "";
var residentIdEdit = null

function cleanModal() {
  //limpando os valores do modal
  document.querySelector("#recipient-name").value = "";
  document.querySelector("#recipient-data").value = "";
  document.querySelector("#recipient-cpf").value = "";
  document.querySelector("#recipient-bloco").value = "";
  document.querySelector("#recipient-ap").value = "";

  // limpando as bordas vermelhas do modal
  document.querySelector("#recipient-name").style.borderColor = "";
  document.querySelector("#recipient-data").style.borderColor = "";
  document.querySelector("#recipient-cpf").style.borderColor = "";
  document.querySelector("#recipient-bloco").style.borderColor = "";
  document.querySelector("#recipient-ap").style.borderColor = "";
}

function closeModal() {
  // fechando o modal
  const modalElement = document.getElementById("residentModal");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
  cleanModal();
}

function sendData() {
  if (isValid()) {
    var resident = {
      name: document.querySelector("#recipient-name").value,
      dateOfBirth: document.querySelector("#recipient-data").value,
      cpf: document.querySelector("#recipient-cpf").value,
      block: Number(document.querySelector("#recipient-bloco").value),
      apartament: Number(document.querySelector("#recipient-ap").value),
    };
    console.log(resident);
    postResident(resident);
    setTimeout(function () {
      getResidents();
    }, 100);

    closeModal();
  }
}

function isValid() {
  var valid = true;

  if (document.querySelector("#recipient-name").value == "") {
    valid = false;
    document.querySelector("#recipient-name").style.borderColor = "red";
  } else {
    document.querySelector("#recipient-name").style.borderColor = "";
  }

  if (document.querySelector("#recipient-cpf").value == "") {
    valid = false;
    document.querySelector("#recipient-cpf").style.borderColor = "red";
  } else {
    document.querySelector("#recipient-cpf").style.borderColor = "";
  }

  if (document.querySelector("#recipient-ap").value == "") {
    valid = false;
    document.querySelector("#recipient-ap").style.borderColor = "red";
  } else {
    document.querySelector("#recipient-ap").style.borderColor = "";
  }

  if (document.querySelector("#recipient-bloco").value == "") {
    valid = false;
    document.querySelector("#recipient-bloco").style.borderColor = "red";
  } else {
    document.querySelector("#recipient-bloco").style.borderColor = "";
  }

  if (document.querySelector("#recipient-data").value == "") {
    valid = false;
    document.querySelector("#recipient-data").style.borderColor = "red";
  } else {
    document.querySelector("#recipient-data").style.borderColor = "";
  }
  return valid;
}

function validCPF() {
  // validacao cpf
}

function creatTable(listResidents) {
  var tr = "";
  

  for (var count = 0; listResidents.length > count; count++) {
    tr += `

        <tr class="trHover" > 
            <td> ${listResidents[count].name} </td>
            <td> ${listResidents[count].dateOfBirth} </td>
            <td> ${listResidents[count].cpf} </td>
            <td> ${listResidents[count].block} </td>
            <td> ${listResidents[count].apartament} </td>
            <td class="ButtonEdits"><button class="buttonedit" onclick="editRecidents(${listResidents[count].id})"></button>
           <button class="Buttoninfo" onclick="infoRecidents(${listResidents[count].id})"></button></td>
        </tr>
        `;
  }

  document.querySelector(".tbody").innerHTML = tr;
}

function getResidents() {
  $.ajax({
    url: "https://localhost:7213/Residenties/GetAllResidenties",
    type: "GET",
    success: function (response) {
      residents = response;
      creatTable(response);

      console.log(response);
    },
    error: function (xhr, status, error) { },
  });
}

function postResident(resident) {
  $.ajax({
    url: "https://localhost:7213/Residenties/AddResidenties",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(resident),

    success: function (response) { },
    error: function (xhr, status, error) { },
  });
}





function confirmDeleteMensagem() {
  p = "";
  var opcoesResidentEdit = residents.find((r) => r.id == residentIdEdit);
  p += `<p> Tem certeza que deseja excluir ${opcoesResidentEdit.name}</p>`.toUpperCase();
  console.log(residentIdEdit);
  document.querySelector(".DeleteResidentMessage").innerHTML = p;
}



//function deleteUser(delUserId){

//  $.ajax({
//     url: "https://localhost:7213/Residenties/AddResidenties"+="delUserId",
//    type: "DELETE",
//     success: function (response) {},
//      error: function (xhr, status, error) {},
//     });
///   //'https://localhost:7213/Residenties/DeleteResidentieById?id='+PARAMETRO
//};

function deleteResident() {
  $.ajax({
    url: "https://localhost:7213/Residenties/DeleteResidentieById?id=" + residentIdEdit,
    type: "DELETE",
    contentType: "application/json",
    data: JSON.stringify(),
    success: function (response) {
      setTimeout(function () {
        getResidents();
      }, 100);
      closeModaldelete()
    },
    error: function (xhr, status, error) { },
  });
}
function updateResidents(residentUpdate) {
  $.ajax({
    url: "https://localhost:7213/Residenties/UpdateResidentie",
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(residentUpdate),

    success: function (response) {
      setTimeout(function () {
        getResidents();
      }, 100);
      closeModalUpdate();

    },
    error: function (xhr, status, error) { },
  });
}

function CreatUpdateResidents() {
  var residentUpdate = {
    id: residentIdEdit,
    name: document.querySelector("#editRecipientName").value,
    dateOfBirth: document.querySelector("#editRecipientData").value,
    cpf: document.querySelector("#editRecipientCPF").value,
    block: Number(document.querySelector("#editRecipientBloco").value),
    apartament: Number(document.querySelector("#editRecipientAP").value),
  };
  updateResidents(residentUpdate);
}

function editRecidents(residentId) {
  // fechando o modal
  // console.log("clear")
  // const modalElement = document.getElementById('editResidentModal');
  // const modalInstance = bootstrap.Modal.getInstance(modalElement);
  // if (modalInstance) {
  // modalInstance.show();
  // }
  residentIdEdit = residentId
  var opcoesResidentEdit = residents.find((r) => r.id == residentId);


  $("#editResidentModal").modal("show");
  document.querySelector("#editRecipientName").value = opcoesResidentEdit.name;
  document.querySelector("#editRecipientData").value = opcoesResidentEdit.dateOfBirth;
  document.querySelector("#editRecipientCPF").value = opcoesResidentEdit.cpf;
  document.querySelector("#editRecipientBloco").value = opcoesResidentEdit.block;
  document.querySelector("#editRecipientAP").value = opcoesResidentEdit.apartament;
}

function closeModalUpdate() {
  // fechando o modal
  const modalElement = document.getElementById("editResidentModal");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}

function closeModaldelete() {
  // fechando o modal
  const modalElement = document.getElementById("staticBackdrop");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}






function creatSelect() {
  var option = ''

  var options = [{
    AutomakersId: 0,
    Name: ''
  },
  {
    AutomakersId: 1,
    Name: "FORD"
  },
  {
    AutomakersId: 2,
    Name: "FIAT"
  },
  {
    AutomakersId: 3,
    Name: "VVV"
  },
  {
    AutomakersId: 4,
    Name: "YYY"
  },
  ]
  for (var count = 0; options.length > count; count++) {
    option +=
      `
        <option onclick="notClick()" id="${options[count].AutomakersId}">
            ${options[count].Name}
        </option>
      `
  }
  document.querySelector("#optionSelect").innerHTML = option;
};

function infoRecidents(residentId) {
  console.log("info resicidentes")
  $("#modalInfoResidente").modal("show");
  
}



$("#fname").on("keyup", function () {
    var searchValue = $(this).val().toLowerCase();
    $("#tableResidents tr") .each(function (){
      var text = $(this).find("td:first").text().toLowerCase();
      $(this).toggle(text.includes(searchValue)); 
    })
});