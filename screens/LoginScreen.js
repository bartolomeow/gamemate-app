import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
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
                <TouchableOpacity
                    style={[
                        tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
                        { marginHorizontal: "25%" }
                    ]}
                    onPress={signInWithGoogle}
                >
                    <Text
                        style={tw("font-semibold text-center")}
                        disabled={loading}
                    >
                        Sign in & get swiping
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default LoginScreen;
