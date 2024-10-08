import { AiFillDelete } from "react-icons/ai";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type propCart = {
  cartPizza: { a: string; b: number; c: number }[];
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

  //
  const updateQuantity = (name: string, quantity: number) => {
    const updatedCart = cartPizza.map((item) =>
      item.a === name ? { ...item, c: quantity } : item
    );
    setCartPizza(updatedCart);
  };
  // increase quantity
  const increaseQuantity = (name: string) => {
    const item = cartPizza.find((item) => item.a === name);
    if (item) {
      updateQuantity(name, item.c + 1);
    }
  };

  // decrease quantity
  const decreaseQuantity = (name: string) => {
    const item = cartPizza.find((item) => item.a === name);
    if (item && item.c > 1) {
      updateQuantity(name, item.c - 1);
    }
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
            className="mt-4 flex justify-around  text-xs lg:text-xl  "
          >
            <div className="w-12 lg:text-nowrap">{a}</div>
            <div>{b}</div>

            <div>
              <button onClick={() => decreaseQuantity(a)}>
                <BiMinusCircle size={14} />
              </button>
              <span className="mx-2  ">{c}</span>
              <button onClick={() => increaseQuantity(a)}>
                <BiPlusCircle size={14} />
              </button>
            </div>

            <div className="w-6">{b * c}</div>
            <button
              className="absolute right-5 text-2xl lg:right-[80px] lg:text-3xl"
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
      <div className=" mt-10 py-12 bg-[#536493] text-[#D4BDAC] gap-8  text-center pr-12 pl-2">
        <button className="text-4xl">
          <BsCart />
        </button>
        <div className="flex text-md lg:text-2xl justify-around lg:justify-between md:px-36 my-4 ">
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        <>{cartDetails}</>
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
