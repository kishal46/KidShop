import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Authuse from './Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const auth = Authuse();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3001/login/get/${email}`)
            .then(res => {
                if (res.data[0]?.email) {
                    if (res.data[0]?.password === password) {
                        toast.success("Login Successful!", {
                            position:"top-center",
                            theme:"dark",
                            autoClose:700,
                            onClose: () => navigate('/')
                        });
                        setMessage('');
                        auth.login(res.data[0]?.username);
                        setEmail('');
                        setPassword('');
                    } else {
                        setMessage('Incorrect password');
                        toast.error("Password incorrect");
                    }
                } else {
                    setMessage('Email not found');
                    toast.error("Email not found");
                }
            })
            .catch(err => {
                console.error('Error:', err);
                // setMessage('An error occurred. Please try again.');
                toast.error("An error occurred. Please try again", {
                    position:"top-center",
                    theme:"dark",
                    autoClose:700,
                });
                
            });
    };

    return (
        <div>
            <ToastContainer />
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <label>Email:</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br />
                {message && <p className="error-message">{message}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
