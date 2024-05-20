import styles from './AuthForm.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const toggleAuthState = () => {
        setIsLogin(prevState => !prevState)
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = (password) => {
        // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\W])[A-Za-z\d_\W]{8,}$/;
        return re.test(password);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!validateEmail(username)) {
            setIsError('Invalid email');
            return;
        }
        if (!validatePassword(password)) {
            setIsError('Invalid password');
            return;
        }
        setIsError(false);
        navigate('/')

    }

    const actionIsNotLoading = (
        <button>{isLogin ? 'Login' : 'Create new account'}</button>
    )


    return (
        <div className={styles.auth}>
            <h2>{isLogin ? 'Login' : 'Create new account'}</h2>
            <form onSubmit={submitHandler} autoComplete='off' noValidate>
                <div className={styles.control}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        id='username'
                        placeholder='Enter your username'
                        required onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id='password'
                        placeholder='Enter your password'
                        required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={styles.actions}>
                    {isError && <p className={styles.error}>{isError}</p>}
                    {isLoading && <p>Sending request...</p>}
                    {!isLoading && actionIsNotLoading}
                    <button type='button' className={styles.toggle} onClick={toggleAuthState}>
                        {isLogin ? 'Create new account' : 'Login with an existing account'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm