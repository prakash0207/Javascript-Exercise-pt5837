
function nameCheck(name)
{
    const nameQuerySelector = document.querySelector('#fname');
    const msg = nameQuerySelector.parentNode.querySelector("small");
    if(!name)
    {
        
	    msg.innerText = "Name field is mandatory Please enter the name";
        nameQuerySelector.className = "error";
        return false;
    }
    var specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
    validation = specialCharacters.test(name);
    if(validation == false)
    {
        nameQuerySelector.className = "success";
        msg.innerText = "";
        return true;
    }
    else
    {
	    msg.innerText = "Name must not contain any special characters or numbers";
        nameQuerySelector.className = "error";
        return false;
    }
}

function dateCheck(dob)
{
    const nameQuerySelector = document.querySelector('#fdob');
    const msg = nameQuerySelector.parentNode.querySelector("small");
    if(!dob)
    {
	    msg.innerText = "Date of Birth field is mandatory please enter the details";
        nameQuerySelector.className = "error";
        return false;
    }
    var formattedDateArray = dob.split('-');
    var formattedDate = formattedDateArray[0] + '/' + formattedDateArray[1] + '/' + formattedDateArray[2];
    var isValidDate = Date.parse(formattedDate);
    
    if(isNaN(isValidDate))
    {
	    msg.innerText = "Please Check the format of date";
        nameQuerySelector.className = "error";
        return false;
    }
    else
    {
        nameQuerySelector.className = "success";
        msg.innerText = "";
        return true;
    }
}

function mobileNumberCheck(mobileNumber)
{
    const nameQuerySelector = document.querySelector('#mobile');
    const msg = nameQuerySelector.parentNode.querySelector("small");
    if(!mobileNumber)
    {
        return true;
    }
    var mobileFormat = /^([1-9]{1}[0-9]{9})$/;
    var mobileFormatCheck = mobileFormat.test(mobileNumber);
    if(mobileFormatCheck == false)
    {
	    msg.innerText = "Mobile Number must contain 10 digit and must not start with a zero";
        nameQuerySelector.className = "error";
        return false;
    }
    else
    {
        msg.innerText = "";
        return true;
    }
}


function display(fname,fdob,gender,fMobileNumber)
{
    const detailsObject = {
        "Name": fname,
        "Date of Birth": fdob,
        "Sex": gender,
        "Mobile Number": fMobileNumber 
    };
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for(let question in detailsObject)
    {
        if(detailsObject[question]=="" || detailsObject[question]==null)
        {
            continue;
        }
        var row = document.createElement("tr");
        var column1 = document.createElement("td");
        var column1Text = document.createTextNode(question);
        column1.appendChild(column1Text);
        column1.setAttribute('style','border:1px solid black; border-collapse:collapse; border-color:black ; text-align:center;');
        row.appendChild(column1);

        var column2 = document.createElement("td");
        var column2Text = document.createTextNode(detailsObject[question]);
        column2.appendChild(column2Text);
        column2.setAttribute('style','border:1px solid black; border-collapse:collapse; border-color:black ; text-align:center;');
        row.appendChild(column2);
        tblBody.appendChild(row);
    }
    tbl.setAttribute('style','border:1px solid black; border-collapse:collapse; border-color:black ; text-align:center;');
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}


const form = document.querySelector('#val_form');

form.addEventListener("submit", function (event) 
{

    event.preventDefault();

    const msg = document.querySelector("#gender");
	
    var fname = document.getElementById("fname").value;
    var fdob = document.getElementById("fdob").value;
    var fnameCheck = nameCheck(fname);
    var fdobCheck = dateCheck(fdob);
    var radios = document.getElementsByName('sex');
    var gender;
    for(var radio of radios)
    {
        if(radio.checked)
        {
            gender = radio.value;
            msg.innerText = "";
        }
    }
    if(gender == null)
    {
        
	    msg.innerText = "Gender field is mandatory please do enter the details";
        radios[0].className = "error";
    }
    var fMobileNumber = document.getElementById("mobile").value;
    var fMobileNumberCheck = mobileNumberCheck(fMobileNumber);


    if(fnameCheck && fdobCheck && gender &&(!fMobileNumber))
    {
        display(fname,fdob,gender,fMobileNumber);
    }
    else if(fnameCheck && fdobCheck && gender && fMobileNumber && fMobileNumberCheck)
    {
        display(fname,fdob,gender,fMobileNumber);
    }

});














