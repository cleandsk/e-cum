import React, {useState} from "react";
import loginPic from "../assets/images_E.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <section id="login">
      <div className="container mx-auto p-4 rounded-lg">
        <div className="bg-white w-full p-2 max-w-md mx-auto py-5">
          <div className="w-20 h-20 mx-auto">
            <img src={loginPic} alt="loginPic" className="py-2 p-2 mx-auto rounded-full hover:scale-75"/>
          </div>

          <form className="pt-6 flex flex-col gap-4">
            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-full outline-none"
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="flex bg-slate-100 p-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Your Password"
                  className="w-full h-full outline-none"
                />
                <div className="text-xl cursor-pointer" onClick={()=> setShowPassword(prev =>!prev) }>
                  <span>
                    {showPassword ?(
                      <FaRegEye/>
                    )
                    :
                    (
                      <FaRegEyeSlash/>
                    )}
                  </span>
                </div>
              </div>
              <Link to={'/forget-password'} className="block w-fit ml-auto hover:underline hover:text-red-700">
              Forget Password
              </Link>
            </div>
            <button className="bg-red-700 hover:bg-red-200 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">Login</button>
          </form>
          <p className="my-5">Dont have an account? <Link to={"/sign-up"} className="text-red-500 hover:text-red-900 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </section>
  );
}

export default Login;
