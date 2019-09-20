function strip(){
  var students=prompt("Paste the list");
  var band=prompt("Paste the band");
  var studentarray=students.split(" ");
  console.log(studentarray);
  for (var i = 0; i < studentarray.length; i++) {
    if (/\d/.test(studentarray[i]) === true) {
      studentarray[i]= null;
    }
  }
  console.log(studentarray);
  var filtered = studentarray.filter(
    function (el) {
      return el != null;
    }
  );
  console.log(filtered);
  document.getElementById("New").value=filtered;
}
