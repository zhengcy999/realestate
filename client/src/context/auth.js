import { useState,createContext,useContext } from "react";
import{AuthProvider} from './context/auth'
const  AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:"",
        refreshToken:"",
    });
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth=()=>useContext(AuthContext);
export {useAuth,AuthProvider};