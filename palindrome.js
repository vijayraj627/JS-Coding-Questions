function palindrome(str){
    let word = str.split("").reverse().join("")
    return word === str ? true : false;
}

console.log(palindrome("racecar"))