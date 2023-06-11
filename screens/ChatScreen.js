import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const ChatScreen = () => {
    const { logout, loading } = useAuth();

    return (
        <View>
            <Text>ChatScreen</Text>
            <Button title="Sign out" disabled={loading} onPress={logout} />
        </View>
    );
};

export default ChatScreen;
