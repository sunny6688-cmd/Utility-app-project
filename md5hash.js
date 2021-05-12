window.onload = () => {
    const md5btn = document.querySelector("#mdhashbutton");
    const md5input = document.querySelector("#mdhashinput");
    const md5output = document.querySelector("#mdhashoutput");
    function md5encode(input_str){
        const algo = 'md5';
        const md5_hash = crypto.createHash(algo).update(input_str).digest('hex');
        return md5_hash;
    }
    md5btn.addEventListener("click", () => {
        if(md5input.value === ""){
            window.confirm("You have not provided input string.")
        }
        md5output.value = md5encode(md5input.value);
        console.log(md5output.value);
    })
}