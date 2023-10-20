import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user/register

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const storeAuth = {
    createUser,
    signIn,
    user,
    loading,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={storeAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
