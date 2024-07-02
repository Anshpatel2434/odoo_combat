import React from "react";
import Card from "./Card";
import chairImage from "../assets/chair.jpg";

const EditFurnitureCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[300%]">
      <Card
        image={chairImage}
        title="Chair"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        address="Odoo hackathon, Gandhinagar, Ahmedabad"
        price={1000}
      />
      <Card
        image={chairImage}
        title="Chair"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        address="Odoo hackathon, Gandhinagar, Ahmedabad"
        price={1000}
      />
      <Card
        image={chairImage}
        title="Chair"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        address="Odoo hackathon, Gandhinagar, Ahmedabad"
        price={1000}
      />
      <Card
        image={chairImage}
        title="Chair"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        address="Odoo hackathon, Gandhinagar, Ahmedabad"
        price={1000}
      />
      <Card
        image={chairImage}
        title="Chair"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        address="Odoo hackathon, Gandhinagar, Ahmedabad"
        price={1000}
      />
      <Card
        image={chairImage}
        title="Chair"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        address="Odoo hackathon, Gandhinagar, Ahmedabad"
        price={1000}
      />
      <Card
        image={chairImage}
        title="Chair"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        address="Odoo hackathon, Gandhinagar, Ahmedabad"
        price={1000}
      />
    </div>
  );
};

export default EditFurnitureCard;
