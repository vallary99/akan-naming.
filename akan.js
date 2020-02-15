var maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleidentifier;
var femaleidentifier;
var maleresult, femaleresult;
var dd, mm, yy;


function getInputValue(){
    var day= newDay(document.getElementById("date").value);
    dd= day.getDay();
    mm = day.getMonth();
    yy = day.getFullYear();
}

/*function validateInput(){
    alert(dd);
    alert(mm);
    alert(yy);
}*/