import React from "react";
import { SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import ChatList from "../components/ChatList";
import Header from "../components/Header";

const ChatScreen = () => {
    const tw = useTailwind();
    return (
        <SafeAreaView style={tw("flex-1")}>
            <Header title="Chat" callEnabled={false} />
            <ChatList />
        </SafeAreaView>
    );
};

export default ChatScreen;
