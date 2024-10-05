function validateform(){

var name=document.getElementById("name_box").value;
var phonenumber=document.getElementById("number_box").value;
if (phonenumber.length !== 10 ) {  // NaN = not a numberr
    alert("Phone number must be exactly 10 digits.");
    return false;
}

if (isNaN(phonenumber) ) {  // NaN = not a numberr
    alert("Enter valid phone number.");
    return false;
}


alert("Thank you for your feedback, " + name + "!");
return true; 
}


