import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TailwindProvider } from "tailwind-rn";
import { StackNavigator } from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
import utilities from "./tailwind.json";

export default function App() {
    return (
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <AuthProvider>
                    <StackNavigator />
                </AuthProvider>
            </NavigationContainer>
        </TailwindProvider>
    );
}
