import React, { useContext } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router'
import LottieAnimation from './loginAnimation.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {
   const { user, signIn, loginWithGoogle, loading } = useContext(AuthContext)
   const navigate = useNavigate();

  const handleLogin =(e)=>{
    e.preventDefault();
    console.log('clicked')

    const form = e.target;
    const formData = new FormData(form)
    const convertedData = Object.fromEntries(formData.entries())

    console.log(convertedData);
    const {email,password} = convertedData

    signIn(email,password)
    .then(()=>{
      toast.success("User logged in successfully");
      navigate('/')
    }).catch((error)=>{
      toast.error('Something was wrong. Try again letter');
      console.log(error.massage)
    })

  }
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-25'>
      <div className='w-full md:w-1/3'>
        <Lottie animationData={LottieAnimation} loop={true}></Lottie>
      </div>
      <div className="container">
      <div className="heading">Sign In</div>
      <form onSubmit={handleLogin} className="form">
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
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
        <span className="forgot-password">
          <a href="#" className="hover: link-hover">Forgot Password?</a>
        </span>
        <input className="login-button hover:cursor-pointer" type="submit" value="Sign In" />
        <p className='text-xs mt-[-15px] mx-auto'>Don't have any account <Link to='/auth/register' className='text-red-500'>Click here</Link></p>
      </form>
      <div className="social-account-container">
        <span className="title">Or Sign in with</span>
        <div className="social-accounts">
          <button className="social-button google">
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

export default Login
