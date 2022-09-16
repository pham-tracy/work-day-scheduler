var currentDay = moment().format("dddd, MMMM do YYYY");

$("#currentDay").text(currentDay);

var currentHour = moment().format("ha");
console.log(currentHour);

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

var container = $(".time-block");

// User inputted events that will be saved to user storage
var events = [];

console.log(hours);

// Prints time to table rows with information

for (var i = 0; i < hours.length; i++) {
  //   console.log(hours[i]);

  var tableRow = document.createElement("tr");
  var hour = document.createElement("p");
  var textArea = document.createElement("textarea");
  var saveBtn = document.createElement("button");

  // Sets class and IDs for rows, hours, text area, save buttons
  tableRow.setAttribute("class", "row");
  tableRow.setAttribute("id", "row-" + (i + 9));
  hour.setAttribute("class", "hour col-2");
  hour.setAttribute("id", "hour-" + (i + 9));
  textArea.setAttribute("class", "textarea col-8");
  textArea.setAttribute("id", "textarea-" + (i + 9));
  saveBtn.setAttribute("class", "saveBtn col-2");
  saveBtn.setAttribute("id", "saveBtn-" + (i + 9));

  // Displays hours
  hour.textContent = hours[i];

  // Appends rows, hours, text area, save button to document
  container.append(tableRow);
  tableRow.append(hour);
  tableRow.append(textArea);
  tableRow.append(saveBtn);

  // Save button text

  saveBtn.textContent = "Save";

  //  saveBtn.addEventListener("click", addEvent);

  // If the current time is noww, change textArea to present class, which shows as red
  if (currentHour === hours[i]) {
    textArea.setAttribute("class", "textarea col-8 present");
  }
  //   console.log(currentHour);
  //   console.log(hours[i]);

  // If time is in the future, change textArea to future class, which shows as gray
  if (currentHour < hours[i]) {
    textArea.setAttribute("class", "textarea col-8 future");
    console.log(currentHour);
    console.log(hours[i]);
  }

  // If time is in the past, change textArea to past class, which shows as gray
  if (currentHour > hours[i]) {
    textArea.setAttribute("class", "textarea col-8 past");
    // console.log(hours[i]);
  }
}

var saveBtn9 = document.getElementById("saveBtn-9");
var textArea9 = document.getElementById("textarea-9");
function addEvent() {
  localStorage.setItem("event", textArea9.value);
}

saveBtn9.addEventListener("click", addEvent);
textArea9.textContent = localStorage.getItem("event");
