window.onload = () => {
    const sha512input_str = document.querySelector("#sha512input");
    const sha512btn = document.querySelector("#sha512button");
    const sha512output_str = document.querySelector("#sha512output");
    function sha512Encoder(input_str){
        return crypto.createHash('sha1').update(JSON.stringify(input_str)).digest('hex');
    }
    sha512btn.addEventListener("click", () => {
        if(sha512input_str.value === ""){
            window.confirm("You have not provided input string.")
        }
        sha512output_str.value = sha512Encoder(sha512input_str.value);
        console.log(sha512output_str.value);
    })
}