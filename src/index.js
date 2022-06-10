import React from 'react';
import {NativeBaseProvider, extendTheme,  StatusBar, theme} from 'native-base';
import {NavigationContainer} from "@react-navigation/native";
import MainStackNavigator from "./navigation/MainStackNavigator";
import BottomTabMenu from "./components/BottomTabMenu";

const Index = (props) => (
    <NativeBaseProvider theme={theme}>
        <StatusBar hidden={true} />
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    </NativeBaseProvider>
);

export default Index;
