import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { useTailwind } from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const DUMMY_DATA = [
        {
            firstName: "Charles",
            lastName: "Chaplin",
            gameCategory: "Retro",
            photoURL:
                "https://www.biografiasyvidas.com/monografia/chaplin/fotos/chaplin340a.jpg"
        },
        {
            firstName: "Jeff",
            lastName: "Bezos",
            gameCategory: "Futuristic",
            photoURL:
                "https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/07/jeff-bezos-el-amo-del-mundo.jpg"
        },
        {
            firstName: "Eddie",
            lastName: "Van Halen",
            gameCategory: "Sports",
            photoURL:
                "https://legismark.com/wp-content/uploads/2020/11/patente-van-halen.jpg"
        }
    ];

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
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Ionicons
                        name="chatbubbles-sharp"
                        size={30}
                        color="#FF5864"
                    />
                </TouchableOpacity>
            </View>
            <Swiper cards={DUMMY_DATA} renderItem={card => {
                <View>
                    <Text>{card.firstName}</Text>
                </View>
            }}/>
        </SafeAreaView>
    );
};

export default HomeScreen;
