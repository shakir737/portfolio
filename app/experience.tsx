'use client'

import TableExperience from "./tableExperience";



const Experience = () => {
    return (
        <section
          className=" mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
          <div className=" p-4   mx-auto relative z-10  w-full ">
            <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
              Experience <br />
            </div>
    
            <div className="mt-4 text-lg font-normal  text-neutral-800 ">
            <TableExperience />
            {/* <table className="table" >
          <thead >
                        <tr>
                          <div className="flex items-center justify-between gap-10 border">
                            <div>
                            <th>Serial</th>
                            </div>
                            <div>
                            <th>Title </th></div>
                            <div><th>Specialization</th></div>
                            <div>
                            <th>Passing Year </th></div>
                           
                          </div>
                        </tr>
                      </thead>
                      <tbody></tbody>
          </table> */}
            </div>
            <div className="md:flex items-center justify-center  px-10 ">
              
            </div>
          </div>
        </section>
      );
}
 
export default Experience;