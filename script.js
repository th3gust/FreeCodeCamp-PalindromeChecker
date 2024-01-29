const textInput = document.getElementById('text-input')
const checkButton = document.getElementById('check-btn')
const resultDiv = document.getElementById('result')
const resultParagraph = document.getElementById("result-p")

resultDiv.classList.add('hidden')


const cleanText = (text) =>{
    const lowerCasedText = text
    const regex =/[^A-Za-z0-9]/gi
    const cleanText = lowerCasedText.replace(regex,'').toLowerCase()
    console.log(cleanText)
    return cleanText
}

const palindromeCheck = (text) => {
    const cleanedText = cleanText(text)
    const reverseCleanedText = cleanedText.split('').reverse().join('')
    let palindromeResult = ""
    if (cleanedText == reverseCleanedText){
        palindromeResult = "is"
    }else{
        palindromeResult = "is not"
    }
    resultDiv.classList.remove('hidden')
    resultParagraph.innerHTML = `<strong>${text}</strong> ${palindromeResult} a palindrome.`
}



const  handleCheck = () =>{
    if(textInput.value === ""){
        alert('Please input a value')
    } else{
        palindromeCheck(textInput.value)
        textInput.value = ''
    }
}

checkButton.addEventListener('click', handleCheck)

document.addEventListener('keydown', e =>{
    if (e.key === "Enter"){
        handleCheck()
    }
})