/*jslint devel: true */

/*eslint no-console: "off", no-undef: "off" */
function formValidation() {
    
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var gender = document.getElementById('gender');
    var bday = document.getElementById('bday');
    
    if ((firstname.value.length == 0) || (lastname.value.length == 0)){
        firstname.focus();
        return false;
    }

    if (inputAlphabet(firstname, "* For your name please use alphabets only *")){
        if (inputAlphabet(lastname, "* For your name please use alphabets only *")){
            if (emailValidation(email, "* Please enter a valid email address *")) {
               if(trueSelection(gender, "* Please select your gender *" )){
                   var obj = {
                       firstname : firstname.value,
                       lastname : lastname.value,
                       email : email.value,
                       gender : gender.value,
                       birthday : bday.value
                   };
                   localStorage.setItem("formInputs",JSON.stringify(obj));
                   clearInputs();
                   loadInputs();
                   localStorage.clear;
               }
            }
        }
        
    }
        
}

function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        alert(alertMsg);
        inputtext.focus();
    return false;
    }
}

function emailValidation(inputtext, alertMsg) {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputtext.value))
   {
       return (true)
   }
       alert(alertMsg);
       return (false)
}

function trueSelection(inputtext, alertMsg) {
    if (inputtext.value == "Please Choose") {
        alert(alertMsg); 
        inputtext.focus();
        return false;
    } else {
        return true;
    }
}

function clearInputs(){    
    document.getElementById('myform').reset();   
}

function loadInputs(){
    var obj = JSON.parse(localStorage.getItem("formInputs"));
    document.getElementById('firstname').value = obj.firstname;
    document.getElementById('lastname').value = obj.lastname;
    document.getElementById('email').value = obj.email;
    document.getElementById('gender').value = obj.gender;
    document.getElementById('bday').value = obj.birthday;
}