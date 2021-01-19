// Calculate current age on page load

function ageCalc() {

  const dob = new Date("01/18/1992"); // MM/DD/YYYY format

  const now = new Date(); // get current date from system
  // document.write("Current Date: " + now);
  // document.write("<br />");

  const diff = Math.abs(now - dob ); // compute difference in milliseconds
  // document.write("Current Diff: " + diff);
  // document.write("<br />");
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); // convert diff to years
  // document.write("Current Age: " + age);
  // document.write("<br />");

  // return the age
  return age
}