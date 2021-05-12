window.onload = () => {
    const sha1input_str = document.querySelector("#sha1input");
    const sha1btn = document.querySelector("#sha1button");
    const sha1output_str = document.querySelector("#sha1output");
    function sha1Encoder(input_str){
        const ans = CryptoJS.SHA1(input_str);
        return ans;
    }
    sha1btn.addEventListener("click", () => {
        if(sha1input_str.value === ""){
            window.confirm("You have not provided input string.")
        }
        sha1output_str.value = sha1Encoder(sha1input_str.value);
        console.log(sha1output_str.value);
    })
}