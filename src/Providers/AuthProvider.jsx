import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

       const [user, setUser] = useState(null)
       const [loading, setloading] = useState(true)
       const createUser = (email, password) =>{
              setloading(true)
              return createUserWithEmailAndPassword(auth, email, password)
       }
       const SingInUser = (email, password) =>{
              setloading(true)
              return signInWithEmailAndPassword(auth, email, password)
       }
       const Logout = () =>{
              setloading(true)
              return signOut(auth)
       }
       useEffect(()=>{
              const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
                     console.log(currentUser)
                     setUser(currentUser)
                     setloading(false)
              })
              return () =>{
                     unSubscribe;
              }
       },[])
       const authInfo = {user, createUser, SingInUser, Logout, loading};

       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProvider;