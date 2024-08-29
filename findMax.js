function findMax(arr){
    // let res =  arr.sort((a,b)=>b-a)
    // return res[0]

    let res = Math.min(...arr)
    return res
}

console.log(findMax([5,6,7,91,6,48,32]));