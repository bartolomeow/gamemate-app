import { useNavigation } from "@react-navigation/native";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useLayoutEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { db } from "../hooks/firebase";
import useAuth from "../hooks/useAuth";

const ModalScreen = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const tw = useTailwind();
    const [image, setImage] = useState(null);
    const [gamertag, setGamertag] = useState(null);
    const [favoriteGame, setFavoriteGame] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Actualizar tu perfil",
            headerStyle: {
                backgroundColor: "#FF5864"
            },
            headerTitleStyle: { color: "white" }
        });
    }, []);

    const updateUserProfile = () => {
        setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            displayName: user.displayName,
            photoURL: image,
            gamertag: gamertag,
            favoriteGame: favoriteGame,
            timestamp: serverTimestamp()
        })
            .then(() => {
                navigation.navigate("Home");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const incompleteForm = !image || !gamertag || !favoriteGame;
    return (
        <View style={tw("flex-1 items-center pt-2")}>
            <Image
                style={tw("h-20 w-full w-10 h-10")}
                resizeMode="contain"
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1200px-Xbox_Logo.svg.png"
                }}
            />
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
                placeholder="Gamertag principal"
                maxLength={50}
            />
            <Text style={tw("text-center p-4 font-bold text-red-400")}>
                Paso 3: Tu videojuego favorito
            </Text>
            <TextInput
                value={favoriteGame}
                onChangeText={(favoriteGame) => setFavoriteGame(favoriteGame)}
                style={tw("text-center text-xl pb-2")}
                placeholder="Escribe el título o saga"
                maxLength={200}
            />
            <TouchableOpacity
                style={[
                    tw("w-64 p-3 rounded-xl absolute bottom-10 bg-red-400"),
                    incompleteForm ? tw("bg-gray-400") : tw("bg-red-400")
                ]}
                disabled={incompleteForm}
                onPress={updateUserProfile}
            >
                <Text style={tw("text-center text-white text-xl")}>
                    Actualizar perfil
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ModalScreen;
