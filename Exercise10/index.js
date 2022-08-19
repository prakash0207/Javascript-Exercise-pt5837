var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var state = 1;
var restTimer=0;
var restTimerMain = 0;
var characterSouthImage = new Image();
var characterEastImage = new Image();
var characterWestImage = new Image();
var characterNorthImage = new Image();
var characterOfficeImage = new Image();


var mainCharacterSouthImage = new Image();
var mainCharacterEastImage = new Image();
var mainCharacterWestImage = new Image();
var mainCharacterNorthImage = new Image();
var mainCharacterOfficeImage = new Image();
var ctx;
var doorImage = new Image();
ctx = canvas.getContext("2d");

var mainAnimationFlag = true;

var charOneX = 300;
var charOneY = 100;

var charTwoX = 300;
var charTwoY = 250;

var charThreeX = 300;
var charThreeY = 400;

var charFourX = 300;
var charFourY = 550;

var charFiveX = 1200;
var charFiveY = 100;

var charSixX = 1200;
var charSixY = 250;

var charSevenX = 1200;
var charSevenY = 400;

var charEightX = 1200;
var charEightY = 550;

var charMainX = 700;
var charMainY = 100;

var charRecep1X = 300;
var charRecep1Y = 750;

var charRecep2X = 1200;
var charRecep2Y = 750;

var doorX = (canvas.width/2)-95;
var doorY = 700;

var timer = 0;

var char1 = true;
var char2 = true;
var char3= true;
var char4= true;
var char5= true;
var char6= true;
var char7= true;
var char8= true;



function rightStroke()
{
    ctx.beginPath();
    ctx.moveTo((canvas.width/2)+100,700);
    ctx.lineTo(canvas.width,700);
    ctx.lineTo(canvas.width,720);
    ctx.lineTo((canvas.width/2)+100,720);
    ctx.stroke();
}

function mainCharacterSouth() 
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125,130,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(75,130,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    mainCharacterSouthImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}

function mainCharacterEast()
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(130,125,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(130,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    mainCharacterEastImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}

function mainCharacterWest()
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(70,125,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(70,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    mainCharacterWestImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}

function mainCharacterNorth()
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(130,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(70,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    mainCharacterNorthImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}


function doorCharacter()
{
    //door
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect((canvas.width/2)-95, 700, 200, 20);
    ctx.fillStyle = "brown";
    ctx.fill();
    doorImage = ctx.getImageData((canvas.width/2)-95,700,200,20);
}


function characterSouth() 
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125,130,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(75,130,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    characterSouthImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}

function characterEast()
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(130,125,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(130,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    characterEastImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}

function characterWest()
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(70,125,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(70,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    characterWestImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}

function characterNorth()
{
    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(130,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(70,75,5,0,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    characterNorthImage = ctx.getImageData(60, 60, 80, 80);   
    ctx.clearRect(55, 55, 90, 90);
}



function restAnimationLeft(charX,charY)
{
    if(restTimer < 1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterEastImage, charX, charY);
    }
    if(restTimer >1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterSouthImage, charX, charY);
    }
    if(restTimer > 3000)
    {
        restTimer = 0;
    }
    restTimer += 1;
}

function restAnimationRight(charX, charY)
{
    if(restTimer < 1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterWestImage, charX, charY);
    }
    if(restTimer >1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterSouthImage, charX, charY);
    }
    if(restTimer > 3000)
    {
        restTimer = 0;
    }
    restTimer += 1;
}

function restAnimationRecepLeft(charX, charY)
{
    if(restTimer < 1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterWestImage, charX, charY);
    }
    if(restTimer >1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterNorthImage, charX, charY);
    }
    if(restTimer > 3000)
    {
        restTimer = 0;
    }
    restTimer += 1;
}



function restAnimationRecepRight(charX, charY)
{
    if(restTimer < 1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterEastImage, charX, charY);
    }
    if(restTimer >1000)
    {
        ctx.clearRect(charX-5, charY-5, 90, 90);
        ctx.putImageData(characterNorthImage, charX, charY);
    }
    if(restTimer > 3000)
    {
        restTimer = 0;
    }
    restTimer += 1;
}




function restAnimationTrigger()
{
    if(char1)
    {
        restAnimationLeft(charOneX,charOneY);
    }
    if(char2)
    {
        restAnimationLeft(charTwoX,charTwoY);
    }
    if(char3)
    {
        restAnimationLeft(charThreeX,charThreeY);
    }
    if(char4)
    {
        restAnimationLeft(charFourX,charFourY);
    }
    if(char5)
    {
        restAnimationRight(charFiveX,charFiveY);
    }
    if(char6)
    {
        restAnimationRight(charSixX,charSixY);
    }
    if(char7)
    {
        restAnimationRight(charSevenX,charSevenY);
    }
    if(char8)
    {
        restAnimationRight(charEightX,charEightY);
    }
    restAnimationRecepLeft(charRecep1X,charRecep1Y);
    restAnimationRecepRight(charRecep2X,charRecep2Y);
}





function restAnimationMain()
{
    if(mainAnimationFlag)
    {
        if(restTimerMain < 100)
        {
            ctx.clearRect(charMainX-5, charMainY-5, 90, 90);
            ctx.putImageData(mainCharacterEastImage, charMainX, charMainY);
            charMainX +=1;
        }
        if(restTimerMain > 100)
        {
            ctx.clearRect(charMainX-5, charMainY-5, 90, 90);
            ctx.putImageData(mainCharacterWestImage, charMainX, charMainY);
            charMainX -=1;
        }
        if(restTimerMain>200)
        {
            restTimerMain = 0;
        }
        restTimerMain += 1;
    }
    
}

function restAnimationMainLeft()
{
    if(restTimerMain < 100)
    {
        ctx.clearRect(charMainX-5, charMainY-5, 90, 90);
        ctx.putImageData(mainCharacterEastImage, charMainX, charMainY);
    }
    if(restTimerMain > 100)
    {
        ctx.clearRect(charMainX-5, charMainY-5, 90, 90);
        ctx.putImageData(mainCharacterSouthImage, charMainX, charMainY);
    }
    if(restTimerMain>200)
    {
        restTimerMain = 0;
    }
    restTimerMain += 1;  
}

function restAnimationMainRight()
{
    if(restTimerMain < 100)
    {
        ctx.clearRect(charMainX-5, charMainY-5, 90, 90);
        ctx.putImageData(mainCharacterWestImage, charMainX, charMainY);
    }
    if(restTimerMain > 100)
    {
        ctx.clearRect(charMainX-5, charMainY-5, 90, 90);
        ctx.putImageData(mainCharacterSouthImage, charMainX, charMainY);
    }
    if(restTimerMain>200)
    {
        restTimerMain = 0;
    }
    restTimerMain += 1;  
}





function moveRight(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(characterEastImage, charX, charY);
    charX += 1;
    return(charX);
}
function moveLeft(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(characterWestImage, charX, charY);
    charX -= 1;
    return(charX);
}
function moveDown(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(characterSouthImage, charX, charY);
    charY += 1;
    return(charY);
}
function moveUp(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(characterNorthImage, charX, charY);
    charY -= 1;
    return(charY);
}




function moveRightMain(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(mainCharacterEastImage, charX, charY);
    charX += 1;
    return(charX);
}
function moveLeftMain(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(mainCharacterWestImage, charX, charY);
    charX -= 1;
    return(charX);
}
function moveDownMain(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(mainCharacterSouthImage, charX, charY);
    charY += 1;
    return(charY);
}
function moveUpMain(charX, charY)
{
    ctx.clearRect(charX-5, charY-5, 90, 90);
    ctx.putImageData(mainCharacterNorthImage, charX, charY);
    charY -= 1;
    return(charY);
}




function doorMoveRight(doorX,doorY)
{
    ctx.clearRect(doorX-5,doorY-5,200,30);
    ctx.putImageData(doorImage,doorX,doorY);
    doorX += 1;
    return(doorX);
}

function doorMoveLeft(doorX,doorY)
{
    ctx.clearRect(doorX-5,doorY-5,210,30);
    ctx.putImageData(doorImage,doorX,doorY);
    doorX -= 1;
    rightStroke();
    return(doorX);
}



var state = 0;
function Animation()
{
    

    timer += 1;
    console.log(timer);
    restAnimationTrigger();
    restAnimationMain();
    if(timer > 500)
    {
        charFourX = moveLeft(charFourX,charFourY);
    }
    if(timer > 900 && charThreeY <= 550)
    {
        charOneY = moveDown(charOneX,charOneY);
        charTwoY = moveDown(charTwoX,charTwoY);
        charThreeY = moveDown(charThreeX,charThreeY);
    }
    if(state == 1)
    {
        charMainX = moveLeftMain(charMainX,charMainY);
    }
    if(state == 2)
    {
        charMainY = moveDownMain(charMainX,charMainY);
    }
    if(state == 3 && timer > 1900)
    {
        restAnimationMainLeft();
        charEightX = moveRight(charEightX,charEightY);
    }
    if(state == 4)
    {
        charFiveY = moveDown(charFiveX,charFiveY);
        charSixY = moveDown(charSixX,charSixY);
        charSevenY = moveDown(charSevenX,charSevenY);
    }
    if(state == 5)
    {
        charMainX = moveRightMain(charMainX,charMainY);
    }
    if(state == 6 && timer >= 3200)
    {
        charSevenX = moveRight(charSevenX,charSevenY);
    }
    if(state == 7)
    {
        charFiveY = moveDown(charFiveX,charFiveY);
        charSixY = moveDown(charSixX,charSixY);
    }
    if(state == 8)
    {
        charMainX = moveRightMain(charMainX,charMainY);
    }
    if(state == 9)
    {
        charMainY = moveDownMain(charMainX,charMainY);
    }
    if(state == 10 && timer > 4700)
    {
        charSixX = moveRight(charSixX,charSixY);
        restAnimationMainRight();
    }
    if(state == 11)
    {
        charFiveY = moveDown(charFiveX,charFiveY);
        charMainY = moveDownMain(charMainX,charMainY);
    }
    if(state == 12)
    {
        restAnimationMainRight();
        charThreeX = moveLeft(charThreeX,charThreeY);
    }
    if(state == 13)
    {
        restAnimationMainRight();
        charOneY = moveDown(charOneX,charOneY);
        charTwoY = moveDown(charTwoX,charTwoY);
    }
    if(state == 14 && timer > 6200)
    {
        charFiveX = moveRight(charFiveX,charFiveY);
        charRecep2X = moveLeft(charRecep2X,charRecep2Y);
    }
    if(state == 15)
    {
        charFiveX = moveRight(charFiveX,charFiveY);
        doorX = doorMoveRight(doorX,doorY);
    }
    if(state == 16)
    {
        charRecep2Y = moveUp(charRecep2X,charRecep2Y);
    }
    if(state == 17)
    {
        doorX = doorMoveLeft(doorX,doorY);

    }
    if(state == 18)
    {
        charTwoX = moveLeft(charTwoX,charTwoY);
    }
    if(state == 19)
    {
        charOneY = moveDown(charOneX,charOneY);
    }
    if(state == 20)
    {
        charMainX = moveLeftMain(charMainX,charMainY);
    }
    if(state == 21)
    {
        restAnimationMainLeft();
        charOneX = moveLeft(charOneX,charOneY);
        charRecep1X = moveRight(charRecep1X,charRecep1Y);
    }
    if(state == 22)
    {
        doorX = doorMoveRight(doorX,doorY);

    }
    if(state == 23)
    {
        charRecep1Y = moveUp(charRecep1X,charRecep1Y);
    }
    if(state == 24)
    {
        doorX = doorMoveLeft(doorX,doorY);
    }
    if(state == 25)
    {
        restAnimationMainLeft();
    }



    if(timer > 1100 && state == 0 )
    {
        mainAnimationFlag = false;
        state = 1;
    }
    if(state == 1 && charMainX == 300)
    {
        state = 2;
    }
    if(state == 2 && charMainY == 100)
    {
        state = 3;
    }
    if(state == 3 && timer == 2500)
    {
        state = 4;
    }
    if(state == 4 && charSevenY == 550)
    {
        state = 5;
    }
    if(state == 5 && charMainX == 700)
    {
        state = 6;
        mainAnimationFlag = true;
    }
    if(state == 6 && timer == 3800)
    {
        mainAnimationFlag = false;
        state = 7;
    }
    if(state == 7 && charSixY  == 550)
    {
        state = 8;
    }
    if(state == 8 && charMainX == 1200)
    {
        state = 9;
    }
    if(state == 9 && charMainY == 250)
    {
        state = 10;
    }
    if(state == 10 && timer == 5200)
    {
        state = 11;
    }
    if(state == 11 && charFiveY == 550)
    {
        state = 12;
    }
    if(state == 12 && timer == 5800)
    {
        state = 13;
    }
    if(state == 13 && charTwoY == 550)
    {
        state = 14;
    }
    if(state == 14 && charRecep2X == 800)
    {
        state = 15;
    }
    if(state == 15 && doorX == (canvas.width/2)+100)
    {
        state = 16;
        mainAnimationFlag = true;
    }
    if(state == 16 && timer == 8000)
    {
        state = 17;
    }
    if(state == 17 && doorX == (canvas.width/2)-95)
    {
        state = 18;
    }
    if(state ==18 && charTwoX == -100)
    {
        state = 19;
    }
    if(state == 19 && charOneY == 550)
    {
        state = 20;
        mainAnimationFlag = false;
    }
    if(state == 20 && charMainX == 300)
    {
        state = 21;
    }
    if(state == 21 && charRecep1X == 800)
    {
        state = 22;
    }
    if(state == 22 && doorX == (canvas.width/2)+100)
    {
        mainAnimationFlag = true;
        state = 23;
    }
    if(state == 23 && charRecep1Y == -100)
    {
        mainAnimationFlag = false;
        state = 24
    }
    if(state == 24 && doorX == (canvas.width/2)-95)
    {
        state = 25
    }
    

}

characterSouth();
characterWest();
characterEast();
characterNorth();

mainCharacterEast();
mainCharacterWest();
mainCharacterSouth();
mainCharacterNorth();

doorCharacter();
rightStroke();

//Office
//left separation
ctx.beginPath();
ctx.moveTo(0,700);
ctx.lineTo((canvas.width/2)-100,700);
ctx.lineTo((canvas.width/2)-100,720);
ctx.lineTo(0,720);
ctx.stroke();

//right separation



moveID=setInterval(Animation, 1);
