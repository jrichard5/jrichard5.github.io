//Used Information here to make the collapsible feature
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate

window.onload = function() {
    makeCollaspable();
    injectStrings();
}


function injectStrings(){
    var phoneNumber = "(###)-abc-defg";
    var email = "jeremiahrichard1@gmail.com"

    var phoneNumberSpans = document.getElementsByClassName("phoneNumber")
    for(element of phoneNumberSpans)
     {
        console.log("hi");
        console.log(element.innerHTML);
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
            console.log(content.style.maxHeight);
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}


