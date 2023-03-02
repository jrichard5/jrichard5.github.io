export default function addActive() {
    var h2Sections = document.getElementsByTagName("h2");
    var sideNavBarArray = document.getElementsByClassName("sidenav")[0].getElementsByTagName("a");
    var h2SectionsYLoc;
    var viewPortHeightCap = window.innerHeight * .5;

    document.addEventListener("scroll", ()=> {
        var locOfArrow;
        var indexOfArrow;
        //Need to assign locOfArrow to the h2 unless the new header is 30% of the viewport

        for (var i = 0; i < h2Sections.length; i++){
            const rect = h2Sections[i].getBoundingClientRect();
            console.log(rect.top);
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
            //h2Sections[i].classList.remove('active');
            sideNavBarArray[i].classList.remove('active');
        }

        //locOfArrow.classList.add('active');
        sideNavBarArray[indexOfArrow].classList.add('active');

    })
}
/*
        for (var section of h2Sections){
            const rect = section.getBoundingClientRect();
            console.log(rect.top);
            if(locOfArrow == undefined){
                locOfArrow = h2Sections[0];
            }
            if (rect.top <= viewPortHeightCap)
            {
                //if top is viewportheight cap or above, we want to assign it to active
                //check against other viewports to make sure we have the largest one (aka we would want 10%, not -10% or -30% if this even does that....)
                if (rect.top > locOfArrow.getBoundingClientRect().top)
                {
                    locOfArrow = section
                }
                
            }
            section.classList.remove('active');
        }

        locOfArrow.classList.add('active');
        console.log(locOfArrow.innerHTML);
    })
}
*/

