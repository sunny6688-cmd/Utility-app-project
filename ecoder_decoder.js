window.onload = () => {
    const ecdbtn = document.querySelector("#encodebutton");
    const dcdbtn = document.querySelector("#decodebutton");
    const input_area = document.querySelector("#edinput");
    const output_area = document.querySelector("#edoutput");
    function base64Encode(input_str){
        const base64 = btoa(input_str);
        return base64;
    }
    function base64Decode(input_str){
        const actual_val = atob(input_str);
        return actual_val;
    }
    ecdbtn.addEventListener("click", () => {
        output_area.value = base64Encode(input_area.value);
        console.log(output_area.value);
    })
    dcdbtn.addEventListener("click", () => {
        output_area.value = base64Decode(input_area.value);
        console.log(output_area.value);
    })
}