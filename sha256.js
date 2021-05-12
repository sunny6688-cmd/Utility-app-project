window.onload = () => {
    const sha256input_str = document.querySelector("#sha256input");
    const sha256btn = document.querySelector("#sha256button");
    const sha256output_str = document.querySelector("#sha256output");
    function sha256Encoder(input_str){
        return crypto.createHash('sha1').update(JSON.stringify(input_str)).digest('hex');
    }
    sha256btn.addEventListener("click", () => {
        if(sha256input_str.value === ""){
            window.confirm("You have not provided input string.")
        }
        sha256output_str.value = sha256Encoder(sha256input_str.value);
        console.log(sha256output_str.value);
    })
}