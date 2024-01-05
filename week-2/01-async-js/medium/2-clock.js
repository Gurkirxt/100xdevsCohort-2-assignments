function log_date_24hrs() {
  const date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  console.log(
    hours.toString() + " : " + mins.toString() + " : " + secs.toString()
  );
}
function log_date_12hrs() {
  const date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let AM_PM = "AM";
  if (hours >= 12) {
    AM_PM = "PM";
    hours = hours % 12;
  }
  console.log(
    hours.toString() +
      " : " +
      mins.toString() +
      " : " +
      secs.toString() +
      " " +
      AM_PM
  );
}

// setInterval(log_date_24hrs, 1000);
setInterval(log_date_12hrs, 1000);
