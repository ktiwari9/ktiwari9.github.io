// Dynamically evaluate citation count and number of publications
function getPubStats() {
  var num_publications = $( "li.post-block" ).length;
  // $("#numCitations").append("I currently have <b>" + num_publications + "</b> publications");
  document.write("I GOTTTTTTTTTTTT....... "+num_publications);
  var num_citations = 0;
  $.get('data.html', function(data) {
     num = ", with <a href=\"https://scholar.google.co.jp/citations?user=BX68kiEAAAAJ&hl=en\"><b>" + $(data).filter("div").find("numcit").text() + "</b></a> citations.";
    // $("#numCitations").append(num);
  });

  return [num_publications,num_citations];
}