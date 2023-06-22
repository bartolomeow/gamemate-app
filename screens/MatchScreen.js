import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const MatchScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();
    const tw = useTailwind();
    const { loggedInProfile, userSwiped } = params;
    return (
        <View style={[tw("h-full bg-red-500 pt-20"), { opacity: 0.9 }]}>
            <View style={tw("justify-center px-10 pt-10")}>
                <Image
                    style={tw("h-20 w-full")}
                    source={{
                        uri: "https://filecache.mediaroom.com/mr5mr_tinder/178157/43b-matches.png"
                    }}
                />
            </View>
            <Text style={tw("text-white text-center font-semibold mt-5")}>
                Tú y {userSwiped.gamertag} habéis hecho match.
            </Text>
            <View style={tw("flex-row justify-evenly mt-5")}>
                <Image
                    style={tw("h-32 w-32 rounded-full")}
                    source={{ uri: loggedInProfile.photoURL }}
                />
                <Image
                    style={tw("h-32 w-32 rounded-full")}
                    source={{ uri: userSwiped.photoURL }}
                />
            </View>
            <TouchableOpacity
                style={tw("bg-white m-5 px-10 py-8 rounded-full mt-20")}
                onPress={() => {
                    navigation.goBack();
                    navigation.navigate("Chat");
                }}
            >
                <Text style={tw("text-center")}>Envía un mensaje</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MatchScreen;
