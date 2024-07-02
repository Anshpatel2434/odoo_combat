// HomeCards.jsx
import CardHome from "./CardHome";

const HomeCards = () => {
  const data = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="text-3xl text-gray-200 font-semibold ml-4 mb-6">
        Renting Options
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((items, index) => (
          <div key={index} className="flex flex-col gap-4">
            {items.map((id) => (
              <CardHome key={id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
