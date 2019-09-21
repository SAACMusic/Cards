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
    var firstname = studentarray[i+1].charAt(0).toUpperCase() + studentarray[i+1].slice(1).toLowerCase();
    var lastname = studentarray[i].charAt(0).toUpperCase() + studentarray[i].slice(1).toLowerCase();
    studentarray[i]=[firstname, lastname];
    var email = studentarray[i][0].charAt(0).toLowerCase().concat(studentarray[i][1].toLowerCase(), "@saac.qld.edu.au");
    studentarray[i].push(email);
    delete studentarray[i+1];
    studentarray = studentarray.filter(Boolean);
  }
  console.log(studentarray);
  document.getElementById("New").innerHTML=studentarray;
}
