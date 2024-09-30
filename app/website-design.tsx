'use client'

import Image from "next/image"

const WebsiteDesign = () => {
    return (   
    <div className="text-black bg-white">
       <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
           <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
             EDUCATION <br />
      </div>
      </div>
      <div className="text-2xl  md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
      <table >
      <thead className="">
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Category</th>
                      <th>Model</th>
                      <th>Item Name</th>
                      <th>color</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total Price</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
      </table>
      </div>

 </div>
 );
}
 
export default WebsiteDesign;