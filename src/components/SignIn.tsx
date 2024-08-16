import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/menu");
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
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" my-8 grid place-content-center text-xl gap-4"
      >
        <label>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" />

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />

        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 ">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
