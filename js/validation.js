function formChecker(value,len) {
    if(value.trim().length > len) {
        return true; 
    } else {
        return false; 
    }
}

function validateEmail(email,newsletter) {
    const regEx = /\S+@\S+\.\S+/; 
    const patternMatches = regEx.test(email,newsletter); 
    return patternMatches;
}