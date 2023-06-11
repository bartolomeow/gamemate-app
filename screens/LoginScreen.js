import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
    const { loading, signInWithGoogle } = useAuth();
    return (
        <>
            <View>
                <Text>{loading ? "Loading..." : "LoginScreen"}</Text>
            </View>
            <Button
                title="Sign in with Google"
                disabled={loading}
                onPress={signInWithGoogle}
            />
        </>
    );
};

export default LoginScreen;
