import React from 'react';
import {Center, HStack, Image, Text, View} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import drWebLogo from '../../../assets/spider_only.png'
import BottomTabMenu from "../../../components/BottomTabMenu";

const Antivirus = (props) => {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#89c0f6', '#a079d0', '#b6a6f3']}
                        flex={1}>
            <Center>
                <Image source={drWebLogo}/>
                <Text fontWeight={'900'} my={3}>Уважаемые Абоненты!</Text>
                <Text my={3}>Теперь вы можете воспользоваться сервисом «Антивирус по подписке»</Text>
                <HStack>
                    <View mx={3} w={2} bg={'rgb(152, 29, 151)'}/>
                    <Text my={3} fontSize={14} fontStyle={'italic'}>Подписка - это наиболее удобный, современный и экономически выгодный способ использовать самые известные антивирусные продукты.</Text>
                </HStack>
                <Text my={3}>Активировав подписку на программное обеспечение, Вы можете использовать его до тех пор, пока на Вашем лицевом счете достаточно денежных средств, и при этом имеете возможность управлять состоянием подписки из Личного кабинета.</Text>
            </Center>
            <BottomTabMenu />

        </LinearGradient>
    )
};

export default Antivirus;
