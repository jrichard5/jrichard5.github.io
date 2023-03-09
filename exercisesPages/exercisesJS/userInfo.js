window.onload = function() {
    historyElements();
    locationObject();
    navObject();
    screenTime();
}



function giveMeTheObjectForStringOutput(objectThingy, firstOutputString, idOfHTML){
    let output = firstOutputString
    let location = objectThingy;

    for(let myProp in location){
        if (typeof location[myProp] === 'object' && location[myProp] !== null){
            output += "<ul>"
            for(let insideProp in location[myProp]){
                if(typeof location[myProp][insideProp] != 'function'){
                    output +=`<li>${insideProp} is currently ${location[myProp][insideProp] ? location[myProp][insideProp] : '--i got nothing--:('}</li>`
                }
            }
            output += "</ul>"
        }
        if(typeof location[myProp] != 'function'){
            output +=`<li>${myProp} is currently ${location[myProp] ? location[myProp] : '--i got nothing--:('}</li>`
        }
        
    }
    document.querySelector("#"+ idOfHTML).innerHTML = output;
}


function historyElements(){
    let history = window.history;
    let output = "The History's Objects properties:  ";
    
    for(let element in history){
        output += `<li>${element}</li>`
    }

    document.querySelector("#historyObject").innerHTML = output
}

function locationObject(){
    let location = window.location;
    giveMeTheObjectForStringOutput(location, "The Location's Objects non function's Properties:  ", "locationObject");
}

function navObject(){
    let nav = window.navigator;
    giveMeTheObjectForStringOutput(nav, "The Navigators Objects non function's Properties:  ", "navObject");
}

function screenTime(){
    let screen = window.screen;
    giveMeTheObjectForStringOutput(screen, "The Screen Objects non function's Properties:  ", "screenObject")
}

/*
function locationObject(){
    let output = "The Location's Objects non function's Properties:  "
    let location = window.location
    console.log(location);
    for(let myProp in location){
        if(typeof location[myProp] != 'function'){
            output +=`<li>${myProp} is currently ${location[myProp] ? location[myProp] : '--i got nothing--:('}</li>`
        }
        
    }
    document.querySelector("#locationObject").innerHTML = output;

}
*/

