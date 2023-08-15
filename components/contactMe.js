import React from "react";
import Form from "./form";
import Image from "next/image";


const ContactMe = () => {

   

  return (
    <div className="p-4 flex-1 ">
      <div className="p-4 border-2 border-gray-800 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid md:grid-cols-2 gap-4">
        
        <div className="flex flex-col items-center relative justify-center ">
        <Image src="/contact.webp" width={300} height={300} className="absolute left-0 top-0 w-full h-full object-contain" alt="contact" priority  />
          </div>
       
        <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
