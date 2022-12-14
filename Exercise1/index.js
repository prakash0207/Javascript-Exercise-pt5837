var height = document.documentElement.scrollHeight;
var width = document.documentElement.scrollWidth;
var userAgent = navigator.userAgent;
var browserName;
var browserVersion;
if(userAgent.match(/chrome|chromium|crios/i))
{
    browserName = "Chrome";
}
else if(userAgent.match(/firefox|fxios/i))
{
    browserName = "Firefox";
}  
else if(userAgent.match(/safari/i))
{
    browserName = "Safari";
}
else if(userAgent.match(/opr\//i))
{
    browserName = "Opera";
} 
else if(userAgent.match(/edg/i))
{
    browserName = "Edge";
}else
{
    browserName="No browser detection";
}

browserVersion = userAgent.split(browserName+'/')[1]

const questionAnswer = {
    "Browser Name": browserName,
    "Browser Version": browserVersion,
    "Screen Width": screen.width,
    "Screen Height":screen.height,
    "Page Height": height,
    "Page Width": width
};

var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

for(let question in questionAnswer)
{
    var row = document.createElement("tr");
    var column1 = document.createElement("td");
    var column1Text = document.createTextNode(question);
    column1.appendChild(column1Text);
    column1.setAttribute('style','border:1px solid black; border-collapse:collapse; border-color:black ; text-align:center;');
    row.appendChild(column1);

    var column2 = document.createElement("td");
    var column2Text = document.createTextNode(questionAnswer[question]);
    column2.appendChild(column2Text);
    column2.setAttribute('style','border:1px solid black; border-collapse:collapse; border-color:black ; text-align:center;');
    row.appendChild(column2);
    tblBody.appendChild(row);
}
tbl.setAttribute('style','border:1px solid black; border-collapse:collapse; border-color:black ; text-align:center;');
tbl.appendChild(tblBody);
body.appendChild(tbl);
