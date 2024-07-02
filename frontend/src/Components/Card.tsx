import React from "react";
import { FiEdit, FiDelete } from "react-icons/fi";

interface CardProps {
  image: string;
  title: string;
  description: string;
  address: string;
  price: number;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  address,
  price,
}) => {
  return (
    <div className="relative bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
        <p className="text-gray-400">
          <span className="font-semibold">Address:</span> {address}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-white font-semibold">${price}</p>
          <div className="flex gap-2">
            <button className="text-gray-300 hover:text-white">
              <FiEdit className="text-xl" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <FiDelete className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
