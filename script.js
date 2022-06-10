let currentColor=0;
let currentStyle=0;
let colorCount=4;
let styleCount=3;

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

var hairstyles = [[],[],[]];

hairstyles[0][2] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=1392d05b-c58b-43d5-9717-b3f6804ed21e"; //redBangs
hairstyles[0][0] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=44ba89e0-1860-4649-8af3-a12ae2561696"; //brownBangs
hairstyles[0][1] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=1bc7624a-4e82-4f12-bd08-d5f006cc8c0a"; //blondeBangs
hairstyles[0][3] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=6a85cc2e-8971-41fc-9bf6-452c4a482a75"; //greenBangs
hairstyles[1][1] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=d9969c8c-b1f8-4194-a054-699f0c72e106"; //blondeSidePart
hairstyles[1][0] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=da5d120a-c776-4555-b73a-97cc65621313"; //brownSidePart
hairstyles[1][2] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=d0633ba1-01bf-49b1-9774-cfd4dc4929fb"; //redSidePart
hairstyles[1][3] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=19c72594-7764-44c9-b064-30cd11562066"; //greenSidePart
hairstyles[2][2] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=e02ad510-4956-4b36-a075-47f608b42cf9"; //redShort
hairstyles[2][0] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=848863b6-baba-4efb-8204-34730b1936ed"; //brownShort
hairstyles[2][3] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=18475c67-65d9-4b02-9f6c-cc15b9e0a3ec"; //greenShort
hairstyles[2][1] = "https://api.echo3D.co/facear?key=cool-leaf-2265&entry=d2f5fb4f-5fd1-4c9a-9251-5c7e8188e2f0"; //blondeShort

// calls getLink and displays the attatched object 
function showStyle(){
    document.getElementById('api').src = hairstyles[currentStyle][currentColor];
}