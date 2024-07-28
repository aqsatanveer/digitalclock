window.addEventListener("DOMContentLoaded", () => {
  setInterval(displaytime, 1000);
});

function displaytime() {
  console.log("---------- START ------------");

  var d = new Date();

  var hour = d.getHours();
  console.log("line number 12  -------- : " + hour);

  var min = d.getMinutes();
  var sec = d.getSeconds();

  var amOrPm = "AM";

  if (hour >= 12);
  {
    amOrPm = "PM";
  }

  console.log("line number 29  -------- : " + hour);

  if (hour < 10) hour = "0" + hour;

  console.log("line number 33  -------- : " + hour);

  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  document.getElementById("clock").innerHTML =
    hour + ":" + min + ":" + sec + " " + amOrPm;
}
