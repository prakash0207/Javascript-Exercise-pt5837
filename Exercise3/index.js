
function validatedate(dateString)
{      
    var dateFormat = /^([0-1][0-9]-[0-3][0-9]-[0-9]{4})$/;      
          
    var dateFormatCheck = dateFormat.test(dateString)
    if(!dateFormatCheck)
    {
        return false;
    }  
    var datePart = dateString.split('-')    
    var month= parseInt(datePart[0]);      
    var day = parseInt(datePart[1]);      
    var year = parseInt(datePart[2]);      
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
    if (month==1 || month>2 && month<13)
    {      
        if (day>ListofDays[month-1])
        {      
            return false;      
        }  
        if(day == 0 || year ==0)
        {
            return false;
        }
    }
    else if (month==2)
    {      
        var leapYear = false;      
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) 
        {      
            leapYear = true;      
        }      
        if(leapYear && day>29)
        {
            return false;
        }   
        if(!leapYear && day>28)
        {
            return false;
        }
    }      
    else
    {      
        return false;      
    }      
    return true;      
}

function nameCheck(name)
{
    const nameQuerySelector = document.querySelector('#fname');
    const msg = nameQuerySelector.parentNode.querySelector("small");
    if(!name)
    {
        
	    msg.innerHTML = '<span style="color:#dc3545">  Name field is mandatory Please enter the name </span>';
        nameQuerySelector.className = "error";
        return false;
    }
    var specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
    validation = specialCharacters.test(name);
    if(validation == false)
    {
        nameQuerySelector.className = "success";
        msg.innerHTML = "";
        return true;
    }
    else
    {
	    msg.innerHTML ='<span style="color:#dc3545">  Name must not contain any special characters or numbers </span>';
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
	    msg.innerHTML = '<span style="color:#dc3545"> Date of Birth field is mandatory please enter the details </span>';
        nameQuerySelector.className = "error";
        return false;
    }
    var validatedDate = validatedate(dob);
    
    if(!validatedDate)
    {
	    msg.innerHTML = '<span style="color:#dc3545"> Please Check the date </span>';
        nameQuerySelector.className = "error";
        return false;
    }
    else
    {
        nameQuerySelector.className = "success";
        msg.innerHTML = "";
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
	    msg.innerHTML = ' <span style="color:#dc3545"> Mobile Number must contain 10 digit and must not start with a zero </span>';
        nameQuerySelector.className = "error";
        return false;
    }
    else
    {
        msg.innerHTML = "";
        nameQuerySelector.className = "success";
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
            msg.innerHTML = "";
        }
    }
    if(gender == null)
    {
        
	    msg.innerHTML = ' <span style="color:#dc3545">Gender field is mandatory please do enter the details</span>';
        radios[0].className = "error";
    }
    var fMobileNumber = document.getElementById("mobile").value;
    var fMobileNumberCheck = mobileNumberCheck(fMobileNumber);

    var tableAlreadyPresent = document.getElementsByTagName("table");
    for(var tablePresent of tableAlreadyPresent)
    {
        if(tablePresent)
        {
            tablePresent.innerHTML = "";
        }
    }
    
    if(fnameCheck && fdobCheck && gender &&(!fMobileNumber))
    {
        display(fname,fdob,gender,fMobileNumber);
    }
    else if(fnameCheck && fdobCheck && gender && fMobileNumber && fMobileNumberCheck)
    {
        display(fname,fdob,gender,fMobileNumber);
    }

});

form.addEventListener("reset", function(event)
{
    const mobileQuerySelector = document.querySelector('#mobileNumber');
    const mobileBoxSelector = document.querySelector('#mobile');
    const nameQuerySelector = document.querySelector('#fname');
    const msgName = nameQuerySelector.parentNode.querySelector("small");
    const dateQuerySelector = document.querySelector('#fdob');
    const msgDate = dateQuerySelector.parentNode.querySelector("small");
    const genderQuerySelector = document.querySelector('#gender');

    msgName.innerHTML = "";
    msgDate.innerHTML = "";
    mobileQuerySelector.innerHTML = "";
    genderQuerySelector.innerHTML = "";

    genderQuerySelector.className = "";
    mobileBoxSelector.className = "";
    nameQuerySelector.className = "";
    dateQuerySelector.className = "";
    var tableAlreadyPresent = document.getElementsByTagName("table");
    for(var tablePresent of tableAlreadyPresent)
    {
        if(tablePresent)
        {
            tablePresent.innerHTML = "";
        }
    }
});















