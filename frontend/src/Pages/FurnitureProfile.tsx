import React, { useContext, ChangeEvent, FormEvent } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { AppContext, Context } from "../Context/UseContext";
import axios from "axios";

interface FurnitureProfileProps {}

const FurnitureProfile: React.FC<FurnitureProfileProps> = () => {
  const navigate = useNavigate();
  const { rented, setRented } = useContext(AppContext) as Context;

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function sendRequest() {
    try {
      const res = await axios.post<{ id: string }>(
        `${BACKEND_URL}/api/v1/user/signin`,
        rented
      );
      setRented({
        ...rented,
        id: res.data.id,
      });
      // Navigate to the appropriate route after submission
      navigate("/addFurniture");
    } catch (e) {
      alert("Error while logging in");
    }
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRented((prevRented) => ({
      ...prevRented,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />

      <form
        className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto mt-12 md:mt-24 px-4"
        onSubmit={handleSubmit}
      >
        <p className="font-bold text-2xl md:text-3xl mb-8">Edit Furniture</p>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <label className="text-sm">Furniture Title</label>
              <input
                type="text"
                name="title"
                value={rented.title}
                onChange={handleInputChange}
                className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              />
              <p className="text-sm text-gray-400">
                Mention the key features of your item (e.g., brand, model name)
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <label className="text-sm">Description</label>
              <textarea
                name="description"
                value={rented.description}
                onChange={handleInputChange}
                className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full h-36 resize-none"
              ></textarea>
              <p className="text-sm text-gray-400">
                Include condition, features, and reason for selling
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <label className="text-sm">Set a Price</label>
              <input
                type="text"
                name="price"
                onChange={handleInputChange}
                className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              />
              <p className="text-sm text-gray-400">
                Enter the price at which you wish to rent out
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <label className="text-sm">Type of Furniture</label>
              <select
                name="type"
                value={rented.type}
                onChange={handleInputChange}
                className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              >
                <option value="">Select a type</option>
                <option value="Sofa">Sofa</option>
                <option value="Chair">Chair</option>
                <option value="Table">Table</option>
                <option value="Bed">Bed</option>
                <option value="Desk">Desk</option>
                <option value="Wardrobe">Wardrobe</option>
                <option value="Bookshelf">Bookshelf</option>
                <option value="Dining Table">Dining Table</option>
                <option value="Coffee Table">Coffee Table</option>
                <option value="TV Stand">TV Stand</option>
                <option value="Dresser">Dresser</option>
                <option value="Nightstand">Nightstand</option>
                <option value="Cabinet">Cabinet</option>
                <option value="Recliner">Recliner</option>
                <option value="Ottoman">Ottoman</option>
              </select>
            </div>

            <div className="flex flex-col space-y-4">
              <label className="text-sm">Quantity</label>
              <input
                type="text"
                name="quantity"
                onChange={handleInputChange}
                className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              />
              <p className="text-sm text-gray-400">
                Enter the quantity of the product
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <label className="text-sm">Upload a Photo</label>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 border-2 border-gray-400 flex justify-center items-center">
                  <label
                    htmlFor="img-upload"
                    className="text-sm font-medium text-gray-900 dark:text-white border-black border-2 cursor-pointer flex items-center justify-center w-full h-full"
                  >
                    <MdOutlineAddAPhoto className="py-1" size={24} />
                  </label>
                  <input type="file" id="img-upload" className="hidden" />
                </div>
                <span className="text-sm text-gray-400">
                  Upload a photo of the item
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-48 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Post Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FurnitureProfile;
