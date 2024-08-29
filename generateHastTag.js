function generateHastTag(str){
    let word = str.split(" ")
    let res = word.map((item)=> item.replace(item[0],item[0].toUpperCase()))
    return `#${res.join("")}`
}

console.log(generateHastTag("My name is Vijayraj"));