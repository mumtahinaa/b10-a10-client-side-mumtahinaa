import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

   
    const [user,setUser] = useState("");
    const [loading, setLoading]=useState(true);




    const register = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    };

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
             setUser(currentUser);
             setLoading(false);
            
         });
 
         return () => {
             unsubscribe();
         };
       },[]);

    const info ={
    register,
    user,
    setUser,
    googleSignIn,
    signIn,
    logOut,
    loading
    }

    return (
        <div>
          <AuthContext.Provider value={info}>{children}</AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;