// Displays current day at the header
var currentDay = moment().format("dddd, MMMM D, YYYY");
$("#currentDay").text(currentDay);

// Current hour in military time
var currentHour = moment().hour();
console.log(currentHour);

// Work day hours in military time to compare to currentHour variable
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(hours);

// Hours to display on scheduler time blocks
var showHours = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];

// Container for work day scheduler elements
var container = $(".time-block");

// Variables for all save buttons
var allSaveBtn = document.getElementsByTagName("button");

// For loop for each time block
for (var i = 0; i < hours.length; i++) {
  console.log(hours[i]);

  // Creates schedule elements for each time block
  var divRow = document.createElement("div");
  var hour = document.createElement("p");
  var textArea = document.createElement("textarea");
  var saveBtn = document.createElement("button");
  var iButton = document.createElement("i");

  // Sets classes and IDs for rows, hours, text area, save buttons
  divRow.setAttribute("class", "row");
  divRow.setAttribute("id", "row-" + (i + 9));
  hour.setAttribute("class", "hour col-2");
  hour.setAttribute("id", "hour-" + (i + 9));
  textArea.setAttribute("class", " textarea col-8");
  textArea.setAttribute("id", "textarea-" + (i + 9));
  saveBtn.setAttribute("class", "saveBtn col-2");
  saveBtn.setAttribute("id", "saveBtn-" + (i + 9));
  iButton.setAttribute("class", "fa fa-save");

  // Displays hours in AM/PM format
  hour.textContent = showHours[i];

  // Appends rows, hours, text areas, save buttons to parent elements.
  container.append(divRow);
  divRow.append(hour);
  divRow.append(textArea);
  divRow.append(saveBtn);
  saveBtn.append(iButton);

  // Changes the color of each text area depending on the current time
  // Current time displays as red
  if (currentHour === hours[i]) {
    textArea.classList.add("present");

    // Future times displays as green
  } else if (currentHour < hours[i]) {
    textArea.classList.add("future");

    // Past times displays as gray
  } else if (currentHour > hours[i]) {
    textArea.classList.add("past");
  }
}

// Variables for each time block text area
var textArea9 = document.getElementById("textarea-9");
var textArea10 = document.getElementById("textarea-10");
var textArea11 = document.getElementById("textarea-11");
var textArea12 = document.getElementById("textarea-12");
var textArea13 = document.getElementById("textarea-13");
var textArea14 = document.getElementById("textarea-14");
var textArea15 = document.getElementById("textarea-15");
var textArea16 = document.getElementById("textarea-16");
var textArea17 = document.getElementById("textarea-17");

// Every time the save button is clicked, the text input is saved to local storage
for (var i = 0; i < hours.length; i++) {
  allSaveBtn[i].addEventListener("click", function () {
    localStorage.setItem("9am", textArea9.value);
    localStorage.setItem("10am", textArea10.value);
    localStorage.setItem("11am", textArea11.value);
    localStorage.setItem("12pm", textArea12.value);
    localStorage.setItem("1pm", textArea13.value);
    localStorage.setItem("2pm", textArea14.value);
    localStorage.setItem("3pm", textArea15.value);
    localStorage.setItem("4pm", textArea16.value);
    localStorage.setItem("5pm", textArea17.value);
  });
}

// Displays saved local storage input on each text area
textArea9.value = localStorage.getItem("9am");
textArea10.value = localStorage.getItem("10am");
textArea11.value = localStorage.getItem("11am");
textArea12.value = localStorage.getItem("12pm");
textArea13.value = localStorage.getItem("1pm");
textArea14.value = localStorage.getItem("2pm");
textArea15.value = localStorage.getItem("3pm");
textArea16.value = localStorage.getItem("4pm");
textArea17.value = localStorage.getItem("5pm");
