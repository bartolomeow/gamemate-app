import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
    const { request, signInWithGoogle } = useAuth();
    return (
        <>
            <View>
                <Text>LoginScreen</Text>
            </View>
            <Button
                title="Sign in with Google"
                disabled={!request}
                onPress={signInWithGoogle}
            />
        </>
    );
};

export default LoginScreen;
