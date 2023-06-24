import { useRoute } from "@react-navigation/native";
import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
    Button,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { useTailwind } from "tailwind-rn";
import Header from "../components/Header";
import ReceiverMessage from "../components/receiverMessage";
import SenderMessage from "../components/senderMessage";
import { db } from "../hooks/firebase";
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";

const MessagesScreen = () => {
    const { user } = useAuth();
    const { params } = useRoute();
    const { matchDetails } = params;
    const tw = useTailwind();

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "matches", matchDetails.id, "messages"),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) =>
                    setMessages(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
            ),
        [matchDetails, db]
    );

    const sendMessage = () => {
        if (input)
            addDoc(collection(db, "matches", matchDetails.id, "messages"), {
                timestamp: serverTimestamp(),
                userId: user.uid,
                displayName: user.displayName,
                photoURL: matchDetails.users[user.uid].photoURL,
                message: input
            });

        setInput("");
    };

    return (
        <SafeAreaView style={tw("flex-1")}>
            <Header
                title={
                    getMatchedUserInfo(matchDetails.users, user.uid).gamertag
                }
                callEnabled
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={tw("flex-1")}
                keyboardVerticalOffset={10}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <FlatList
                        inverted
                        data={messages}
                        style={tw("pl-4")}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item: message }) =>
                            message.userId === user.uid ? (
                                <SenderMessage
                                    key={message.id}
                                    message={message}
                                />
                            ) : (
                                <ReceiverMessage
                                    key={message.id}
                                    message={message}
                                />
                            )
                        }
                    />
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <View
                style={tw(
                    "flex-row justify-between items-center bg-white border-t border-gray-200 px-5 py-2"
                )}
            >
                <TextInput
                    style={tw("h-10 text-lg w-full")}
                    placeholder="Escribe un mensaje"
                    onChangeText={setInput}
                    onSubmitEditing={sendMessage}
                    value={input}
                />
                <Button onPress={sendMessage} title="Enviar" color="#FF5864" />
            </View>
        </SafeAreaView>
    );
};

export default MessagesScreen;
