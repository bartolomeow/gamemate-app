import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
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
    const [tokens, setTokens] = useState({
        accessToken: undefined
    });
    // const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    const [request, response, signInWithGoogle] = Google.useAuthRequest(config);

    useEffect(async () => {
        try {
            if (response?.type === "success") {
                const credential = await GoogleAuthProvider.credential(
                    null,
                    response.params.access_token
                );
                setTokens({
                    accessToken: response.params.access_token
                });

                await signInWithCredential(auth, credential);
            }
        } catch (error) {
            setError(error);
        }
    }, [response]);

    // const getUserInfo = async () => {
    //     try {
    //         const response = await fetch(
    //             "https://www.googleapis.com/userinfo/v2/me",
    //             {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             }
    //         );

    //         const user = await response.json();
    //         setUserInfo(user);
    //     } catch (error) {
    //         // Add your own error handler here
    //     }
    // };

    return (
        <AuthContext.Provider value={{ user: null, signInWithGoogle, request }}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
