let currentColor=0;
let currentStyle=0;
let colorCount=4;
let styleCount=2;

// switches the currentStyle variable and updates the style
function nextStyle(){
    if (currentStyle<styleCount){
        currentStyle++;
    }else{
        currentStyle=0;
    }
    showStyle();
}
// switches the currentColor variable and updates the style
function nextColor(){
    if (currentColor<colorCount){
        currentColor++;
    }else{
        currentColor=0;
    }
    showStyle();
}

// designs adapted from https://www.tinkercad.com/things/elJW3eTgCqX and https://www.tinkercad.com/things/cXbaayCWK5F

var redBangs = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=1392d05b-c58b-43d5-9717-b3f6804ed21e";
var brownBangs = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=44ba89e0-1860-4649-8af3-a12ae2561696";
var blondeBangs = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=1bc7624a-4e82-4f12-bd08-d5f006cc8c0a";
var greenBangs = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=6a85cc2e-8971-41fc-9bf6-452c4a482a75";
var blondeSidePart = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=d9969c8c-b1f8-4194-a054-699f0c72e106";
var brownSidePart = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=da5d120a-c776-4555-b73a-97cc65621313";
var redSidePart = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=d0633ba1-01bf-49b1-9774-cfd4dc4929fb";
var greenSidePart = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=19c72594-7764-44c9-b064-30cd11562066";
var redShort = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=e02ad510-4956-4b36-a075-47f608b42cf9";
var brownShort = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=848863b6-baba-4efb-8204-34730b1936ed";
var greenShort = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=18475c67-65d9-4b02-9f6c-cc15b9e0a3ec";
var blondeShort = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=d2f5fb4f-5fd1-4c9a-9251-5c7e8188e2f0";


// calls getLink and displays the attatched object 
function showStyle(){
    if(currentStyle==0&currentColor==0){
        document.getElementById('api').src = redBangs;
    }else if(currentStyle==0&currentColor==1){
        document.getElementById('api').src = brownBangs;
    }else if(currentStyle==0&currentColor==2){
        document.getElementById('api').src = blondeBangs;
    }else if(currentStyle==0&currentColor==3){
        document.getElementById('api').src = greenBangs;
    }else if(currentStyle==1&currentColor==0){
        document.getElementById('api').src = redSidePart;
    }else if(currentStyle==1&currentColor==1){
        document.getElementById('api').src = brownSidePart;
    }else if(currentStyle==1&currentColor==2){
        document.getElementById('api').src = blondeSidePart;
    }else if(currentStyle==1&currentColor==3){
        document.getElementById('api').src = greenSidePart;
    }else if(currentStyle==2&currentColor==0){
        document.getElementById('api').src = redShort;
    }else if(currentStyle==2&currentColor==1){
        document.getElementById('api').src = brownShort;
    }else if(currentStyle==2&currentColor==2){
        document.getElementById('api').src = blondeShort;
    }else if(currentStyle==2&currentColor==3){
        document.getElementById('api').src = greenShort;
    }
}