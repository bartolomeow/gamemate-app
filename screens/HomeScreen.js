import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View, Button } from "react-native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Go to chat"
                onPress={() => navigation.navigate("Chat")}
            />
        </View>
    );
};

export default HomeScreen;
