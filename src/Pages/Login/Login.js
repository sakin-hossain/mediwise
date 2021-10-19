import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const {handleSubmit, isLogin, handleEmailChange, handlePasswordChange, handleNameChange, checkedIsLogin, signInUsingGoogle, handleResetPass, error, setUser} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            history.push(location.state?.from || '/home');
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Please {isLogin ? "Login" : "Register"}</h1>
                {
                    !isLogin && <input onChange={handleNameChange} type="text" placeholder="Your Name" />
                }
                <br />
                <input onChange={handleEmailChange} type="email" placeholder="Your Email" /> <br />
                <input onChange={handlePasswordChange} type="password" placeholder="Your Password" /> <br />
                <input onChange={checkedIsLogin} type="checkbox" id="registered" value="registered"/>
                <label htmlFor="registered"> Already Registered ?</label><br/>
                <p>{error}</p>
                <button type="submit"  className="btn__regular px-18">{isLogin ? 'Login' : 'Register'}</button> <br />
                {
                    isLogin && <button type="submit" onClick={handleResetPass} className="btn__regular px-18 mt-2">Forget Password</button>
                }
            </form>
            <button onClick={handleGoogleSignIn} className="btn__regular px-12 mt-2">Google Sign In</button>
        </div>
    );
};

export default Login;