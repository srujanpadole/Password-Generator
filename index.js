let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let btnEl = document.getElementById("bt1")
let btnEL = document.getElementById("bt2")


function Bt() {

    btnEL.textContent = " "
    btnEl.textContent = " "
for (let i = 0; i < characters.length; i++){

        let random = Math.floor(Math.random() * characters.length)
        let ranDom = Math.floor(Math.random() * characters.length)
        btnEL.innerText += characters[ranDom]
        btnEl.textContent += characters[random]

        if(btnEL.textContent.length === 10){
            break
        }else if (btnEl.textContent.length===10){
            break;
        }
       
    }

    

}


