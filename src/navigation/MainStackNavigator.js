import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../screens/Login";
import Main from "../screens/Main";
import Products from "../screens/Products";
import Settings from "../screens/Settings";
import ChildInternet from "../screens/Products/pages/childInternet";
import Tariff from "../screens/Products/pages/tariff";
import Antivirus from "../screens/Products/pages/antivirus";
import Video from "../screens/Products/pages/video";
import Payment from "../screens/Payment";
import ScheduleInternet from "../screens/Products/pages/scheduleInternet";
import Pause from "../screens/Products/pages/pause";
import About from "../screens/Products/pages/about";

const Stack = createStackNavigator()

const Navigation = (props) => (
    <Stack.Navigator screenOptions={{headerShown: false}} animationEnabled={true}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Main'} component={Main} />
        <Stack.Screen name={'Products'} component={Products} />
        <Stack.Screen name={'Settings'} component={Settings} />
        <Stack.Screen name={'ChildInternet'} component={ChildInternet} />
        <Stack.Screen name={'Tariff'} component={Tariff} />
        <Stack.Screen name={'Antivirus'} component={Antivirus} />
        <Stack.Screen name={'Pause'} component={Pause} />
        <Stack.Screen name={'Video'} component={Video} />
        <Stack.Screen name={'Payment'} component={Payment} />
        <Stack.Screen name={'ScheduleInternet'} component={ScheduleInternet} />
        <Stack.Screen name={'About'} component={About} />

    </Stack.Navigator>
);

export default Navigation;
