import { useRef, useState } from 'react';
import './App.css'
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';
import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';
import { auth } from './firebase-config';

const cookies = new Cookies();

function App() {
    const [ isAuth, setIsAuth ] = useState(cookies.get("auth-token"));
    const [ room, setRoom ] = useState(null); 

    const roomInputRef = useRef(null);

    const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        setRoom(null);
    }

    if (!isAuth) {
        return (
            <div>
                <Auth setIsAuth={setIsAuth}/>
            </div>
        );
    }

    return (
        <>
            {room ? (
                <Chat room={room} signUserOut={signUserOut}/>
            ) : (
                <div className="room">
                    <div className='room-box'>
                        <label className='room-name'>Enter Room Name:</label>
                        <div className='input-container'>
                            <input className='room-input' ref={roomInputRef}/>
                            <button className='room-input-btn' onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
                        </div>
                        <div className='sign-out'>
                            <button onClick={signUserOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;