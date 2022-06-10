import React from 'react';
import {Divider, Heading, HStack, Image, Text, View, VStack} from "native-base";
import skyDns from "../../../assets/SkyDNS_Logo.jpg"
import BottomTabMenu from "../../../components/BottomTabMenu";

const ChildInternet = (props) => {
    return (
        <View flex={1} bg={'#ffffff'} p={2}>
            <VStack alignItems={'center'}>
                <Heading>
                    Сервис родительского контроля доступа в Интернет SkyDNS.
                </Heading>
                <Image source={skyDns} alt={"sky logo"} />
                <Divider  my={2} />
               <VStack alignItems={'flex-start'} px={2}>
                   <HStack alignItems={'center'} justifyContent={'flex-start'}>
                       <View w={'6px'} h={'6px'} mr={3} borderWidth={1} borderRadius = {25} bg={'#981D97'}/>
                       <Text>Защита от любых баннеров, всплывающих окон и другой рекламы.</Text>
                   </HStack>
                   <HStack alignItems={'center'} justifyContent={'flex-start'}>
                       <View w={'6px'} h={'6px'} mr={3} borderWidth={1} borderRadius = {25} bg={'#981D97'}/>
                       <Text>Блокировка подозрительных сайтов, социальных сетей и ресурсов с контентом для взрослых.</Text>
                   </HStack>
                   <HStack alignItems={'center'} >
                       <View w={'6px'} h={'6px'} mr={3} borderWidth={1} borderRadius = {25} bg={'#981D97'}/>
                       <Text>Вы сами определяете, на какие сайты может заходить ваш ребенок, а на какие нет.</Text>
                   </HStack><HStack alignItems={'center'} >
                   <View w={'6px'} h={'6px'} mr={3} borderWidth={1} borderRadius = {25} bg={'#981D97'}/>
                   <Text>Универсальный сервис, который защищает как домашнюю сеть в комплексе, так и отдельное устройство.</Text>
               </HStack>
                   <HStack alignItems={'center'} >
                       <View w={'6px'} h={'6px'} mr={3} borderWidth={1} borderRadius = {25} bg={'#981D97'}/>
                       <Text>Подробная статистика показывает, что  именно он делал в сети, куда заходил  и пытался зайти.</Text>
                   </HStack>
                   <HStack alignItems={'center'} >
                       <View w={'6px'} h={'6px'} mr={3} borderWidth={1} borderRadius = {25} bg={'#981D97'}/>
                       <Text>Максимально гибкие настройки  фильтрации, а также понятный  и простой интерфейс.</Text>
                   </HStack>
               </VStack>
            </VStack>
            <BottomTabMenu />

        </View>
    )
};

export default ChildInternet;
