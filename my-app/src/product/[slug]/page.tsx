import { getproductbyid } from "@/sanity/lib/data"

export default async function product({params }: {params:{slug:string}}) {

    const {slug} = params

    const list = await getproductbyid(slug)

    if (!product){
        return(

            <><p>
              No product found  </p></>
        )
    }
    
    return(
        <div className="flex justify-center py-8 bg-gray-100">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-blue-600">Car Details</h1>
      
          {/* Car Information */}
          <div className="space-y-4 text-black">
            <p className="text-lg"><span className="font-semibold">Name:</span> {list?.name}</p>
            <p className="text-lg"><span className="font-semibold">Fuel Capacity:</span> {list?.fuelCapacity}</p>
            <p className="text-lg"><span className="font-semibold">Tags:</span> {list?.tags?.join(', ')}</p>
            <p className="text-lg"><span className="font-semibold">Price per Day:</span> {list?.pricePerDay}</p>
            <p className="text-lg"><span className="font-semibold">Car Type:</span> {list?.type}</p>
            <p className="text-lg"><span className="font-semibold">Transmission:</span> {list?.transmission}</p>
            <p className="text-lg"><span className="font-semibold">Seating Capacity:</span> {list?.seatingCapacity}</p>
          </div>
      
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={list?.image || '/default-image.jpg'} // Default image if no image is provided
              alt={list?.name}
              className="w-full h-auto rounded-lg object-cover max-h-[400px]"
            />
          </div>
        </div>
      </div>
      
    )
}