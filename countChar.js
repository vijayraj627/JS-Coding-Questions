function countChar(str1,str2){
    let word = str1.split("").filter((item)=> (item.toLowerCase() === str2.toLowerCase()))
    return word.length;
}

console.log(countChar("My name is Vijayraj", "I"));