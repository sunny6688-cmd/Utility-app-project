window.onload = () => {
    const rhinput = document.querySelector("#hex-rgbinput")
    const redoutput = document.querySelector("#routput");
    const greenoutput = document.querySelector("#goutput");
    const blueoutput = document.querySelector("#boutput");
    const Rhbtn = document.querySelector("#Rhbutton");
    function hextorgb(hex){
        let r = 0, g = 0, b = 0;
        if(hex.length == 4){
           r = "0x" + hex[1] + hex[1];
           g = "0x" + hex[2] + hex[2];
           b = "0x" + hex[3] + hex[3];
        }else if (hex.length == 7){
           r = "0x" + hex[1] + hex[2];
           g = "0x" + hex[3] + hex[4];
           b = "0x" + hex[5] + hex[6];
        };
        return{
           red: +r,
           green: +g,
           blue: +b
        };
    }
    Rhbtn.addEventListener("click", () => {
        if(rhinput.value === ""){
            window.confirm("You have not provided input string.")
        }
        const rgb_obj = hextorgb(rhinput.value);
        console.log(rgb_obj);
        redoutput.value = rgb_obj["red"];
        greenoutput.value = rgb_obj["green"];
        blueoutput.value = rgb_obj["blue"];
    })
}