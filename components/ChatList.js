import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { db } from "../hooks/firebase";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
    const tw = useTailwind();
    const [matches, setMatches] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        onSnapshot(
            query(
                collection(db, "matches"),
                where("usersMatched", "array-contains", user.uid)
            ),
            (snapshot) =>
                setMatches(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
        );
    }, []);

    return matches.length > 0 ? (
        <FlatList
            style={tw("h-full")}
            data={matches}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ChatRow matchDetails={item} />}
        />
    ) : (
        <View style={tw("p-5")}>
            <Text style={tw("text-center text-lg")}>No tienes chats 😅</Text>
        </View>
    );
};

export default ChatList;
