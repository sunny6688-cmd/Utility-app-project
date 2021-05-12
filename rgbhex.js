window.onload = () => {
    const redinput = document.querySelector("#rinput");
    const greeninput = document.querySelector("#ginput");
    const blueinput = document.querySelector("#binput");
    const Rhbtn = document.querySelector("#Rhbutton");
    const rhoutput = document.querySelector("#rgb-hexoutput")
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    Rhbtn.addEventListener("click", () => {
        if(redinput.value === "" || greeninput.value === "" || blueinput.value === ""){
            window.confirm("You have not provided all input values.")
        }
        const final_ans = rgbToHex(redinput.value,greeninput.value,blueinput.value);
        rhoutput.value = final_ans;
        console.log(final_ans);
    })
}