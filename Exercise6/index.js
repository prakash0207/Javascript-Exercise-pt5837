var isPaused = false;
var moveID=0;
var thisLeft;
var thisTop;
var width = window.innerWidth;
var height = window.innerHeight;
var state = 1;
var movingFlag = false;
var resetFlag = false;
thisLeft=(width/2)-150;
thisTop=Math.floor(height/2)-100;

function moveImage()
{
    if(!isPaused)
    {
        var image = document.getElementById("image");
        if (state == 1){
            thisLeft -= 1; 

        } else if (state == 2) {
            thisLeft += 1; 

        } else if (state == 3) {
            thisTop -= 1;
        }
        else if (state == 4) {
            thisTop += 1;
        }
        else if (state == 5) {
            thisLeft += 1;
        }
        else if (state == 6) {
            thisLeft -= 1;
        }
        else if (state == 7) {
            thisTop += 1;
        }
        else if (state == 8) {
            thisTop -= 1;
        }


        if (state == 1 && thisLeft == 0 ){
            state = 2;
        } else if (state == 2 && thisLeft+150 == width/2) {
            state = 3;
        } else if (state == 3 && thisTop == 0) {
            state = 4;
        }
        else if (state == 4 && thisTop+100 == Math.floor(height/2)) {
            state = 5;
        }
        else if (state == 5 && thisLeft == width-300) {
            state = 6;
        }
        else if (state == 6 && thisLeft+150 == width/2) {
            state = 7;
        }
        else if (state == 7 && thisTop == height- 200) {
            state = 8;
        }
        else if (state == 8 && thisTop+100 == Math.floor(height/2)) {
            state = 1;
        }

        image.style.left=thisLeft +"px";
        image.style.top=thisTop +"px";
    }
    
}

function move()
{   
    if(movingFlag == false)
    {
        var image = document.getElementById("image");
        image.style.display = "block";
        moveID=setInterval(moveImage, 1);
        movingFlag = true;
    }
    else
    {
        isPaused = false;
    }
    document.getElementById("move").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("reset").disabled = false;
}
function pause()
{
    isPaused = true;
    document.getElementById("move").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = false;
}

function reset()
{
    var image = document.getElementById("image");
    clearInterval(moveID);
    thisLeft=(width/2)-150;
    thisTop=Math.floor(height/2)-100;
    image.style.left = thisLeft + "px";
    image.style.top = thisTop + "px";
    image.style.display = "block";
    state = 1;
    document.getElementById("move").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = true;
    movingFlag = false;
    isPaused = false;
}