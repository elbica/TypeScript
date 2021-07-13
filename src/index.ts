//object 속성 정의, interface 는 컴파일되지 않는다. -> 대안 : class 사용
interface Human{
    name: string;
    age: number;
    gender: string;
}

//class 정의
class Human2{
    public name:string;
    public age: number;
    public gender: string;
    constructor(name: string, age : number, g: string){
        this.name = name;
        this.age = age;
        this.gender = g;
    }
}
const person={
    name:"nico",
    age: 22,
    gender: "male"
}
const lynn = new Human2("lynn", 22, "ged");
const sayHi = (name, age, gender?)=>{
    console.log(`hello ${name}, you are ${age}, ${gender}!!!`);
}

const reHi = (person: Human): string =>{
    return `Re Hello ${person.name}`
}
console.log(reHi(person))


export {}