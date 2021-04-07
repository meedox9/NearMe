import React, { useState } from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';

import { signUp } from '../../../store/auth/signUp';

import './signUp.css';

export const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    return (
        <div className="sign-up">
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
            <button className="button_signin"
                onClick={() => {
                    if (email && password) {
                        dispatch(signUp({ email, password }));
                    }
                }}
            >
                Create new user
            </button>
        </div>
    );
};
