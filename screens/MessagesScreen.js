import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
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
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";

const MessagesScreen = () => {
    const { user } = useAuth();
    const { params } = useRoute();
    const { matchDetails } = params;
    const tw = useTailwind();

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {};

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
                        data={message}
                        style={tw("pl-4")}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item: message }) =>
                            message.userId === user.uid ? (
                                <SenderMessage key={message.id} />
                            ) : (
                                <ReceiverMessage key={message.id} />
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
                    style={tw("h-10 text-lg")}
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
