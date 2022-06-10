import React from 'react';
import {Center, Image, Text, View} from "native-base";
import BottomTabMenu from "../../../components/BottomTabMenu";
import childPic from '../../../assets/child.jpg'

const ScheduleInternet = (props) => (
    <View flex={1} >
        <Center>
            <Image source={childPic} alt={'child pic'}/>
            <Text mt={3} textAlign={'center'} p={2}>Запланированное включение и отключение доступа к сети Интернет. Управление услугой осуществляется прямо из Личного Кабинета абонента на сайте Convex. График активности интернет соединения составляется на неделю и действует до момента отключения услуги.</Text>
            <Text mt={3} textAlign={'center'} p={2}>Расписание включения/отключения Интернет соединения распространяется на все устройства по вашему адресу. Для работы Цифрового ТВ соединение с интернетом не требуется.</Text>
        </Center>
        <BottomTabMenu />

    </View>
);

export default ScheduleInternet;
