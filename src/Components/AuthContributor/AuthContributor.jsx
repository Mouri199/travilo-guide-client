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

  // const createRegister = async (email, password, name, photo) => {

  //   setLoad(true);
  //   const result = await createUserWithEmailAndPassword(auth, email, password);
  //   await updateUserDetails(name, photo)
  //   // await signOut();
  //   return result;
  // }

  const createRegister = (name, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, name, password)
  }

  const signInUser = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password)

  }

  // // update user
  // const updateUser = async (name, photo) => {
  //   const result = await updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   })
  //   return result;
  // }

  const updateUserDetails = ( name, photo) => {
    setLoad(true);
    updateProfile(auth.currentUser, {
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

  const userLogOut = () => {
    setLoad(true);
    return signOut(auth)
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