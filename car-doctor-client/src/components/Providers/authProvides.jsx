import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase_config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { url_default } from "../../routes/url_main";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //to prevent auto loading on login

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (user_name) => {
        updateProfile(auth.currentUser, {
            displayName: user_name,
            photoURL: ""
        })
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                alert(error);
                // An error occurred
                // ...
            });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            // console.log(currentUser);
            setLoading(false);
            if (currentUser) {

                axios.post(`${url_default}/jwt`, loggedUser, {
                    withCredentials: true
                })
                    .then(res => { console.log('token response from AuthProvider useEffect', res.data) })
            }
            else {
                axios.post(`${url_default}/logout`, loggedUser, {
                    withCredentials: true
                })
                    .then(res => { console.log('token response from AuthProvider useEffect when user not present/logged out', res.data) })
            }
        })
        return () => {
            unSubscribe();
        }
    })

    const authInfo = { user, loading, createUser, signInUser, logOut, updateUserInfo }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;