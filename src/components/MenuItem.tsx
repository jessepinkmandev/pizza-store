import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

type propMenuItem = {
  pizza: [];
  addToCart: (a: string, b: number, c: number) => void;
};

export const MenuItem = ({ pizza, addToCart }: propMenuItem) => {
  const [quantity, setQuantity] = useState(0);
  //

  //

  return pizza.map(
    (pizza: { id: number; url: string; name: string; price: number }) => (
      <div
        className="bg-[#EF5A6F] grid place-items-center grid-cols-5 p-4 gap-4 lg:p-8 text-[#D4BDAC] text-sm lg:text-xl md:px-24 mb-4 md:mb-8"
        key={pizza.id}
      >
        <img
          className="w-32 h-12  md:w-64 md:h-32"
          src={pizza.url}
          alt={pizza.name}
        />
        <h4>{pizza.name}</h4>
        <h4>{pizza.price}</h4>
        <select
          onChange={(e) => {
            setQuantity(+e.target.value);
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          onClick={() => {
            if (quantity > 0) {
              addToCart(pizza.name, pizza.price, quantity);
              setQuantity(0);
            }
          }}
          className="text-3xl"
        >
          <BsPlusCircle />
        </button>
      </div>
    )
  );
};
