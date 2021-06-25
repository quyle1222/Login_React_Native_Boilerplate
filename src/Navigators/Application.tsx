import LoginScreen from "@/Containers/LoginScreen/LoginScreen";
import DetailScreen from "@/Containers/DetailsScreen/DetailsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";


const Stack = createStackNavigator();

const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen} options={{
                    headerShown: false,
                    gestureEnabled: false
                }} />
                <Stack.Screen name='Details' component={DetailScreen} options={{
                    gestureEnabled: false,
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ApplicationNavigator;