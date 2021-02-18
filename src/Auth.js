import React, { useContext, useEffect, useState } from 'react';
import firebase from './firebase';

export const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser ] = useState(null);
    const [pending, setPending ] = useState(true);

    function logout() {
        setCurrentUser();
        return firebase.auth.signOut();
    }

    function updateEmail(email) {
        //console.log('got into update email');
        try {
            return currentUser.updateEmail(email);
        } catch(err) {
            return (`error updating email: ${err}`, null);
        }
        
    }    

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if(pending){
        return <>Loading... </>
    }

    const value = {
        currentUser,
        logout,
        updateEmail,
        updatePassword
    }        

    return(
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>


    );
};