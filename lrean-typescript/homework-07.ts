function createArray<T>(length:number,value:T){
    let A = new Array(length).fill(value)
    return A
}

console.log(createArray(3,'x'))
console.log(createArray(4,123))