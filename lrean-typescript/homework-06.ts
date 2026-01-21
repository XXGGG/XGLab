type Direction = "up" | "down" | "left" | "right"

function move(dir:Direction){
    console.log(`Moving [${dir}]`)
}

move("up")
move("forward")
// 虽然还是能打印出来....