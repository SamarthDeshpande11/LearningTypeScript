const chaiFlavours:string[]=["masala","adrak"]
const chaiPrice:number[]=[10,20]
const rating:Array<number>=[4.5,5.0]

type Chai={
    name:String;
    price:number
}
const menu:Chai[]=[
    {name:"Masala",price:15},
    {name:'Adrak',price:25},
]
const cities:readonly string[]=["Delhi","Jaipur"]
//cities.push("Pune")

const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

let ChaiTuple:[string,number];
ChaiTuple=[20,"Masala"]
ChaiTuple=["Masala",20]

let userInfo:[string,number,boolean?]
userInfo=["Sam",100]
userInfo={"Sam",100,true}

const location:readonly[number,number]=[28.66,32.22]

const chaiItems:[name:string,price:number]=["Masala",25]

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}
const size=CupSize.LARGE

enum status{
    PENDING=100,
    SERVED,
    CANCELLED
}
enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}
function makeChai(type:ChaiType){
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER)
// makeChai("masala")

enum RandomEnum{
    ID=1,
    NAME="chai"
}
const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}
const s=Sugars.HIGH

let t:[string,number]=["chai",10]
t.push("extra")