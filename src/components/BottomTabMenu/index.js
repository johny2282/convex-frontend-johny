import React, {useEffect} from 'react';
import {Box, Center, HStack, Icon, Pressable, Text} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";
import {Alert, Linking, BackHandler} from "react-native";

const BottomTabNavigation = (props) => {
    const [selected, setSelected] = React.useState(0);
    const navigation = useNavigation();
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Выход', 'Вы уверены, что хотите закрыть приложение', [
                {
                    text: 'Отмена',
                    onPress: () => null,
                    style: 'cancel',
                },
                {text: 'ДА', onPress: () => BackHandler.exitApp()},
            ]);
            return true;

        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
        return () => backHandler.remove();
    }, [])
    return (
        <HStack bg={"#981D97"} alignItems="center" safeAreaBottom shadow={6}  position={'absolute'} bottom={0} zIndex={5}>
            <Pressable  cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="5" flex={1} onPress={() => {
                setSelected(0)
                navigation.navigate('Main')
            }}>
                <Center>
                    <Icon  as={<MaterialIcons name={selected === 0 ? "person" : "person-outline"} />} color="white" size="sm" />

                </Center>
            </Pressable>

            <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {
                setSelected(3)
                navigation.navigate('Products')
            }}>
                <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={'menu'} />} color={ "#fff" } size="sm" />
                </Center>
            </Pressable>
            <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {
                setSelected(2)
                navigation.navigate('Settings')
            }}>
                <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? "cog" : "cog-outline"} />} color="white" size="sm" />

                </Center>
            </Pressable>
            <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {
                setSelected(3)
                Linking.openURL('https://t.me/+kuQ4J__ERjpmYTU6');
            }}>
                <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={'message'} />} color={"#fff"} size="sm" />

                </Center>
            </Pressable>
            <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {
                navigation.navigate('About')
            }}>
                <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={'information-outline'} />} color={"#fff"} size="sm" />

                </Center>
            </Pressable>
        </HStack>
    )
    }

;

export default BottomTabNavigation;
