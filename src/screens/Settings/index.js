import React from 'react';
import {Divider, HStack, Text, View, Switch} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import {TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

const Settings = (props) => {
    const navigation = useNavigation()
    return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#89c0f6', '#a079d0', '#b6a6f3']}
                    flex={1}>
        <View flex={1}>
            <HStack alignItems="center" space={4} p={3}>
                <View w={'80%'}><Text fontSize={15}>Уведомления</Text></View>
             <Switch defaultIsChecked  size="lg" />
        </HStack>
            <Divider my={2} bg={'#d15ff6'}/>
            <HStack alignItems="center" space={4} p={3}>
                <View w={'80%'}><Text fontSize={15}>Звук уведомлений</Text></View>
                <Switch defaultIsChecked  size="lg" />
            </HStack>
            <Divider my={2} bg={'#d15ff6'}/>
            <TouchableOpacity onPress={()=>{
                AsyncStorage.removeItem('@account')
                navigation.navigate('Login')
            }}>
                <HStack alignItems="center" space={4} p={3}>
                    <View w={'80%'}><Text fontSize={15} color={'#ff0000'}>Выход</Text></View>
                </HStack>
            </TouchableOpacity>
            <Divider my={2} bg={'#d15ff6'}/>
            <HStack alignItems="center" space={4} p={3}>
                <View w={'80%'}><Text fontSize={15}>Версия приложения 1.0.5</Text></View>

            </HStack>
            <Divider my={2} bg={'#d15ff6'}/>
        </View>
    </LinearGradient>
    )
};

export default Settings;
