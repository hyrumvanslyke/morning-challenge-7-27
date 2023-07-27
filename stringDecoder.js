function decoder(code){
    let newString = code.split('')
    let result = ''
    for(let i =0; i < newString.length; i++){
        if(!isNaN(+newString[i])){
             i+= +newString[i]
        }else{
            result += newString[i]
        }
    }
    return result
}

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))