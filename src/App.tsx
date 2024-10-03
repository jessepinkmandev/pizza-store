import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Menu } from "./components/Menu";
import { FormEvent, useEffect, useState } from "react";
import { db } from "./firebase.js";
import {
  query,
  collection,
  onSnapshot,
  QuerySnapshot,
  addDoc,
} from "firebase/firestore";
import { Details } from "./components/Details";
import { AuthContextProvider } from "./context/AuthContext.js";
import { Cart } from "./components/Cart.js";
import Success from "./components/Success.js";
import ProtectedRoutes from "./components/ProtectedRoutes.js";

type typePizArr = {};

function App() {
  const [cartPizza, setCartPizza] = useState<[]>([]);
  const [pizza, setPizza] = useState<[]>([]);
  const [input, setInput] = useState({
    name: "",
    address: "",
    contact: 0,
  });
  console.log(QuerySnapshot);

  useEffect(() => {
    const p = query(collection(db, "pizzas"));
    const unsubscribe = onSnapshot(p, (QuerySnapshot) => {
      let pizzaArr: typePizArr[] | any = [];
      QuerySnapshot.forEach((pizza) => {
        pizzaArr.push({ ...pizza.data(), id: Math.random() });
      });
      setPizza(pizzaArr);
      console.log(pizzaArr);
    });
    return () => unsubscribe();
  }, []);

  const createData = async (e: FormEvent) => {
    await addDoc(collection(db, "details"), {
      name: input.name,
      address: input.address,
      contact: input.contact,
    });
    console.log(e);
  };

  return (
    <BrowserRouter basename={"/pizza-store/"}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="success" element={<Success />} />

            <Route
              path="menu"
              element={
                <ProtectedRoutes>
                  <Menu
                    pizza={pizza}
                    cartPizza={cartPizza}
                    setCartPizza={setCartPizza}
                  />
                </ProtectedRoutes>
              }
            />
            <Route
              path="cart"
              element={
                <ProtectedRoutes>
                  <Cart cartPizza={cartPizza} setCartPizza={setCartPizza} />
                </ProtectedRoutes>
              }
            />
            <Route
              path="details"
              element={
                <ProtectedRoutes>
                  <Details
                    setInput={setInput}
                    input={input}
                    createData={createData}
                  />
                </ProtectedRoutes>
              }
            />
          </Route>
          <Route path="*" element={<Header />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
