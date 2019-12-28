// date converter
let talkingCalendar = function(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  dateParts = date.split("/");
  let ordinalText = "";
  let day = dateParts[2];
  if (day < 10) { // get rid of leading zero
    day = day[1];
  }
  const dateOrdinal = day % 10;
  if (dateOrdinal % 10 === 1) {
    ordinalText = "st";
  } else if (dateOrdinal === 2) {
    ordinalText = "nd";
  } else if (dateOrdinal === 3) {
    ordinalText = "rd";
  } else {
    ordinalText = "th";
  }
  if (day == 11 || day == 12 || day == 13) { // take care of special dates
    ordinalText = "th";
  }
  return months[dateParts[1] - 1] + " " + day + ordinalText + ", " + dateParts[0];
};

// test above function
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));