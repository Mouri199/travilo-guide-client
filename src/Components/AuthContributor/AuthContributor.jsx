

import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';



 
export const AuthProvider = createContext(null);
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()


const AuthContibutor = ({ children }) => {

  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  const createRegister = (name, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, name, password)
  }

  const signInUser = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password)

  }

  const updateUserDetails = (user, name, photo) => {
    setLoad(true);
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const userLogOut = () => {
    setLoad(true);
    return signOut(auth)
  }

  const signInWithGoogle = () => {
    setLoad(true);
    return signInWithPopup(auth, googleProvider)
  }

  const signInFacebook = () => {
    setLoad(true);
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        setUser(result.user);
        setLoad(false);
      })
      .catch(error => {
        console.error(error);
        setLoad(false);
      });
  }

  useEffect(() => {
    const signOut = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoad(false)
    });

    return () => {
      signOut()
    }
  }, [])
  const providerInfo = { user, createRegister, signInUser, signInWithGoogle, userLogOut, load, updateUserDetails, signInFacebook }
  return (
    <AuthProvider.Provider value={providerInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContibutor;

AuthContibutor.propTypes = {
  children: PropTypes.node
}