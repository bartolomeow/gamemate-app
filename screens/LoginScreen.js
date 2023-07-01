import React from "react";
import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useTailwind } from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
    const tw = useTailwind();
    const { loading, signInWithGoogle } = useAuth();

    return (
        <SafeAreaView style={tw("flex-1")}>
            <View style={tw("flex-1 bg-red-500 items-center")}>
                <View style={tw("flex-1 items-center mt-20")}>
                    <Image
                        style={tw("h-14 w-16")}
                        source={{ uri: require("../assets/GameMateLogo.png") }}
                    />
                    <Text style={tw("text-xl font-semibold text-white")}>
                        GameMate
                    </Text>
                </View>
                <TouchableOpacity
                    style={[
                        tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl")
                    ]}
                    onPress={signInWithGoogle}
                >
                    <Text
                        style={tw("font-semibold text-center")}
                        disabled={loading}
                    >
                        Entrar con Google
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
