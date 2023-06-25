import React from "react";
import { SafeAreaView } from "react-native";
import ChatList from "../components/ChatList";
import Header from "../components/Header";

const ChatScreen = () => {
    return (
        <SafeAreaView>
            <Header title="Chat" callEnabled={false} />
            <ChatList />
        </SafeAreaView>
    );
};

export default ChatScreen;
