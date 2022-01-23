function getPhrase(){
    let phraseWrapper = document.getElementById("palindromePhrase");
    var phrase = phraseWrapper.value;

    isPalindrome(phrase);
}

function isPalindrome(phrase){
if (!phrase) return "frase inexistente";

    for (let i = 0; i < phrase.length / 2; i++){
        if (phrase[i] !== phrase[phrase.length -1 -i]) {
            alert("That's not a palindrome word"); 
        }
    }

    alert("Yup, that's a palindrome");
}




