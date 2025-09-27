import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setstate] = useState('Login')
  const { setshowLogin, backendUrl, settoken, setuser } = useContext(AppContext)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let url = "";
      let bodyData = {};

      if (state === "Login") {
        url = backendUrl + "/api/user/login";
        bodyData = { email, password };
      } else {
        url = backendUrl + "/api/user/register";
        bodyData = { name, email, password };
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (data.success) {
        settoken(data.token);
        setuser(data.user);
        localStorage.setItem("token", data.token); 
        setshowLogin(false);
        toast.success(state === "Login" ? "Login successful!" : "Account created!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm'>Welcome back ! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.profile_icon} alt="" width={15} />
            <input 
              onChange={e => setname(e.target.value)} 
              value={name} 
              className='outline-none text-sm' 
              type="text" 
              placeholder='Full Name' />
          </div>
        )}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.email_icon} alt="" />
          <input 
            onChange={e => setemail(e.target.value)} 
            value={email} 
            className='outline-none text-sm' 
            type="email" 
            placeholder='Email ID' />
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.lock_icon} alt="" />
          <input 
            onChange={e => setpassword(e.target.value)} 
            value={password} 
            className='outline-none text-sm' 
            type="password" 
            placeholder='Password' />
        </div>

        {state === 'Login' ? (
          <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget Password?</p>
        ) : <p className='my-4'></p>}

        <button type="submit" className='bg-blue-600 w-full text-white py-2 rounded-full'>
          {state === 'Login' ? 'Login' : 'Create account'}
        </button>

        {state === 'Login' ? (
          <p className='mt-5 text-center'>
            Don't have an account?{" "}
            <span className='text-blue-600 cursor-pointer' onClick={() => setstate('Sign Up')}>Sign Up</span>
          </p>
        ) : (
          <p className='mt-5 text-center'>
            Already have an account?{" "}
            <span className='text-blue-600 cursor-pointer' onClick={() => setstate('Login')}>Login</span>
          </p>
        )}

        <img 
          onClick={() => setshowLogin(false)} 
          src={assets.cross_icon} 
          alt="" 
          className='absolute top-5 right-5 cursor-pointer' />
      </form>
    </div>
  )
}

export default Login

