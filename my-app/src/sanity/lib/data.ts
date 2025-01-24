import { error } from "console"
import { client } from "./client"


// types.ts
export interface ICarRental {
    _id: string; // Sanity's auto-generated unique ID for the document
    name: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    image: string;
    tags: string[];
  }
  
    
export async function getAllproduct(){

try{
    
const queryAllproduct = `*[_type == "car"]{
    _id,
    name,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
     "image": image.asset->url,
    tags
  }`

const product= await client.fetch(queryAllproduct)
return product

}

catch(error){
    console.log(error)
}
}


export async function getproductbyid(id:string){

  try{
      
  const queryproduct = `*[_type == "car" && _id == $id][0]{
      _id,
      name,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
       "image": image.asset->url,
      tags
    }`
  
  const productO : ICarRental= await client.fetch(queryproduct, {id})
  return productO ? productO : null
  
  }
  
  catch(error){
      console.log(error)
  }
  }
  