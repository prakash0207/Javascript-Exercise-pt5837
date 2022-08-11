function displayInfo(details)
{
    const divElement = document.getElementById("detail");
    const listElements = divElement.querySelectorAll("li");
    listElements[0].innerHTML = "Organisation Name                                    -  " + details[0];
    listElements[1].innerHTML = "CEO.                                                 -  " + details[1];
    listElements[2].innerHTML = "Year Of Start.                                       -  " + details[2];
}

function zohoInfo()
{
    var details = ["ZOHO","Sridhar Vembu","1996"];
    displayInfo(details);
}

function appleInfo()
{
    var details = ["Apple","Tim Cook","1976"];
    displayInfo(details);
}

function mercedesInfo()
{
    var details = ["Mercedes","Dieter Zetsche","1926"];
    displayInfo(details);
}

function rolexInfo()
{
    var details = ["Rolex","Jean-Frederic Dufour","1905"];
    displayInfo(details);
}

function bentleyInfo()
{
    var details = ["Bentley","Adrian Hallmark","1919"];
    displayInfo(details);
}
function amInfo()
{
    var details = ["Aston Martin", "Amedeo Felisa","1913"];
    displayInfo(details);
}
function lamborghiniInfo()
{
    var details = ["Lamborghini", "Stephan Winkelmann","1963"];
    displayInfo(details);
}
function maseratiInfo()
{
    var details = ["Maserati","Davide Grasso","1940"];
    displayInfo(details);
}
function valentinoInfo()
{
    var details = ["Valentino","Jacopo Venturini","1959"];
}
function diorInfo()
{
    var details = ["Dior","Pietro Beccari","1946"];
    displayInfo(details);
}

function clickedButton(event) 
{
    
    const divElement = document.getElementById("detail");
    const listElements = divElement.querySelectorAll("li");
    var whichButton;
    var coordinates = mouseMove();
    if(event.button == 0)
    {
        whichButton = "Left";
    }
    else if(event.button == 2)
    {
        whichButton = "right";
    }
    listElements[3].innerHTML = "Mouse button clicked - " + whichButton;
    listElements[4].innerHTML = "Left coordinate of the clicked position: " + coordinates[0] + ". top coordinate of the clicked position: " + coordinates[1];
}
function mouseMove()
{
    var coordinates = [];
    coordinates[0] = event.clientX;
    coordinates[1] = event.clientY;
    return(coordinates);
}

window.addEventListener('mousemove', mouseMove);