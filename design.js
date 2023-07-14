function changeImage(){
    var pic=document.getElementById("bulb");
    if(pic.src.match("on"))
    {
        console.log("ON");
        pic.src="off bulb.jpeg";
    }
    else
    {
        console.log("OFF");
        pic.src="on bulb.jpeg";
    }
}