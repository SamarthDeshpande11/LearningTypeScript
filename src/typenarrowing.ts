function getChai(kind:string|number){
    if(typeof kind==='string'){
        return `making ${kind} chai.....`
    }
    return `chai order: ${kind}`
}

function serveChai(msg?:string){
    if(msg){
        return `serving ${msg}`
    }
    return `sering default masala chai`
}

function orderChai(size:'medium'|'small'|'large'|number){
    if(size === 'small'){
        return `small cuttin chai`
    }
    if(size==='medium'||size==='large'){
        return `make extra chai`
    }
    return `chai order #${size}`
}

class KulhaddChai{
    serve(){
        return `serving kulhadchai`
    }
}
class Cutting{
    serve(){
        return `Serving cutting Chai`
    }
}
function serve(chai:KulhaddChai|Cutting){
    if(chai instanceof KulhaddChai){
        return chai.serve();
    }
}

type ChaiOrder={
    type:string
    sugar:number
} 
function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj==="object" &&
        obj!== null &&
        typeof obj.type==='string'&&
        typeof obj.sugar==='number'
    )
}

function serveOrder(item:ChaiOrder|string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} `
    }
    return `serving custom chai:${item}`
}

type MasalaChai={type:'masala'; spicelevel:number}
type GingerChai={type:'ginger'; amount:number}
type ElaichiChai={type:'eliachi'; aroma:number}

type Chai=MasalaChai|GingerChai|ElaichiChai
function MakeChai(order:Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`
            break;

        case "eliachi":
            return `eliachi Chai`
            break;

        case "ginger":
            return `ginger Chai`
            break;

        default:
            break;
    }
}

function brew(order:MasalaChai|GingerChai){
    if("spicelevel" in order){

    }
}
function isStringArray(arr:unknown):arr is string[]{
    
}