import { useState } from "react";
import EditFurnitureCard from "../Components/EditFurnitureCard";
import Navbar from "../Components/Navbar";
import { MdAddBusiness } from "react-icons/md";
import TagCard from "../Components/TagCard";
import { useNavigate } from "react-router-dom";

const AddFurniture = () => {
  const [showChildCards, setShowChildCards] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-x-hidden relative min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Button to navigate to /furnitureProfile */}
      <button
        className="fixed top-28 left-5 z-50 flex items-center bg-red-700 bg-opacity-80 text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300 ease-in-out"
        onClick={() => {
          navigate("/furnitureProfile");
        }}
      >
        <MdAddBusiness className="mr-2 text-2xl" /> Add Your Furniture
      </button>

      {/* Conditional button to go back to tags */}
      {showChildCards && (
        <button
          className="fixed top-28 right-5 z-50 flex items-center bg-red-700 bg-opacity-80 text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300 ease-in-out"
          onClick={() => setShowChildCards(false)}
        >
          <MdAddBusiness className="mr-2 text-2xl" /> Go Back To Tags
        </button>
      )}

      {/* Main content */}
      <div className="flex justify-center items-center mt-32">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render TagCard components */}
            {showChildCards ? (
              <EditFurnitureCard />
            ) : (
              <>
                <TagCard
                  tagName={"Chair"}
                  picture={
                    "https://w0.peakpx.com/wallpaper/317/409/HD-wallpaper-blue-chair-lamp-stone-chandelier-chair-wall-old-blue.jpg"
                  }
                  setShowChildCards={setShowChildCards}
                />
                <TagCard
                  tagName={"Table"}
                  picture={
                    "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10"
                  }
                  setShowChildCards={setShowChildCards}
                />
                <TagCard
                  tagName={"Window"}
                  picture={
                    "https://w0.peakpx.com/wallpaper/145/738/HD-wallpaper-window-view-pretty-view-window-nature.jpg"
                  }
                  setShowChildCards={setShowChildCards}
                />
                <TagCard
                  tagName={"Sofa"}
                  picture={
                    "https://i.pinimg.com/564x/88/88/44/888844c0a9d50e697931fd2640a4a345.jpg"
                  }
                  setShowChildCards={setShowChildCards}
                />
                <TagCard
                  tagName={"Bed"}
                  picture={
                    "https://c4.wallpaperflare.com/wallpaper/424/27/651/bedroom-bed-style-interior-wallpaper-preview.jpg"
                  }
                  setShowChildCards={setShowChildCards}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFurniture;
