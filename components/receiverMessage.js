import React from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const ReceiverMessage = ({ message }) => {
    const tw = useTailwind();

    return (
        <View
            style={[
                tw(
                    "bg-red-400 rounded-lg rounded-tl-none px-5 py-3 mx-5 my-2 ml-14 max-w-3/4"
                ),
                { alignSelf: "flex-start" }
            ]}
        >
            <Image
                style={tw("h-12 w-12 rounded-full absolute top-0 -left-14")}
                source={{ uri: message.photoURL }}
            />
            <Text style={tw("text-white")}>{message.message}</Text>
        </View>
    );
};

export default ReceiverMessage;
