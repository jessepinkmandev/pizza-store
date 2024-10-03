import { AiFillDelete } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type propCart = {
  cartPizza: [];
  setCartPizza?: any;
};

export const Cart = ({ cartPizza, setCartPizza }: propCart) => {
  const navigate = useNavigate();
  // delete entry
  const togDelete = (a: string) => {
    const deleteItem = cartPizza.filter(
      (select: { a: string }) => select.a !== a
    );

    setCartPizza(deleteItem);
  };

  // to find total
  const total = cartPizza.reduce(
    (accumulator: number, current: { c: number; b: number }) =>
      accumulator + +current.c * current.b,
    0
  );

  // to fill the cart
  const cartDetails = cartPizza.map(
    (entry: { a: string; b: number; c: number }) => {
      const { a, b, c } = entry;

      if (a !== "" && c !== 0) {
        return (
          <div
            key={Math.random()}
            className="mt-4 flex justify-around md:px-36   "
          >
            <div className="w-12 ">{a}</div>
            <div className="w-12">{b}</div>

            <div className="w-12">{c}</div>

            <div className="w-12">{b * c}</div>
            <button
              className="absolute right-3 text-2xl md:right-[130px] md:text-3xl"
              onClick={() => togDelete(a)}
            >
              <AiFillDelete />
            </button>
          </div>
        );
      }
    }
  );

  return (
    <div>
      <div className=" mt-10 py-12 px-8 bg-[#536493] text-[#D4BDAC] gap-8  text-center">
        <button className="text-4xl">
          <BsCart />
        </button>
        <div className="mt-8 ">
          <div className="flex text-2xl justify-around md:px-36 mb-4 ">
            <div className="ml-2">Name</div>
            <div className="ml-[10px]">Price</div>
            <div>Quantity</div>
            <div className="mr-[10px]"> Total</div>
          </div>
          <>{cartDetails}</>
        </div>
        <div className="font-bold text-3xl text-center mt-8">
          {total == 0 ? null : `Total is ${total}`}
        </div>
      </div>
      <div
        onClick={() => navigate("/pizza-store/details")}
        className="text-center text-xl mx-auto bg-[#EF5A6F] text-[#D4BDAC] cursor-pointer mt-8 py-3 w-[40%]"
      >
        Checkout
      </div>
    </div>
  );
};
