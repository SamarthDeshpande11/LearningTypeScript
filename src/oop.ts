// class Chai{
//     flavour:string;
//     price:number;

//     // constructor(flavour:string,price:number){
//     //     this.flavour=flavour
//     //     this.price=price
//     // }

//     constructor(flavour:string){
//         this.flavour=flavour
//         console.log(this)
//     }
// }
// const masalaChai=new Chai("Ginger")
// masalaChai.flavour="masala"

class Chai{
    public flavor:string="Masala"

    private secretIngredients="Cardamom"
    reveal()
    {
        return this.secretIngredients
    }
}
class Shop{
    protected shopName="Chai corner"
}
class Branch extends Shop{
    getNamme(){
        return this.shopName
    }
}
class Walet{
    #balance=100
    getBalance(){
        return this.#balance
    }
}
const w=new Walet()
class Cup{
    readonly capacity:number=250
    constructor(capacity:number){
        this.capacity=capacity
    }
}
class ModernChai{
    private _sugar=2
    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        if(value>5) throw new Error("Too sweer")
            this._sugar=value
    }
}
const c=new ModernChai()
c.sugar=3

class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat
    }
}