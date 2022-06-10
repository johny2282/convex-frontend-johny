import React, {useEffect, useState} from 'react';
import {
    Button,
    Center,
    Icon,
    Image,
    Input,
    KeyboardAvoidingView,
    Spinner,
    Stack,
    Text,
    useToast,
    View
} from "native-base";
import Logo from '../../assets/logo.jpg'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import {Platform, Dimensions } from "react-native";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ScreenStack} from "react-native-screens";

const Login = (props) => {
    const [show, setShow] = React.useState(false);
    const [account, setAccount] = useState(null)
    const [password, setPassword] = useState(null)
    const [loader, setLoader] = useState(false)
    const toast = useToast();
    const navigation = useNavigation();
    async function login () {
        setLoader(true)
        console.log('===== login start =====')
        if (!account || ! password) {
            toast.show({
                title: 'Ошибка',
                description: 'Заполните все поля',
                status: 'error',
            })
            setLoader(false)
            return
        }
        let answer = await axios.post('http://ovz29.kunail919.pv29m.vps.myjino.ru/api/user/login', {credentials: {account, password}})
        console.log(answer.data)
        if (!answer.data.message) {
            toast.show({
                title: 'Ошибка',
                description: 'Логин или пароль не верен',
                status: 'error',
            })
            setLoader(false)
            return
        }
        await AsyncStorage.setItem('@account', account)
        navigation.navigate('Main')
        setLoader(false)
    }

    return (
        <KeyboardAvoidingView  minHeight={Dimensions.get('screen').height} flex={1} bg={'#981D97'} behavior={Platform.OS === "ios" ? "padding" : "padding"} zIndex={9}>
            <Center with={'full'} h={'full'} px={4}>
                <Image source={Logo} alt={'Login'}/>
                <Stack space={4} w="100%" alignItems="center">
                    <Input
                        bg={'#00000077'}
                        fontWeight={'bold'}
                        onChangeText={(v)=>{
                            setAccount(v)
                        }}
                        borderColor={'#efefef'}
                        color={'#efefef'}
                        keyboardType = 'numeric'
                        w={{
                        base: "75%",
                        md: "25%"
                    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="№ лицевого счета" />
                    <Input
                        bg={'#00000077'}
                        color={'#efefef'}
                        fontWeight={'bold'}
                        onChangeText={(v)=>{
                            setPassword(v)
                        }}
                        borderColor={'#efefef'} w={{
                        base: "75%",
                        md: "25%"
                    }} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Пароль" />
                </Stack>
                {!loader && (
                    <Button backgroundColor={'#000000'} mt={3} onPress={login}>
                        <Text color={'#ffffff'} textTransform={'uppercase'} fontWeight={'900'}>
                            Войти
                        </Text>
                    </Button>
                )}
                {loader && (
                    <Spinner />
                )}
            </Center>
        </KeyboardAvoidingView>
    )
};

export default Login;
