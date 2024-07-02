import image from "../assets/hero.png";

const CardHome = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste sapiente, eum voluptatibus corporis unde? Quos illo dolorum deserunt rem totam fuga nihil ipsa. Dolor, quibusdam eaque? Ipsa, saepe possimus?";

  return (
    <div className="relative bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={image}
        alt="Furniture"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">Chair</h3>
        <p className="text-gray-400 mb-2">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
        <p className="text-gray-400">
          <span className="font-semibold">Address:</span> Odoo Hackathon,
          Gandhinagar, Ahmedabad
        </p>
      </div>
    </div>
  );
};

export default CardHome;
