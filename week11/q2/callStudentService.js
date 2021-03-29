var selectallbtn = document.querySelector("#selectall");
var selectbtn = document.querySelector("#select");
var updatebtn = document.querySelector("#update");
var deletebtn = document.getElementById("delete");
var addbtn = document.getElementById("add");
async function callStudentWS(url, method, sentData = {}) {
  let data;
  if (method == "selectall") {
    let response = await fetch(url, {
      method: "GET",
    });
    data = await response.json();
  } else if (method == "select") {
    let response = await fetch(url, {
      method: "GET",
    });
    data = await response.json();
  }else if(method == "update"){
    let response = await fetch(url, {
      method: "PUT",
      headers: {
         Accept: "application/json",
         "Content-type": "application/json"
      },
      body: JSON.stringify(sentData),
    });
    data =await response.json();
  }else if(method == "delete"){
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
         Accept: "application/json",
         "Content-type": "application/json"
      },
      body: JSON.stringify(sentData),
    });
    data =await response.json();
  }else if(method == "insert"){
    let response = await fetch(url, {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-type": "application/json"
      },
      body: JSON.stringify(sentData),
    });
    data =await response.json();
  }
  return data;
}
//serach all
selectallbtn.addEventListener("click", () => {
  var output = document.getElementById("resultSearchAll");
  var text = "";
  callStudentWS("http://localhost:3030/students", "selectall").then((data) => {
    console.log(data);
    if (data) {
      for (const x of data.data) {
        var sid = x.StudentID;
        var sf = x.Firstname;
        var sl = x.Lastname;
        var sb = x.Birthdate;
        var sm = x.MobilePhone;
        text += `Student Id ${sid} <ul><li>${sf} ${sl}</li><li>${sb}</li><li>${sm}</li></ul>`;
      }
      output.innerHTML = text;
    }
  });
});
//search by id
selectbtn.addEventListener("click", () => {
  var stuid = document.getElementById("stuid").value;
  var output = document.getElementById("resultSearchAll");
  var text = "";
  callStudentWS("http://localhost:3030/wstudents/" + stuid, "select").then(
    (data) => {
      console.log(data);
      if (data) {
        for (const x of data.data) {
          var sid = x.StudentID;
          var sf = x.Firstname;
          var sl = x.Lastname;
          var sb = x.Birthdate;
          var sm = x.MobilePhone;
          text += `Student Id ${sid} <ul><li>${sf} ${sl}</li><li>${sb}</li><li>${sm}</li></ul>`;
        }
        output.innerHTML = text;
      }
    }
  );
});
//update
updatebtn.addEventListener("click", () => {
  var stuid = document.getElementById("stuid").value;
  var stufname = document.getElementById("stufname").value;
  var stulname = document.getElementById("stulname").value;
  var stubdate = document.getElementById("stubdate").value;
  var stuphone = document.getElementById("stuphone").value;
  let student_data = {
    "StudentID": stuid,
    "Firstname": stufname,
    "Lastname": stulname,
    "Birthdate": stubdate,
    "MobilePhone": stuphone
  }
  var output = document.getElementById("resultSearchAll");
  callStudentWS("http://localhost:3030/updateStudent/", "update", student_data).then(
    (data) =>{
      console.log(data);
      if(data){
        output.innerHTML = "<h3>Student has been updated!</h3>";
      }
  });
});

deletebtn.addEventListener("click", () => {
  var stuid = document.getElementById("stuid").value;
  var output = document.getElementById("resultSearchAll");
  let student_data = {
    "StudentID": stuid,
  }
  callStudentWS("http://localhost:3030/deleteStudent/", "delete", student_data).then(
    (data) =>{
      if(data){
        console.log(data);
        output.innerHTML = "<h3>Student has been deleted!</h3>";
      }
  });
});

addbtn.addEventListener("click", () =>{
  var stuid = document.getElementById("stuid").value;
  var stufname = document.getElementById("stufname").value;
  var stulname = document.getElementById("stulname").value;
  var stubdate = document.getElementById("stubdate").value;
  var stuphone = document.getElementById("stuphone").value;
  let student_data = {
    "StudentID": stuid,
    "Firstname": stufname,
    "Lastname": stulname,
    "Birthdate": stubdate,
    "MobilePhone": stuphone
  }
  var output = document.getElementById("resultSearchAll");
  callStudentWS("http://localhost:3030/createStudent/", "insert", student_data).then(
    (data) =>{
      console.log(data);
      if(data){
        output.innerHTML = "<h3>New Student added!</h3>"
      }
  });
});