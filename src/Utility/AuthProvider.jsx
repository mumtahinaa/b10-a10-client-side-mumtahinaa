import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {


    const info ={

    }

    return (
        <div>
          <AuthContext.Provider value={info}>{children}</AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;