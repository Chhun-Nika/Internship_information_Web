import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import ItemBox from "../components/ItemBox";

const Favorite = () => {

  // Retrieve the favorite items from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-8 font-quicksand pt-15 pl-25 mb-40">
        <h1 className="main-color text-3xl font-bold mb-15"><span className="red-color">Favorite</span> Jobs</h1>
          {favorites.length === 0 ? (
          <p className="text-center gray-color font-medium mb-60">You have no favorite items yet.</p>
        ) : (
          <div className="favorites-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Loop through the favorites and display them */}
            {favorites.map((item, index) => (
              <ItemBox
                key={index}
                logo={item.logo}
                company={item.company}
                picture={item.picture}
                tittle={item.tittle}
                description={item.desciption}
                link={item.link}
                item={item} // pass the item to ItemBox
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Favorite;