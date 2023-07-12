class Car{
    constructor(name){
        this.name = name;
    }
    present(){
       return `I have a ${this.name}`;
    }
}
const myCar = new Car("ford");
console.log(myCar.present());

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }
    show(){
        return `${this.present()} it is a ${this.model}`
    }
}

// const myModel = new Model('henry', 'benz');
// console.log(myModel);

const mycar = new Model("Ford", "Mustang");
console.log(mycar.show());

