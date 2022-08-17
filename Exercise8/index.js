function getImage()
{
    var spriteSheet = document.getElementById("sprite-image");
    var getRow = document.getElementById("get-row").value;
    var getColumn = document.getElementById("get-column").value;
    var imgHeight = -53;
    var imgWidth = -75;
    var dot = /[.]/;
    var validationCol = dot.test(getColumn);
    var validationRow = dot.test(getRow);
    if(validationCol || validationRow)
    {
        console.log("Enter a valid number");
    }
    else
    {
        if(getColumn && getRow)
        {
            if(getRow * imgHeight < 0 && getRow * imgHeight >= -106 && getColumn*imgWidth < 0 && getColumn*imgHeight >= -300)
            {
                spriteSheet.style.backgroundPosition = `${(getColumn-1) * imgWidth}px ${(getRow-1) * imgHeight}px`; 
                spriteSheet.style.width = "75px";
                spriteSheet.style.height = "53px";
            }   
            else
            {
                alert("Entered row or column is not available in the image");
            }
        }
        else if(getColumn == "" && getRow)
        {
            if(getRow * imgHeight < 0 && getRow * imgHeight >= -106 )
            {
                spriteSheet.style.backgroundPosition = `${0}px ${(getRow-1) * imgHeight}px`;
                spriteSheet.style.width = "300px";
                spriteSheet.style.height = "53px";
            }
            else
            {
                alert("Enter an available row");
            }
        }
        else if(getRow == "" && getColumn)
        {
            if(getColumn*imgWidth < 0 && getColumn*imgHeight >= -300)
            {
                spriteSheet.style.backgroundPosition = `${(getColumn-1) * imgWidth}px ${0}px`;
                spriteSheet.style.height = "106px";
                spriteSheet.style.width = "75px";
            }
            else
            {
                alert("Enter an available column");
            }
        }
        
        else
        {
            spriteSheet.style.height = "106px";
            spriteSheet.style.width = "300px";
        }
    }
    
    
    
}