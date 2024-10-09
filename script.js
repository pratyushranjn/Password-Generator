let btn = document.querySelector("button");

function generateRandomText(length = 10 ){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#&*$!?';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

btn.addEventListener("click", () => {
    const passWord =  generateRandomText();
    document.querySelector("#inp-box").value = passWord;
    console.log(passWord);
})