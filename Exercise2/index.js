function checkCookie() 
{
    var name;
    name = "name";
    var count;
    var theCookies = document.cookie.split(';');
    var flag = true;
    for(let i = 0; i < theCookies.length; i++) 
    {
        var singleCookieArray = theCookies[i].split('=');
        if(singleCookieArray[0] == name)
        {
            count = singleCookieArray[1];
            flag = false;
            break;      
        }
    }
    if(flag)
    {
        count = "";
    }
    
   
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
    document.cookie = name + "=" + count + ";";
}
