import React from "react";
import { MdAddBusiness } from "react-icons/md";

interface TagCardProps {
  tagName: string;
  picture: string;
  setShowChildCards: React.Dispatch<React.SetStateAction<boolean>>;
}

const TagCard: React.FC<TagCardProps> = ({
  tagName,
  picture,
  setShowChildCards,
}) => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste sapiente, eum voluptatibus corporis unde? Quos illo dolorum deserunt rem totam fuga nihil ipsa. Dolor, quibusdam eaque? Ipsa, saepe possimus?";

  return (
    <div className="relative bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={picture}
        alt={tagName}
        className="w-full h-72 object-cover rounded-t-lg cursor-pointer"
        onClick={() => setShowChildCards(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center text-white">
        <h3 className="text-4xl font-bold mb-4">{tagName}</h3>
        <p className="text-gray-300 mb-6">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
        <button
          className="flex items-center text-gray-300 hover:text-white transition duration-300 ease-in-out bg-transparent border border-gray-300 rounded-md px-6 py-3"
          onClick={() => setShowChildCards(true)}
        >
          <MdAddBusiness className="mr-2 text-xl" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default TagCard;
