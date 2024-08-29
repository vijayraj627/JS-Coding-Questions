//Longest String in an array
function longestStingArray(str){
    word =  str.split(' ').sort((a,b)=>b.length-a.length);
    return word[0];
}

console.log(longestStingArray("My name is Vijayraj and I am a React Developer"));