import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export type pizzaCart = {
  a: string;
  b: string;
  c: string;
};

type propMenu = {
  pizza: [];
  cartPizza: [];
  setCartPizza?;
};

export const Menu = ({ pizza, cartPizza, setCartPizza }: propMenu) => {
  //
  const addToCart = (a: string, b: number, c: number) => {
    //
    const addData = cartPizza.filter(
      (selectedPizza: pizzaCart) => selectedPizza.a != a
    );
    console.log(addData);

    //

    setCartPizza([
      ...addData,
      {
        a: a,
        b: b,
        c: c,
      },
    ]);
  };

  return (
    <div>
      <div className="my-12 grid place-content-center w-full h-[200px] text-2xl md:text-4xl text-[#D4BDAC] text-center bg-[#536493]">
        <h1>Select from a wide variety of delicious Pizzas...</h1>
      </div>

      <MenuItem pizza={pizza} addToCart={addToCart} />
      <Link to={"/cart"}>
        <div className="bg-blue-300 px-4 py-3  w-[40%] text-center mt-8 m-auto  cursor-pointer  text-xl">
          <button>
            <BsCart />
          </button>
        </div>
      </Link>
    </div>
  );
};
