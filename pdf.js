function strip(){
  var students=prompt("Paste the list");
  var band=prompt("Paste the band");
  var studentarray=students.split(" ");
  for (var i = 0; i < studentarray.length; i++) {
    if (/\d/.test(studentarray[i]) === true) {
      studentarray[i]= null;
    }
  }
  studentarray = studentarray.filter(Boolean);
  for (var i = 0; i < studentarray.length; i++) {
    studentarray[i]=studentarray[i+1].concat(" ", studentarray[i]);
    delete studentarray[i+1];
    studentarray = studentarray.filter(Boolean);
  }
  console.log(studentarray);
  document.getElementById("New").innerHTML=studentarray;
}
