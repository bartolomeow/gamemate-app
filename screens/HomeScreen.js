import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useRef } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { useTailwind } from "tailwind-rn";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const swipeRef = useRef(null);
    const DUMMY_DATA = [
        {
            id: 1,
            gamertag: "Charles",
            gameCategory: "Retro",
            photoURL:
                "https://www.biografiasyvidas.com/monografia/chaplin/fotos/chaplin340a.jpg"
        },
        {
            id: 2,
            gamertag: "Jeff",
            gameCategory: "Futuristic",
            photoURL:
                "https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/07/jeff-bezos-el-amo-del-mundo.jpg"
        },
        {
            id: 3,
            gamertag: "Eddie",
            gameCategory: "Sports",
            photoURL:
                "https://legismark.com/wp-content/uploads/2020/11/patente-van-halen.jpg"
        }
    ];

    return (
        <SafeAreaView style={tw("flex-1")}>
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
            <Image
                style={tw("absolute top-0 h-full w-full rounded-xl")}
                src={{
                    uri: "https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/07/jeff-bezos-el-amo-del-mundo.jpg"
                }}
            />
            <View style={tw("flex-1 -mt-6")}>
                <Swiper
                    ref={swipeRef}
                    containerStyle={{ backgroundColor: "transparent" }}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    verticalSwipe={false}
                    animateCardOpacity
                    animateOverlayLabelsOpacity
                    onSwipedAll={() => console.log("no more cards")}
                    backgroundColor="#4fd0e9"
                    onSwipedLeft={() => {
                        console.log("Swipe PASS");
                    }}
                    onSwipedRight={() => {
                        console.log("Swipe MATCH");
                    }}
                    overlayLabels={{
                        left: {
                            title: "NOPE.",
                            swipeColor: "#9262C2",
                            style: {
                                label: {
                                    textAlign: "right",
                                    color: "red"
                                }
                            }
                        },
                        right: {
                            title: "MATCH?",
                            style: {
                                label: {
                                    color: "#4DED30"
                                }
                            }
                        }
                    }}
                    renderCard={(card) => (
                        <View
                            key={card.id}
                            style={tw("relative bg-white h-3/4 rounded-xl")}
                        >
                            <Image
                                style={tw(
                                    "absolute top-0 h-full w-full rounded-xl"
                                )}
                                source={{ uri: card.photoURL }}
                            />
                            <View
                                style={[
                                    tw(
                                        "absolute bottom-0 bg-white w-full h-20 flex-row justify-between items-center px-6 py-2 rounded-b-xl"
                                    ),
                                    styles.cardShadow
                                ]}
                            >
                                <View>
                                    <Text style={tw("text-2xl font-bold")}>
                                        {card.gamertag}
                                    </Text>
                                    <Text style={tw("text-xl")}>
                                        Juego a {card.gameCategory}
                                    </Text>
                                </View>
                                <Image
                                    style={tw("h-7 w-7 my-4")}
                                    source={{
                                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1200px-Xbox_Logo.svg.png"
                                    }}
                                />
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={tw("flex flex-row justify-evenly")}>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeLeft()}
                    style={tw(
                        "items-center justify-center rounded-full w-16 h-16 bg-red-200"
                    )}
                >
                    <Entypo name="cross" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeRight()}
                    style={tw(
                        "items-center justify-center rounded-full w-16 h-16 bg-green-200"
                    )}
                >
                    <Entypo name="heart" size={24} color="green" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    }
});
