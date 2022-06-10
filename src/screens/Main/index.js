import React, {useEffect, useState} from 'react';
import {Button, Center, Divider, HStack, Text, View, VStack} from "native-base";
import BottomTabMenu from "../../components/BottomTabMenu";
import {FlatList, TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";

const Main = (props) => {
    const [userData, setUserData] = useState(null)
    const navigation = useNavigation()
    useEffect(()=>{
        AsyncStorage.getItem('@account').then(json=>{
            if (json) {
                axios.post('http://ovz29.kunail919.pv29m.vps.myjino.ru/api/user/get', {account: json}).then(response=>{
                    if (response && response.data) {
                        setUserData(response.data.message)
                        console.log(response.data.message.tariff)
                        AsyncStorage.setItem('@profile', JSON.stringify(response.data.message))
                    }
                })
            }
        })

    }, [])

    function formatRusTime(d){
        const day = d.getDay(); // 0 - 6
        const dayTitle = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

        const date = d.getDate().toString().padStart(2, "0");

        const month = d.getMonth(); // 0 - 11
        const monthTitle = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const year = d.getFullYear();

        const h = d.getHours().toString().padStart(2, "0");
        const m = d.getMinutes().toString().padStart(2, "0");

        return `${dayTitle[day]}, ${date} ${monthTitle[month]} ${year}, ${h}:${m}`
    }


    return (
        <View flex={1} >
            <Center>
                {userData && (
                    <VStack w={'5/6'} mt={2} >
                        <VStack>
                            <Text>{userData.privateInfo.lastName} {userData.privateInfo.firstName} {userData.privateInfo.secondName}</Text>
                            <Text fontSize={13} color={'#5f5f5f'} fontStyle={'italic'}>ФИО</Text>
                        </VStack>
                        <Divider my={2} bg={'#d15ff6'}/>
                        <VStack>
                            <Text>{userData.account}</Text>
                            <Text fontSize={13} color={'#5f5f5f'} fontStyle={'italic'}>Номер лицевого счета</Text>
                        </VStack>
                        <Divider my={2} bg={'#d15ff6'}/>
                        <VStack>
                            <Text>{userData.balance} руб.</Text>
                            <Text fontSize={13} color={'#5f5f5f'} fontStyle={'italic'}>Баланс лицевого счета</Text>
                        </VStack>
                        <Divider my={2} bg={'#d15ff6'}/>
                        {userData.tariff && (
                            <VStack>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Tariff")
                                }} >
                                    <HStack>
                                        <View w={'4/6'}>
                                            <Text>{userData.tariff.name}</Text>
                                            <Text fontSize={13} color={'#5f5f5f'} fontStyle={'italic'}>Название тарифа</Text>
                                        </View>
                                        <VStack justifyContent={'center'}>
                                            <Text fontSize={16} fontWeight={'900'}>{userData.tariff.cost} руб/мес</Text>
                                        </VStack>
                                    </HStack>
                                </TouchableOpacity>
                            </VStack>
                        )}
                        <Divider my={2} bg={'#d15ff6'}/>
                        <VStack>
                            <Text>{formatRusTime(new Date(new Date().getTime()+1000*60*60*24*17))}</Text>
                            <Text fontSize={13} color={'#5f5f5f'} fontStyle={'italic'}>Дата окончания тарифа</Text>
                        </VStack>
                    </VStack>
                )}
            </Center>
            <Button onPress={()=>{navigation.navigate('Payment')}} mt={10}>Пополнить баланс</Button>
            <BottomTabMenu />

        </View>
    )
};

export default Main;
