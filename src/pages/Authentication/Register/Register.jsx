import React, { useContext, useEffect } from "react";
import "../Login/login.css";
import { Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import registerAnimation from "./registerAnimation.json";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loader from "../../../Component/Loader/Loader";

const Register = () => {
  const { user, createUser, loginWithGoogle, updateUser, setUser, loading } =
    useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
      if(user){
        navigate('/')
      }
    },[user,navigate])

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("clicked");

    const form = e.target;
    const formData = new FormData(form);
    const convertData = Object.fromEntries(formData.entries());

    // console.log(convertData);
    const { name, email, photo, password } = convertData;
    // console.log(name);

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            // console.log(error);
            toast.error('Sorry!! Something was wrong.Try again');
          });

        toast.success('userCreated successfully');
        // console.log('user created successfully');
        navigate('/auth/login');
      })
      .catch((error) => {
        // console.log("something is wrong try again");
        toast.error('Sorry!! Something was wrong.Try again');
      });
  };

  // handle login with google

  const handleLoginWithGoogle = () => {
    // console.log("clicked");
    loginWithGoogle()
      .then(() => {
        // console.log("login successfully");
        toast.success('userCreated successfully');
        navigate('/')
      })
      .catch((error) => {
        console.log("something is wrong");
      });
  };

  if(loading){
    return <Loader></Loader>
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-25">
      <div className="w-full md:w-1/3">
        <Lottie animationData={registerAnimation} loop={true}></Lottie>
      </div>
      <div className="container">
        <div className="heading">Sign Up</div>
        <form onSubmit={handleRegister} className="form">
          <input
            required
            className="input"
            type="text"
            name="name"
            id="email"
            placeholder="Name"
          />
          <input
            required
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            required
            className="input"
            type="text"
            name="photo"
            placeholder="photoURL"
          />
          <input
            className="login-button hover:cursor-pointer"
            type="submit"
            value="Sign Up"
          />
          <p className="text-xs mt-[-15px] mx-auto">
            Already have any account{" "}
            <Link
              to="/auth/login"
              className="text-red-500 hover:cursor-pointer"
            >
              Click here
            </Link>
          </p>
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign Up with</span>
          <div className="social-accounts">
            <button
              onClick={handleLoginWithGoogle}
              className="social-button google hover:cursor-pointer"
            >
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
