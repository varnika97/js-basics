class persons{
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    work()
    {

        const str = "always busy";
        return  `my name is ${this.name} + str + new.Date()- ${this-age}`;
    }

}
const obj = new persons("jaswitha",2021)
console.log(obj);