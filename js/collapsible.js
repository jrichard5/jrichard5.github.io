//import addActive from './nav.js';


//Used Information here to make the collapsible feature
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate




window.onload = function() {
    makeCollaspable();
    injectStrings();
    addActive();
    sideNavClicks();
}


function injectStrings(){
    var phoneNumber = "(###)-abc-defg";
    var email = "jeremiahrichard1@gmail.com"

    var phoneNumberSpans = document.getElementsByClassName("phoneNumber")
    for(element of phoneNumberSpans)
     {
        element.innerHTML = phoneNumber;
    };
}





function makeCollaspable(){
    var coll = document.getElementsByClassName("collapsible");  
    for (var i = 0; i< coll.length; i++)
    {
        coll[i].addEventListener("click", function()
        {
            this.classList.toggle("active");
            var content= this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}






//Supposely you cannot import when browseing the file locally, yaya js.

function addActive() {
    let h2Sections = document.getElementsByTagName("h2");
    let sideNavBarArray = document.getElementsByClassName("sidenav")[0].getElementsByTagName("a");
    let viewPortHeightCap = window.innerHeight * .5;
    let indexOfArrow;
    sideNavBarArray[0].classList.add('sideNavActive');

    document.addEventListener("scroll", ()=> {
        var locOfArrow;
        //Need to assign locOfArrow to the h2 unless the new header is 30% of the viewport
        
        //This for loop finds the h2 section index that is less than .5 of viewport height but greater than all the other h2 sections
        for (var i = 0; i < h2Sections.length; i++){
            const rect = h2Sections[i].getBoundingClientRect();
            if(locOfArrow == undefined){
                locOfArrow = h2Sections[0];
                indexOfArrow = 0;
            }
            if (rect.top <= viewPortHeightCap)
            {
                //if top is viewportheight cap or above, we want to assign it to active
                //check against other viewports to make sure we have the largest one (aka we would want 10%, not -10% or -30% if this even does that....)
                if (rect.top > locOfArrow.getBoundingClientRect().top)
                {
                    locOfArrow = h2Sections[i];
                    indexOfArrow = i;
                }
                
            }
        }
        //Modifies the class of the sidebar a tag based on previous for loop.  Previously, it removing the class and re-adding it would always trigger the transition
        for (var i = 0; i<h2Sections.length; i++){
            if (indexOfArrow == i){
                sideNavBarArray[indexOfArrow].classList.add('sideNavActive');
            }else{
                sideNavBarArray[i].classList.remove('sideNavActive'); 
            }
        }

    })
}


function sideNavClicks(){
    const sideNav = document.querySelector(".sidenav");

    sideNav.addEventListener('click', function(e){
        
        if (e.target.tagName === 'A' && e.target.getAttribute('data-target')){
            e.preventDefault();
            const targetId = e.target.getAttribute('data-target');
            const target = document.getElementById(targetId);
            target.scrollIntoView({behavior: 'smooth'});
        }
        else{
            e.preventDefault();
            document.getElementById('header').scrollIntoView({behavior: 'smooth'});
        }
    })
}