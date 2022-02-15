const inputField = document.querySelector("#input-field");
const button = document.querySelector("#submit");
const wordList = document.querySelector("#list-of-words");
const wordListReverse = document.querySelector("#reversed-words");
const matchList = document.querySelector("#is-isnot");
const errorMsg = document.querySelector(".error-msg");

button.addEventListener("click", function(){
    let submittedWord = inputField.value.replace(/ /g, "");
    validateEntry(submittedWord);
    addToList(submittedWord, wordList);
    clearInput(inputField);
    errorMsg.style.display = "none";
    const reversedWord = reverseString(submittedWord);
    addToList(reversedWord, wordListReverse);
    if (valid == true){
        checkEqual(submittedWord, reversedWord);
        console.log("true");
    }else{
        showError();
    }
    // checkEqual(submittedWord, reversedWord);
})

var valid;

function validateEntry(){
    if (inputField.value !== ""){
        valid = true;
    } else{
        valid = false;
    }
    return valid;
}

function clearInput(){
    inputField.value = "";
}

function reverseString(str){
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}

function checkEqual(a, b){
    if (a === b){
        let matchMessage = "IS a palindrome:";
        addToList(matchMessage, matchList);
    } else{
        let noMatchMessage = "IS NOT a planindrome:"
        addToList(noMatchMessage, matchList);
    }
}

function addToList (listword, listid){
    let listItem = document.createElement("li");
    listItem.innerText = listword;
    listid.append(listItem);
}

inputField.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        button.click();
    }
})

function showError(){
    errorMsg.style.display = "flex";
}