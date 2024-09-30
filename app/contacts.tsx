'use client'

import TableExperience from "./tableExperience";



const Contacts = () => {
    return (
        <section
          className=" mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
          <div className=" p-4   mx-auto relative z-10  w-full ">
            <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
              Contacts <br />
            </div>
    
            <div className="text-2xl py-10 md:pb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50 ">
             <div className="flext flex-col">
                <div>
                  PHONE :  (For Pakistan)      +92 3125089266  +92 3134287469
                </div>
                <div>
                  PHONE :  (For KSA)      +966 570413736  +966 516016453 
                </div>
                <div>
                  G Mail :    shakirraza737@gmail.com 
                </div>
                <div>
                  Git Hub :    https://github.com/shakir737?tab=repositories
                </div>
             </div>
            
             
             
            </div>
            <div className="md:flex items-center justify-center  px-10 ">
              
            </div>
          </div>
        </section>
      );
}
 
export default Contacts;