import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import {
    collection,
    doc,
    getDocs,
    onSnapshot,
    query,
    setDoc,
    where
} from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { db } from "../hooks/firebase";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [profiles, setProfiles] = useState([]);
    const [noMoreCards, setNoMoreCards] = useState(false);
    const [loading, setLoading] = useState(false);
    const swipeRef = useRef(null);

    useEffect(() => {
        let unsub;
        const fetchCards = async () => {
            setLoading(true);
            const passes = getDocs(
                collection(db, "users", user.uid, "passes")
            ).then((snapshot) => snapshot.docs.map((doc) => doc.id));
            const passedUserIds =
                (await passes).length > 0 ? await passes : ["test"];

            unsub = onSnapshot(
                query(
                    collection(db, "users"),
                    where("id", "not-in", [...passedUserIds])
                ),
                (snapshot) => {
                    const showProfiles = snapshot.docs
                        .filter((doc) => doc.id !== user.uid)
                        .map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                    setProfiles(showProfiles);
                    if (showProfiles.length === 0) setNoMoreCards(true);
                    setLoading(false);
                }
            );
        };
        fetchCards();
        return unsub;
    }, []);

    const swipeLeft = (cardIndex) => {
        if (!profiles[cardIndex]) return;
        const userSwiped = profiles[cardIndex];
        setDoc(doc(db, "users", user.uid, "passes", userSwiped.id), userSwiped);
    };
    const swipeRight = (cardIndex) => {
        if (!profiles[cardIndex]) return;
    };

    useLayoutEffect(() => {
        onSnapshot(doc(db, "users", user.uid), (snapshot) => {
            if (!snapshot.exists()) {
                navigation.navigate("Modal");
            }
        });
    }, []);

    return (
        <SafeAreaView style={tw("flex-1")}>
            <View
                style={tw("flex-row items-center justify-between px-5 z-[1]")}
            >
                <TouchableOpacity onPress={logout}>
                    <Image
                        style={tw("h-10 w-10 rounded-full")}
                        source={{
                            uri:
                                user.photoURL ||
                                "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
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
            {noMoreCards && (
                <View
                    style={[
                        tw(
                            "relative bg-white h-3/4 rounded-xl justify-center items-center text-center m-7"
                        ),
                        styles.cardShadow
                    ]}
                >
                    <Text style={tw("pb-5 font-semibold")}>
                        No hay más perfiles
                    </Text>
                    <Image
                        style={tw("h-20 w-20")}
                        height={100}
                        width={100}
                        source={{
                            uri: "https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png"
                        }}
                    />
                </View>
            )}
            {loading && (
                <View
                    style={[
                        tw(
                            "relative bg-white h-3/4 rounded-xl justify-center items-center text-center m-7"
                        ),
                        styles.cardShadow
                    ]}
                >
                    <Text style={tw("pb-5 font-semibold")}>
                        Cargando perfiles...
                    </Text>
                </View>
            )}
            <View style={tw("flex-1 -mt-5")}>
                <Swiper
                    ref={swipeRef}
                    containerStyle={{ backgroundColor: "transparent" }}
                    cards={profiles}
                    stackSize={5}
                    cardIndex={0}
                    verticalSwipe={false}
                    animateCardOpacity
                    animateOverlayLabelsOpacity
                    onSwipedAll={() => setNoMoreCards(true)}
                    backgroundColor="#4fd0e9"
                    onSwipedLeft={(cardIndex) => {
                        swipeLeft(cardIndex);
                    }}
                    onSwipedRight={(cardIndex) => {
                        swipeRight(cardIndex);
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
                    renderCard={(card) =>
                        card !== undefined && (
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
                                            Juego a {card.favoriteGame}
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
                        )
                    }
                />
            </View>
            <View style={tw("flex flex-row justify-evenly")}>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeLeft()}
                    style={
                        noMoreCards
                            ? tw(
                                  "items-center justify-center rounded-full w-16 h-16 bg-gray-200"
                              )
                            : tw(
                                  "items-center justify-center rounded-full w-16 h-16 bg-red-200"
                              )
                    }
                    disabled={noMoreCards}
                >
                    <Entypo name="cross" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeRight()}
                    style={
                        noMoreCards
                            ? tw(
                                  "items-center justify-center rounded-full w-16 h-16 bg-gray-200"
                              )
                            : tw(
                                  "items-center justify-center rounded-full w-16 h-16 bg-green-200"
                              )
                    }
                    disabled={noMoreCards}
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
