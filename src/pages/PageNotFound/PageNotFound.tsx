import React from 'react';
import firebaseImage from '../../assets/firebase.png';


export const PageNotFound: React.FC = () => {
    return (
        <div className="set-profile-data">
            <img src={firebaseImage} />
            <span>Page not found</span>
        </div>
    );
};
