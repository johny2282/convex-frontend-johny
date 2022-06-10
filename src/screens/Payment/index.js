import React, {useEffect, useState} from 'react';
import {Button, Divider, HStack, Input, ScrollView, View, VStack, Text} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import BottomTabMenu from "../../components/BottomTabMenu";

const Index = (props) => {
    const [user, setUser] = useState(null)
    const [amount, setAmount] = useState(null)
    const [card, setCard] = useState(null)
    const [cardHolder, setCardHolder] = useState(null)
    const [cardExpire, setCardExpire] = useState(null)
    const [cardCvc, setCardCvc] = useState(null)
    const [cardNumberError, setCardNumberError] = useState(false)
    const [cardHolderError, setCardHolderError] = useState(false)
    const [cardExpireError, setCardExpireError] = useState(false)
    const [cardCvcError, setCardCvcError] = useState(false)
    useEffect(() => {
        AsyncStorage.getItem('@profile').then((json) => {
            if (json) {
                setUser(JSON.parse(json))
                console.log(user)
            }
        })
        console.log(user)
    }, [])
    async function submit() {
        if (card.length<18) {
            setCardNumberError(true)
            return
        }
        if (cardHolder.length<2) {
            setCardHolderError(true)
            return
        }
        if (cardExpire.length<5) {
            setCardExpireError(true)
            return
        }
        if (cardCvc.length!==3) {
            setCardCvcError(true)
            return
        }
        console.log(amount, user._id, card)
        let answer = await axios.post('http://ovz29.kunail919.pv29m.vps.myjino.ru/api/user/paymentDo', {amount, id: user._id, card: card.substr(card.length - 4)})
        console.log('submit', answer.data.message)
        await AsyncStorage.setItem('@profile', JSON.stringify(answer.data.message))
        setUser(answer.data.message)
    }

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
        <View flex={1}>
            <VStack p={3}>
                <Input borderColor={cardNumberError ?  '#ff0000' : '#aaaaaa'} value={card} keyboardType="numeric" variant="outline" placeholder={'Номер карты: XXXX XXXX XXXX XXXX'}
                       onChangeText={(v)=>{
                    setCardNumberError(false)
                    if (v.length===4) {v=v+' '}
                    if (v.length===9) {v=v+' '}
                    if (v.length===14) {v=v+' '}
                    setCard(v)
                }}
                />
                <HStack w={'full'}>
                    <Input borderColor={cardHolderError ?  '#ff0000' : '#aaaaaa'} variant="filled" w={'75%'} placeholder={'Держатель: IVAN IVANOV'}  onChangeText={(v)=>{
                        setCardHolderError(false)
                        setCardHolder(v)
                    }}/>
                    <Divider orientation={'vertical'}   />
                    <Input borderColor={cardExpireError ?  '#ff0000' : '#aaaaaa'} value={cardExpire} keyboardType="numeric" variant="filled" w={'25%'} placeholder={'ММ/ГГ'}
                           onChangeText={(v)=>{
                               setCardExpireError(false)
                               if (v.length===2) {
                                   v=v+'/'
                               }
                               setCardExpire(v)
                           }}
                    />

                </HStack>

                <Input borderColor={cardCvcError ?  '#ff0000' : '#aaaaaa'} value={cardCvc} keyboardType="numeric" variant="outline" placeholder={'CVC  код'}
                       onChangeText={(v)=>{
                           setCardCvcError(false)
                           setCardCvc(v)
                       }}
                />
                <Input keyboardType="numeric" variant="outline" placeholder={'Сумма'} onChangeText={(v)=>{
                    setAmount(v)
                }}/>
                <Button onPress={submit}>Оплатить</Button>
            </VStack>
            <Divider my={2} />
            <ScrollView>
                {user && user.payments && (
                    <>
                        {user.payments.map(item => (
                            <HStack key={item.timeLabel} mx={1} p={2} bg={'#ffffff'} shadow={3} my={2} alignItems={'center'}>
                                <VStack w={'80%'}>
                                    <Text>{formatRusTime(new Date(item.timeLabel))}</Text>
                                    <Text color={'#bbbbbb'}>**** **** **** {item.card}</Text>
                                </VStack>
                                <VStack alignItems={'flex-end'} w={'20%'}><Text fontWeight={'900'}>{item.amount} руб.</Text></VStack>
                            </HStack>
                        ))}
                    </>
                )}
            </ScrollView>
            <BottomTabMenu />

        </View>
    )
};

export default Index;
