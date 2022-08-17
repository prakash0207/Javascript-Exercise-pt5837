function convertToRoman() 
{
    var num = document.getElementById("deciToRoman").value;
    var numbers = /[^[0-9]+$]/;
    var validateNumbers = numbers.test(num);
    const msg = document.getElementById("msg-decitoroman");
    if(validateNumbers)
    {
        if(num == 0)
        {
            document.getElementById("answerForDeci").innerHTML = "Zero";
        }
        else
        {
            var roman = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
              };
              var str = ""
            
              for (var i of Object.keys(roman)) 
              {
                var q = Math.floor(num / roman[i]);
                num -= q * roman[i];
                str += i.repeat(q);
              }
              document.getElementById("answerForDeci").innerHTML = str;
        }
    }
    else
    {
        console.log("Enter only numbers");
    }
}
function value(r) 
{
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}
  

function convertToDecimal() 
{
    var res = 0;
    var str = document.getElementById("romanToDeci").value;
    var romanChar = /[a-z ABEFGHJKNOPQRSTUWYZ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ 0-9]/
    var validateRomanChar = romanChar.test(str);
    if(!validateRomanChar)
    {
        for (i = 0; i < str.length; i++) 
        {
            var s1 = value(str.charAt(i)); // Gets the value from the value function from the particular character from the input string.
            if (i + 1 < str.length) 
            {
                var s2 = value(str.charAt(i + 1)); //the next value is added

                if (s1 >= s2) 
                {
                    res = res + s1;
                } 
                else                                // the value before is subracted
                {
                    res = res + s2 - s1;
                    i++;
                }
            } 
            else  
            {
                res = res + s1;
            }
        }
        document.getElementById("answerForRoman").innerHTML = res;
    }
    else
    {
        console.log("Enter Roman Character (capital characters)");
    }
}

