import AboutUs from "./AboutUs";
import { UserAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();
  const { user, logout }: any = UserAuth();
  return (
    <div>
      {user ? (
        <div className=" text-xl grid place-content-center  mt-8">
          <h1>Hello, You're Signed In With {user && user.email} </h1>
          <div className="bg-red-300 px-4 py-3  w-[50%] text-center mt-8 m-auto  cursor-pointer   text-xl">
            <button
              onClick={async () => {
                try {
                  await logout();
                  navigate("/");
                } catch (e) {
                  console.log("Logout Failed" + e);
                }
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : null}

      {!user ? (
        <div>
          <div className=" mt-12 ">
            <div className=" grid place-content-center w-full h-[300px] text-5xl text-[#D4BDAC] bg-[#536493] text-center ">
              <img
                className="max-w-[80%] mb-4 m-auto "
                src="https://media.istockphoto.com/id/1488369994/vector/vector-illustration-of-modern-pizzeria-interior-empty-restaurant-kitchen-background.jpg?s=612x612&w=0&k=20&c=phb-i7fzE0-0Mc85vrzJrTgDJtcSJz9dIQGrJDWGc3M="
                alt="a pizza picture"
              />
              RP Pizza Store
            </div>
            <h1 className="text-center text-4xl mt-8">Our Speciality</h1>
          </div>
          <AboutUs />
        </div>
      ) : null}
    </div>
  );
};

export default Mainpage;
