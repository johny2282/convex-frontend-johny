import React, {useEffect, useState} from 'react';
import LinearGradient from "react-native-linear-gradient";
import {Box, Button, Center, Divider, Modal, ScrollView, Text, useToast, View, VStack} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import BottomTabMenu from "../../../components/BottomTabMenu";
import TariffCard from "../../../components/UI/TariffCard";


const Tariff = (props) => {
    const [user, setUser] = useState(null)
    const [newTariffName, setNewTariffName] = useState(null)
    const [newTariffPrice, setNewTariffPrice] = useState(null)
    const [tariffs, setTariffs] = useState(null)
    const [showChangeTariffDialog, setShowChangeTariffDialog] = useState(false)
    const navigation = useNavigation()
    const toast = useToast()

    useEffect(() => {
        AsyncStorage.getItem('@account').then(json=>{
            if (json) {
                axios.post('http://ovz29.kunail919.pv29m.vps.myjino.ru/api/user/get', {account: json}).then(response=>{
                    if (response && response.data) {
                        setUser(response.data.message)
                        console.log('!!!!!!!!!!', response.data.message)
                        AsyncStorage.setItem('@profile', JSON.stringify(response.data.message))

                    }
                })
            }

        })
        axios.get('http://ovz29.kunail919.pv29m.vps.myjino.ru/api/tariff/getAll').then((response)=>{
            setTariffs(response.data.message)
        })
    }, [])


    async function _handleTariffSelect(tariffId) {
        console.log('id ', tariffId)
        let answer = await axios.post('http://ovz29.kunail919.pv29m.vps.myjino.ru/api/user/changeTariff', {
            id: user._id,
            tariff: tariffId,
        })
        AsyncStorage.setItem('@profile', JSON.stringify(answer.data.message))
        toast.show({
            status: 'success',
            description: 'Тариф успешно изменен'
        })
        navigation.navigate('Login')
    }

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#89c0f6', '#a079d0', '#b6a6f3']}
                        flex={1}>
            <ScrollView>
                <Center>
                    <Box border="1" borderRadius="md">
                        <VStack space="4" divider={<Divider />}>
                            <Box px="4" pt="4">
                                <Text fontSize={16} fontWeight={'bold'}>Интернет и Интерактивное телевидение</Text>
                            </Box>
                            {tariffs && tariffs.length > 0 && (
                                <>
                                    {tariffs.map((item)=>{
                                        return (
                                            <TariffCard key={item._id} item={item} disableButton={user.tariff && user.tariff._id===item._id} onSelectTariff={_handleTariffSelect} />
                                        )
                                    })}
                                </>
                            )}
                        </VStack>
                    </Box>
                 </Center>
            </ScrollView>
            <Modal isOpen={showChangeTariffDialog} onClose={() => setShowChangeTariffDialog(false)} _backdrop={{
                _dark: {
                    bg: "coolGray.800"
                },
                bg: "warmGray.50"
            }}>
                <Modal.Content maxWidth="350" maxH="212">
                    <Modal.CloseButton />
                    <Modal.Header>Изменение тарифа</Modal.Header>
                    <Modal.Body>
                      <Text>
                          Вы уверены, что хотите сменить тариф на <Text fontWeight={'bold'}>{newTariffName}</Text>
                      </Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowChangeTariffDialog(false);
                            }}>
                                Нет
                            </Button>
                            <Button bg={'rgb(152, 29, 151)'} onPress={() => {
                                setShowChangeTariffDialog(false);
                                changeTariff()
                            }}>
                                Да
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <BottomTabMenu />

        </LinearGradient>
    )
};

export default Tariff;
