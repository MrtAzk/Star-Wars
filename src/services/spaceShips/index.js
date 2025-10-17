import axios from "axios";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/starships'
});

export const getShips=async()=>{
    try {
        const res= await instance.get("/")
        return res.data
        
    } catch (error) {
        
    }

}