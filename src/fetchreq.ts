import axios from "axios";

interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}
const fetchData=async()=>{
    try {
        const rresponse=await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        if(!Response.ok){
            throw new Error(`HTTp error ${Response.status}`);
        }
        const data:Todo=await Response.json()
    } catch (error:any) {
    }
}