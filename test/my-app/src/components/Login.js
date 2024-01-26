import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css';


function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone_number: phoneNumber, password }),
            });

            if (response.ok) {
                console.log('Login successful');
                navigate('/game');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('There was an error logging in:', error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone Number:</label>
                    <input
                        className={styles.formInput}
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password:</label>
                    <input
                        className={styles.formInput}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={styles.submitButton} type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
