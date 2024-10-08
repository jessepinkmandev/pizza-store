import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";
import ReactPasswordChecklist from "react-password-checklist";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { createUser }: any = UserAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
      navigate("/pizza-store/menu");
      window.location.reload();
    } catch (e: any) {
      setError(e.message);
      alert("Please try again " + e.message);
      console.log(error);
    }
  };

  const handleValidation = (e: any) => {
    e.preventDefault();
    const regExp = /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
    if (password === "") {
      handleSubmit(e);
    } else if (regExp.test(password)) {
      setMessage("Password is Valid");
      handleSubmit(e);
    } else if (!regExp.test(password)) {
      setMessage("Password is Invalid");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="my-12 py-8 text-[#D4BDAC] text-center bg-[#536493] ">
      <div className="grid place-content-center text-xl gap-4">
        <h1 className=" font-bold ">Sign up for an account</h1>
        <p>
          Already have an account <br></br>
          <Link to="/pizza-store/signin" className="underline">
            Sign In.
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleValidation}
        className=" my-8 grid place-content-center text-xl gap-4 "
      >
        <label>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" />

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />

        <p>{message}</p>

        <button className=" bg-[#EF5A6F] hover:scale-110 w-full p-2 ">
          Sign Up
        </button>
      </form>
      <div className="max-w-[60%] lg:max-w-[25%] m-auto">
        <ReactPasswordChecklist
          rules={["minLength", "specialChar", "number", "capital"]}
          minLength={8}
          value={password}
        />
      </div>
    </div>
  );
};

export default SignUp;
