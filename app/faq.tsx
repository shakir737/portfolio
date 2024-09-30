import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is your skills level in mern stack?</AccordionTrigger>
      <AccordionContent>
      In mern stack I able to make a complete web application from scratch to finish. Different authentication and authorization
      machanisms from start to finish.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Do You have any knowledge about Git?</AccordionTrigger>
      <AccordionContent>
       yes I have a brief knowledge of git and github. Also I have idea about Github actions CI/CD pipelines.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
      Do You have any knowledge about AWS or Azure?
      </AccordionTrigger>
      <AccordionContent>
      Yes I have idea about both of above but I have only experience to deploy apps on aws and aws aplify, either apps are only frontend or database oriented.
        
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;