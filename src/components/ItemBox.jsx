import React from "react";

const ItemBox = ({ logo, company, picture, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl max-w-sm border border-gray-200 font-quicksand mb-5">
        
      {/* Company Logo */} 
      <div className="flex items-center text-center p-4 gap-4">
        <img src={logo} alt="Company Logo" className="w-15 h-auto" />
        <span className="text-xl darkgray-color font-bold ">{company}</span>
      </div>
    
      <div>
       <hr className="border-t-2 border-black opacity-10 shadow-[0px_2px_6px_rgba(0,0,2,2)] w-full max-w-[100%] mx-auto" />
      </div>

      {/* Job Image */}
      <div className="flex items-start">
        <img src={picture} alt={title} className=" p-4 w-45 h-auto" />
      </div>

      {/* Job Title & Description */}
      <h3 className="text-3xl font-bold main-color font-quicksand pl-6">{title}</h3>
      <p className="text-xs font-medium darkgray-color text-sm mt-2 pt-2 pl-6 h-15">{description}</p>

      {/* Learn More Button */}
      <div className="flex items-center justify-end p-5 ">
        <button className=" bg-[#133e87] text-white font-semibold px-4 py-2 rounded-full w-40 h-13">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ItemBox;
