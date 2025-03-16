import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaEye,FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Utility/AuthProvider";

const LogIn = () => {
  const {googleSignIn,setUser,user,signIn}= useContext(AuthContext);
  const [error,setError]= useState('');
    const [showPass,setShowPass] = useState(false);
   
    const navigate = useNavigate();
   
  
    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const  password = e.target.password.value;
      // console.log(email,password)
      setError('');
     
      signIn(email,password)
      .then(result=>{
        const userInfo = result.user;
        console.log(userInfo)
        setUser(userInfo);
      })
      .catch((err)=>{
        const errCode = err.code;
        setError(errCode);
      })


    //   try {
    //     await signInWithEmailAndPassword(auth, email, password);
    //     toast.success("Login Successful!");
    //     navigate("/");
    //   } catch (error) {
    //     toast.error(error.message);
    //   }
      
    };
  
    const handleGoogleLogin = () => {
      googleSignIn()
      .then(result=>{
        const clientInfo = result.user;
        console.log(clientInfo)
        setUser(clientInfo)
      });


        // try {
        //     await signInWithPopup(auth, provider);
        //     toast.success("Google Login Successful!");
        //     navigate("/");
        //   } catch (error) {
        //     toast.error(error.message);
        //   }
     
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-black flex-col gap-10">
         <h1 className="text-2xl md:text-3xl font-bold flex items-center  ">
          <span className="text-[#9B5DE5] font-[Bebas_Neue] tracking-wider">Cine</span>
          <span className="text-[#00A8E8] font-[Pacifico]">Nest</span>
        </h1>
        <div className="w-full max-w-md p-8 space-y-6 bg-[#1E1E1E] shadow-md rounded-xl">
          <h2 className="text-3xl font-bold text-center text-[#9B5DE5]">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
           <div className="form-control">
           <input
              type="email"
              placeholder="Email"
              
              name='email'
              className="input input-bordered w-full bg-[#2A2A2A] text-white"
              required
            />
           </div>
          <div className="form-control relative">
          <input
              type={showPass?"text":"password"}
              placeholder="Password"
             
              name='password'
              className="input input-bordered w-full bg-[#2A2A2A] text-white "
              required
            />
                <button type='button' onClick={()=> setShowPass(!showPass)} className='btn btn-ghost btn-xs absolute right-[5px] top-3 text-gray-400 '  > {showPass ?<FaEyeSlash size={20} /> :<FaEye size={20}  />}</button>

          </div>

<div className="text-end">
            <Link to="/forgot-password" className="text-[#00A8E8] hover:underline">
              Forgot Password?
            </Link>
          </div>
          {
            error && <small className="text-red-500">{error}</small>
          }
            <button type="submit" className="btn w-full bg-[#9B5DE5] hover:bg-[#00A8E8] text-white">
              Login
            </button>
          </form>
          
          <div className="divider text-gray-400">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn w-full bg-[#00A8E8] hover:bg-[#9B5DE5] text-white flex items-center justify-center gap-2"
          >
            <FaGoogle /> Sign in with Google
          </button>
          <p className="text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#9B5DE5] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default LogIn;