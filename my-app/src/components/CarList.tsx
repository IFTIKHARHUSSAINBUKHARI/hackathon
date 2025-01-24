import cars from '@/sanity/cars'
import { getAllproduct, ICarRental } from '@/sanity/lib/data'
import React from 'react'

export default async function CarList() {

const products:ICarRental[] = await getAllproduct()
console.log(products)


  return (
    
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product) => (


    <a href={`/product/${product._id}`} key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-[400px] h-[200px] object-cover"/>
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800">{product.name}</h1>
        <p className="text-gray-500 text-sm">{product.type}</p>
        <p className="text-gray-500 text-sm">{product.transmission}</p>
        <p className="text-gray-500 text-sm">{product.fuelCapacity} L</p>
        <p className="text-gray-800 text-lg font-semibold mt-2">${product.pricePerDay} / day</p>
        <p>{product.seatingCapacity}</p>
        <div className="mt-3">
          <h2 className="text-sm text-gray-600">Tags:</h2>
          <p className="text-sm text-gray-500">{product.tags.join(", ")}</p>
        </div>
      </div>
    </a>
  ))}
</div>



    
  )
}
