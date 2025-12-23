let subs:number | string="1M"

let apiRequestStatus:'pending'|'success'|'error'='pending'

apiRequestStatus="success"

let airLineSeat:'aisle'|'window'|'middle'='middle'
airLineSeat='window'

const orders=['12','20','18','90']

let currentorder:string | undefined
for(let order of orders){
    if(order==='20'){
        currentorder=order
        break
    }
    currentorder='11';
}
console.log(currentorder);