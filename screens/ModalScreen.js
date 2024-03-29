import { useNavigation } from "@react-navigation/native";
import { doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    ActivityIndicator,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { db } from "../hooks/firebase";
import useAuth from "../hooks/useAuth";

const ModalScreen = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const tw = useTailwind();
    const [image, setImage] = useState(undefined);
    const [gamertag, setGamertag] = useState(undefined);
    const [favoriteGame, setFavoriteGame] = useState(undefined);
    const [existingProps, setExistingProps] = useState({
        photoURL: undefined,
        gamertag: undefined,
        favoriteGame: undefined
    });
    const [alert, setAlert] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Actualizar tu perfil",
            headerStyle: {
                backgroundColor: "#FF5864"
            },
            headerTitleStyle: { color: "white" },
            headerTintColor: "#fff"
        });
    }, []);

    useEffect(() => {
        onSnapshot(doc(db, "users", user.uid), (snapshot) => {
            if (snapshot.exists()) {
                setExistingProps({
                    photoURL: snapshot.data().photoURL,
                    gamertag: snapshot.data().gamertag,
                    favoriteGame: snapshot.data().favoriteGame
                });
            }
        });
    }, []);

    const updateUserProfile = async () => {
        setAlert(true);
        onSnapshot(doc(db, "users", user.uid), (snapshot) => {
            if (snapshot.exists()) {
                setExistingProps({
                    photoURL: snapshot.data().photoURL,
                    gamertag: snapshot.data().gamertag,
                    favoriteGame: snapshot.data().favoriteGame
                });
            }
        });
        setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            displayName: user.displayName,
            photoURL: image || existingProps.photoURL,
            gamertag: gamertag || existingProps.gamertag,
            favoriteGame: favoriteGame || existingProps.favoriteGame,
            timestamp: serverTimestamp()
        })
            .then(() => {
                setAlert(false);
                navigation.navigate("Home");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const formChanged =
        (image || existingProps.photoURL) &&
        (gamertag || existingProps.gamertag) &&
        (favoriteGame || existingProps.favoriteGame);
    return (
        <SafeAreaView style={tw("flex-1")}>
            <View style={tw("flex-1 items-center pt-2")}>
                <Text style={tw("text-xl text-gray-500 p-2 font-semibold")}>
                    Bienvenido, {user.displayName}
                </Text>
                <Text style={tw("text-center p-4 font-bold text-red-400")}>
                    Paso 1: Tu foto de perfil
                </Text>
                <TextInput
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    style={tw("text-center text-xl pb-2")}
                    placeholder="Introduce una URL"
                    maxLength={200}
                />
                <Text style={tw("text-center p-4 font-bold text-red-400")}>
                    Paso 2: Tu gamertag
                </Text>
                <TextInput
                    value={gamertag}
                    onChangeText={(gamertag) => setGamertag(gamertag)}
                    style={tw("text-center text-xl pb-2")}
                    placeholder={existingProps.gamertag || "Gamertag principal"}
                    maxLength={50}
                />
                <Text style={tw("text-center p-4 font-bold text-red-400")}>
                    Paso 3: Tu videojuego favorito
                </Text>
                <TextInput
                    value={favoriteGame}
                    onChangeText={(favoriteGame) =>
                        setFavoriteGame(favoriteGame)
                    }
                    style={tw("text-center text-xl pb-2")}
                    placeholder={
                        existingProps.favoriteGame || "Escribe el título o saga"
                    }
                    maxLength={200}
                />
                <TouchableOpacity
                    style={[
                        tw("w-64 p-3 rounded-xl absolute bottom-10 bg-red-400"),
                        !formChanged ? tw("bg-gray-400") : tw("bg-red-400")
                    ]}
                    disabled={!formChanged}
                    onPress={updateUserProfile}
                >
                    <Text style={tw("text-center text-white text-xl")}>
                        {alert ? (
                            <ActivityIndicator size={"small"} color="#ffffff" />
                        ) : (
                            "Actualizar perfil"
                        )}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ModalScreen;
