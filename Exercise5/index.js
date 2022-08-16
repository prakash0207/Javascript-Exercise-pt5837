var slideIndex = 1;
showSlides(slideIndex);

document.onkeydown = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
        case 33:
            showSlides(slideIndex+=1);
            break
        case 38:
            showSlides(slideIndex+=1);
            break
        case 40:
            showSlides(slideIndex-=1)
            break;
        case 34:
            showSlides(slideIndex-=1)
            break;
    }
};
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

function clickedButton(event) 
{  
    if(event.button == 0)
    {
        showSlides(slideIndex+=1)
    }
    else if(event.button == 2)
    {
        showSlides(slideIndex-=1)
    }
}

function showSlides(n) 
{
    var i;
    var div = document.getElementById("slide");
    var slides = div.querySelectorAll("div");
    var slideNumber = document.getElementById("number-indication");
    if (n > slides.length) 
    {
        slideIndex = 1
    }    
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block"; 
    slideNumber.innerHTML = slideIndex + "/10"
}
