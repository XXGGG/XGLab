// 定义数字
const a:number = 1;
console.log(a);

// 定义数组
const b:Array<string|number> = ['a','1',3]
console.log(b);

// 定义对象
const c:{d:number,f:string} = {
    d:1,
    f:'2',
}
console.log(c); 

// 定义接口
interface IProps {
    d: number;
    f: string;
}
const d: IProps = {
    d: 1,
    f: '2',
}
console.log(d);

// 定义函数
const e = (props: IProps) => {
    console.log(props);
}
e(d);

// 联合类型
const f: IProps | number = d;
console.log(f);

// 可选属性
interface IProps2 {
    d: number;
    f?: string;
}
const g: IProps2 = {
    d: 1,
}
console.log(g);


