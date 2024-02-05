let submitButton = document.querySelector("#submit-button")
let transLatorinput = document.querySelector("#translator-input")
let results = document.querySelector('#results')
let radiobuttons = document.querySelectorAll("[name='translation-section']")
let typeOfTranslation
submitButton.addEventListener("click",()=>{
    for(let choice of radiobuttons){
        if(choice.checked){
            typeOfTranslation = choice.value
        }
    }
    switch(typeOfTranslation){
        case "encode": results.innerText = encode(transLatorinput.value);
        case "translate": results.innerText = translate(transLatorinput.value);
        case "madlib": results.innerText = madlib(transLatorinput.value)
        case "search": results.innerText = ""
        let objArray = search(transLatorinput.value)
        for(let obj of objArray){
            let newStr = document.createElement("p")
            newStr.innerText = obj.symbol
            results.appendChild(newStr)
        } if(objArray.length === 0){
            results.innerText = "no emojis were found"
        };
        case "random": let ranDomCase = Math.floor(Math.random() * 4)
        if(ranDomCase === 0){
            results.innerText = encode(transLatorinput.value)
        } else if(ranDomCase === 1){
            results.innerText = translate(transLatorinput.value)
        } else if(ranDomCase === 2){
            results.innerText = madlib(transLatorinput.value)
        } else if(ranDomCase === 3){
            results.innerText = ""
        let objArray = search(transLatorinput.value)
        for(let obj of objArray){
            let newStr = document.createElement("p")
            newStr.innerText = obj.symbol
            results.appendChild(newStr)
        } if(objArray.length === 0){
            results.innerText = "no emojis were found"
        }
        }
    }
    
    
})