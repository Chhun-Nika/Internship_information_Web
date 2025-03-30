import React from "react";
import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

const ItemBox = ({ logo, company, picture, tittle, description, link, item }) => {

  // initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorite = localStorage.getItem("favorites");
    return savedFavorite ? JSON.parse(savedFavorite) : [];
  });

  // handle when the favorite btn is clicked
  const handleFavoriteClick = (item) => {
    // checking if the job exist in the favorite yet
    const isFavorite = favorites.some(fav => fav.tittle === item.tittle);

    let updatedFavorites;
    if (isFavorite) {
      // if it exists remove from the favorite
      updatedFavorites = favorites.filter(fav => fav.tittle !== item.tittle);
    } else {
      updatedFavorites = [...favorites, item]
    }

    // Update the state and localStorage
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    window.location.reload();
  }

  // Check if the current item is in the favorites
  const isFavorite = favorites.some(fav => fav.tittle === item.tittle);


  return (
    <div className="bg-white shadow-lg rounded-xl max-w-sm border border-gray-200 font-quicksand mb-5">
        
      {/* Company Logo */} 
      <div className="flex items-center text-center p-2 pl-8 pr-8 gap-4">
        <img src={logo} alt="Company Logo" className="w-15 h-auto" />
        <span className="text-xl darkgray-color font-bold ">{company}</span>
      </div>
    
      <div>
       <hr className="border-t-2 border-black opacity-10 shadow-[0px_2px_6px_rgba(0,0,2,2)] w-full max-w-[100%] mx-auto" />
      </div>

      {/* Job Image */}
      <div className="p-3">
        <div className="flex items-start pl-2">
          <img src={picture} alt={tittle} className="w-43 h-auto" />
        </div>
        {/* Job Title & Description */}
        <h3 className="text-[28px] font-bold main-color font-quicksand pl-6">{tittle}</h3>
        <p className="text-xs font-medium darkgray-color text-sm mt-2 pt-2 pl-6 h-15 leading-relaxed">{description}</p>
        {/* Learn More Button */}
        <div className="flex items-center justify-between p-5">
          <a href={link}>
            <button className="bg-[#133e87] text-white font-semibold px-4 py-2 rounded-full w-36 h-13 mt-2 mb-2 hover:bg-[#2E6BB7] transition-colors duration-300 ease-in-out hover:cursor-pointer">
              Learn more
            </button>
          </a>
          {/* Heart Icon */}
          <div 
            onClick={() => handleFavoriteClick(item)}
            className="transition-transform duration-200 ease-in-out transform hover:scale-110"
          >
            {isFavorite ? (
              <IoHeartSharp className="text-4xl text-red-500 cursor-pointer" />
            ) : (
              <IoHeartOutline className="text-4xl gray-color cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
