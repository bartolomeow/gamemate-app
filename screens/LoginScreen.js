import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Button, ImageBackground, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
    const tw = useTailwind();
    const { loading, signInWithGoogle } = useAuth();
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <>
            {/* <View>
                <Text>{loading ? "Loading..." : "LoginScreen"}</Text>
            </View>
            <Button
                title="Sign in with Google"
                disabled={loading}
                onPress={signInWithGoogle}
            /> */}
            <View style={tw("flex-1")}>
                <ImageBackground
                    resizeMode="cover"
                    style={tw("flex-1")}
                    source={{
                        uri: "https://wallpaperaccess.com/full/649846.jpg"
                    }}
                ></ImageBackground>
                <Button
                    title="Sign in with Google"
                    disabled={loading}
                    onPress={signInWithGoogle}
                />
                <Text style={tw("text-blue-600")}>Hello world</Text>
            </View>
        </>
    );
};

export default LoginScreen;
