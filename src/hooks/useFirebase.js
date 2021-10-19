import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Shared/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const checkedIsLogin = e =>{
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 8){
            setError("Password Must be at least 8 characters long.");
            return;
        }

        isLogin? processToLogin(email, password): processToRegister(email,password);
    }

    const processToRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
    }

    const processToLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        signInWithEmailAndPassword()
        .then((result) => {
            const user = result.user;
            setUser(user);
            setError("");
          })
          .catch((error) => {
            setError(error.message);
            setError(error.code)
          });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
      };

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        });
        return () => unsubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result=>{
        console.log(result);
      })
    };

    const handleResetPass = () => {
      sendPasswordResetEmail(auth, email)
      .then(result=>{
        console.log(result);
      })
    }

    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        signInUsingGoogle,
        logOut,
        checkedIsLogin,
        handleSubmit,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleResetPass,
        isLogin,
        user,
        setUser,
        setError,
        email,
        name,
        error
    }
}

export default useFirebase;