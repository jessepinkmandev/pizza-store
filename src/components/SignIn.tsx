import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signIn }: any = UserAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/pizza-store/menu");
      window.location.reload();
    } catch (e: any) {
      setError(e.message);
      console.log(e.message);
      console.log(error);
    }
  };

  return (
    <div className="my-12 py-8 text-[#D4BDAC] text-center bg-[#536493]">
      <div className="grid place-content-center text-xl gap-4">
        <h1 className=" font-bold ">Sign in to your account</h1>
        <p>
          Don't have an account yet? <br></br>
          <Link to="/pizza-store/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" my-8 grid place-content-center text-xl gap-4 m-auto max-w-[60%]"
      >
        <label>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" />

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />

        <button className="bg-[#EF5A6F] hover:scale-110 w-full p-2 mt-4 ">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
