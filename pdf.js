function strip(){
  var students=prompt("Paste the list");
  var band=prompt("Paste the band");
  var studentarray=students.split(" ");
  for (var i = 0; i < studentarray.length; i++) {
    if (/\d/.test(studentarray[i]) === true) {
      studentarray[i]= null;
    }
  }
  var filtered = studentarray.filter(
    function (el) {
      return el != null;
    }
  );
  document.getElementById("New").value=filtered;
}
