import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import '../styles/Auth.css'

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {

    const { setIsAuth } = props;
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken); 
            setIsAuth(true)
        } catch(err) {
            console.error(err)
        }
    };

    return (
        <div className="auth">
            <header>
                <h2>DennisChat</h2>
                <div>
                    <button className="login-button" onClick={signInWithGoogle}>Log In</button>
                    <button className="signup-button" onClick={signInWithGoogle}>Sign Up</button>
                </div>
            </header>
            <h1 className="auth-title">Welcome To DennisChat</h1>
            <p className="auth-description">Seamless real-time communication with anyone, anywhere.</p>
            <button className="auth-button" onClick={signInWithGoogle}>Get Started</button>

            <footer>
                <p className="footer-inc">Gega Inc. 2024®</p>
                <a href="mailto:dennis.gega@uconn.edu" className="footer-contact">Contact Me</a>
            </footer> 
        </div>
    );
}