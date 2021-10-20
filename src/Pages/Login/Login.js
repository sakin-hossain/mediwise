import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const {handleSubmit, isLogin, handleEmailChange, handlePasswordChange, handleNameChange, checkedIsLogin, signInUsingGoogle, handleResetPass, error, setUser, setError, setIsLoading,processToLogin, email, password, processToRegister} = useAuth();
    const location = useLocation();
    const history = useHistory();
    // handle redirecting using google login
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInUsingGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            history.push(location.state?.from || '/home');
            setError("");
          }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          }).finally(() => setIsLoading(false));
    }

    const handleEmailLogin = () => {
            processToLogin(email, password)
            .then((result) => {
            const user = result.user;
            // user?.displayName ? window.location.pathname = (location.state?.from || '/home') : window.location.pathname = "/login";
            history.push(location.state?.from || '/home');
            setUser(user);
            setError("");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1 className="font-bold text-2xl text-center text-indigo-900">Please {isLogin ? "Login" : "Register"}</h1>
                {
                    !isLogin && <input onChange={handleNameChange} type="text" placeholder="Your Name" />
                }
                <br />
                <input onChange={handleEmailChange} type="email" placeholder="Your Email" /> <br />
                <input onChange={handlePasswordChange} type="password" placeholder="Your Password" /> <br />
                <input onChange={checkedIsLogin} type="checkbox" id="registered" value="registered"/>
                <label htmlFor="registered"> Already Registered ?</label><br/>
                <div className="text-center">
                <p className="max-w-2xl">{error}</p>
                {
                    isLogin? <button onClick={handleEmailLogin} type="submit"  className="btn__login">Login</button>:
                    <button onClick={processToRegister} type="submit"  className="btn__login">Register</button>                    
                } <br />
                {
                    isLogin && <button type="submit" onClick={handleResetPass} className="btn__login">Forget Password</button>
                }
                </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn__login">Google Sign In</button>
        </div>
    );
};

export default Login;