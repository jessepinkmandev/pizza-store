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
import { Error } from "./Error.tsx";
import { ErrorBoundary } from "react-error-boundary";
import RedirectRoute from "./components/RedirectRoute.tsx";

type typePizArr = {};

function App() {
  const [cartPizza, setCartPizza] = useState<[]>([]);
  const [pizza, setPizza] = useState<[]>([]);
  const [input, setInput] = useState({
    name: "",
    address: "",
    contact: 0,
  });

  useEffect(() => {
    const p = query(collection(db, "pizzas"));
    const unsubscribe = onSnapshot(p, (snapshot: QuerySnapshot) => {
      let pizzaArr: typePizArr[] | any = [];
      snapshot.forEach((pizza) => {
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
    <BrowserRouter>
      <AuthContextProvider>
        <ErrorBoundary FallbackComponent={Error}>
          <Routes>
            <Route path="/pizza-store/" element={<Header />}>
              <Route
                path="/pizza-store/signin"
                element={
                  <RedirectRoute>
                    <SignIn />
                  </RedirectRoute>
                }
              />
              <Route
                path="/pizza-store/signup"
                element={
                  <RedirectRoute>
                    <SignUp />
                  </RedirectRoute>
                }
              />
              <Route path="/pizza-store/success" element={<Success />} />

              <Route
                path="/pizza-store/menu"
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
                path="/pizza-store/cart"
                element={
                  <ProtectedRoutes>
                    <Cart cartPizza={cartPizza} setCartPizza={setCartPizza} />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/pizza-store/details"
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
            <Route path="*" element={<Error />} />
          </Routes>
        </ErrorBoundary>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
