//import * as firebase from "firebase"
import {useState, useEffect, useContext, createContext} from "react"
import firebase from "firebase/app"
import {onAuthStateChanged} from "firebase/auth"
/*import {initializeApp} from "firebase/app"*/
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBEXin5jFQ50blMlUQgLVWayZi6tUHDifA",
    authDomain: "products-comia.firebaseapp.com",
    projectId: "products-comia",
    storageBucket: "products-comia.appspot.com",
    messagingSenderId: "84845977891",
    appId: "1:84845977891:web:96c192fe3fd52800deec96"
  };

  const fire=firebase.initializeApp(firebaseConfig)

  const auth=fire.auth()
  const db=fire.firestore()
  const storage=fire.storage()

  export {auth,db,storage}
  export const AuthContext=createContext()
  export const AuthContextProvider=props=>{
    const [user, setUser]=useState()
    const [error, setError]=useState()
    useEffect(() => {
      const unSubscribe = fire.auth().onAuthStateChanged(setUser,setError)
      return ()=>unSubscribe()
    }, [])

    return <AuthContext.Provider value={{}} {...props} />
  }

  export const useAuthState=()=>{
    const auth=useContext(AuthContext)
    return{...auth, isAuthenticate: auth.user != null}
  }