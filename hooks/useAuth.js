import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthContext = createContext({});

WebBrowser.maybeCompleteAuthSession();

const config = {
    androidClientId:
        "858333712885-862edi68mjjp35phc9bm9ii8ig1ir995.apps.googleusercontent.com",
    iosClientId:
        "858333712885-tllmbbqlp1qt1ph7pg3vfsgu9j80peqr.apps.googleusercontent.com",
    webClientId:
        "858333712885-t573fk6mkuumqpsn2f2kh8qph3vpe71q.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"]
};

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [request, response, signInWithGoogle] = Google.useAuthRequest(config);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);
            setLoadingInitial(false);
            setLoading(false);
        });
    }, []);

    const logout = () => {
        setLoading(true);
        signOut(auth)
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    useEffect(async () => {
        setLoading(true);
        try {
            if (response?.type === "success") {
                const credential = await GoogleAuthProvider.credential(
                    null,
                    response.params.access_token
                );

                await signInWithCredential(auth, credential);
            }
        } catch (error) {
            setError(error);
        } finally {
            () => setLoading(false);
        }
    }, [response]);

    return (
        <AuthContext.Provider
            value={{ user, loading, error, logout, signInWithGoogle }}
        >
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
