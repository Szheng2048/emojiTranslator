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
    translateText()
    
    
})

let typeOfArr = ["encode","translate","madlib","search"]

//second switch statement

function translateText (){
    switch(typeOfTranslation){
        case "encode": results.innerText = encode(transLatorinput.value)
        break;
        case "translate": results.innerText = translate(transLatorinput.value)
        break;
        case "madlib": results.innerText = madlib(transLatorinput.value)
        break;
        case "search": results.innerText = ""
        let objArray = search(transLatorinput.value)
        for(let obj of objArray){
            let newStr = document.createElement("p")
            newStr.innerText = obj.symbol
            results.appendChild(newStr)
        } if(objArray.length === 0){
            results.innerText = "no emojis were found"
        }break;
        case "random": {typeOfTranslation = randomElement(typeOfArr)
        translateText()
        break}
        ;
        default : break ;
    }}