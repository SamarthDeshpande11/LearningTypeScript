
import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx';
import { Counter } from './components/counters.tsx';
import type{Chai} from "./Types.ts";
import ChaiList from './components/ChaiList.tsx';
import { OrderForm } from './components/OrderForm.tsx';

const menu:Chai[]=[
  {id:1,name:"Masala",price:30},
  {id:2,name:"Ginger",price:50},
  {id:3,name:"Lemon",price:60}
]

function App() {
  

  return (
    <>
      <div>
        <h1>Vite+React</h1>
        <ChaiCard
        name="HeadPhones"
        price={5000}
        />
        <ChaiCard
        name="TV"
        price={25000}
        />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>

      <div>
        <OrderForm 
        onSubmit={(order)=>{
          console.log("Placed",order.name,order.cups);
        }}
        />
      </div>
    </>
  );
}

export default App
