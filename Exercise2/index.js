function setCookie(cname,cvalue) 
{  
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function getCookie(cname) 
{
    var theCookies = document.cookie.split(';');
    var name = cname + "=";
    for(let i = 0; i < theCookies.length; i++) 
    {
        var singleCookieArray = theCookies[i].split('=');
        if(singleCookieArray[0] == cname)
        {
            return(singleCookieArray[1]);
        }
    }
    return "";
}

function checkCookie() 
{
    var browserName;
    var userAgent = navigator.userAgent;
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
        browserName="Other";
    }

    var count = getCookie(browserName);
    if(count != "" && count != null)
    {
        var integerCount = parseInt(count);
        integerCount += 1;
        count = integerCount.toString();
    }
    else
    {
        count = "1";
    }
    document.getElementById("cookieCount").innerHTML = "The number of visits are " + count;
    setCookie(browserName, count);
}
