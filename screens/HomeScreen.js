import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
    Button,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useTailwind } from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation();
    const { user, logout, loading } = useAuth();

    return (
        <SafeAreaView>
            <View style={tw("flex-row items-center justify-between px-5")}>
                <TouchableOpacity onPress={logout}>
                    <Image
                        style={tw("h-10 w-10 rounded-full")}
                        source={{ uri: user.photoURL }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={tw("h-14 w-14")}
                        source={require("../assets/logo.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Ionicons
                        name="chatbubbles-sharp"
                        size={30}
                        color="#FF5864"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
