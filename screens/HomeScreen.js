import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { logout, loading } = useAuth();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Go to chat"
                onPress={() => navigation.navigate("Chat")}
            />
            <Button title="Sign out" disabled={loading} onPress={logout} />
        </View>
    );
};

export default HomeScreen;
