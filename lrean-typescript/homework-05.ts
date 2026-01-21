function calcArea(width:number,height:number):number {
    return width * height
}

function getProfile(username:string,avatarUrl?:string){
    if(!avatarUrl){
        return `Url: [${username}],Avatar:default.png`
    }else{
        return avatarUrl
    }
}

console.log(calcArea(23,24))
console.log(getProfile("xxg"))