interface Car {
    readonly brand:string;
    price:number
    color?:string
}


const myCar:Car = {
    brand:"特斯拉",
    price:239999,
    color:"pink",
}

// myCar.brand = "奔驰" 
// 无法为“brand”赋值，因为它是只读属性。

const yourCar:Car = {
    brand:"五菱宏光",
    price:43990,
}