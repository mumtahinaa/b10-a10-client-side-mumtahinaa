import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { auth, googleProvider } from "../firebaseConfig"; // Ensure Firebase is configured
// import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
// import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", photo: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const  password = e.target.password.value;
    const name = e.target.name.value;
    const photo =e.target.photo.value;
    console.log(name,email,password)

    // setError("");

    // if (!validatePassword(formData.password)) {
    //   setError("Password must contain an uppercase, lowercase, and be at least 6 characters.");
    //   return;
    // }

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    //   await updateProfile(userCredential.user, { displayName: formData.name, photoURL: formData.photo });
    //   toast.success("Registration successful!");
    //   navigate("/");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       toast.success("Logged in successfully!");
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white flex-col gap-10">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center  ">
          <span className="text-[#9B5DE5] font-[Bebas_Neue] tracking-wider">Cine</span>
          <span className="text-[#00A8E8] font-[Pacifico]">Nest</span>
        </h1>
      <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96 space-y-6">
        <h2 className="text-2xl font-bold text-center text-[#9B5DE5]">Register</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">   
         <input type="text" name="name" placeholder="Full Name" required className="input input-bordered  w-full"  />
          <input type="email" name="email" placeholder="Email" required className="input input-bordered w-full" />
          <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered w-full"  />
          <input type="password" name="password" placeholder="Password" required className="input input-bordered w-full"  />
          <button type="submit" className="btn w-full bg-[#9B5DE5] text-white hover:bg-[#00A8E8]">Register</button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link to="/login" className="text-[#00A8E8]">Login</Link></p>
          <button  className="btn w-full flex gap-2 mt-2 bg-white text-black hover:bg-gray-200"><FcGoogle /> Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

