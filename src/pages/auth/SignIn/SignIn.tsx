import React, { useState } from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';

import { signIn } from '../../../store/auth/signIn';
import { firebase_app } from '../../../api/firebase';
import Header from '../../menu/Header';
import './signIn.css';
import { Link } from 'react-router-dom';

export const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

        return (
        <div className="sign-in">
            <img src={firebaseImage} />

            <input className="input"
                id="email"
                name="email"
                type="input"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <input className="input"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <Link to="/">
            <button className="button_signin"
                onClick={() => {
                    firebase_app.analytics().logEvent('User clicked Sign in', {
                        email,
                    });
                    dispatch(signIn({ email, password }));
                }}
            >
                Sign in
            </button></Link>
            <Link to="/sign-up">
            <button className="button_signin"
            >
                Sign Up
            </button></Link>
        </div>
    );
};
