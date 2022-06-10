import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {Center, HStack, Image, ScrollView, Text, View, VStack} from "native-base";
import Camera0 from '../../../assets/vid_cam2.png'
import Camera1 from '../../../assets/vid_sl_1.png'
import Camera2 from '../../../assets/vid_sl_2.png'
import Camera3 from '../../../assets/vid_sl_3.png'
import BottomTabMenu from "../../../components/BottomTabMenu";


const Video = (props) => {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#89c0f6', '#beadd5', '#b6a6f3']}
                        flex={1}>
            <ScrollView mx={1}>
                <Text fontWeight={'900'} color={'rgb(186, 21, 142)'} fontSize={24}>Видеонаблюдение</Text>
                <Text><Text fontWeight={'bold'}>«Convex. Безопасный двор»</Text> - масштабный проект, потенциал которого способен покрыть весь многоквартирный жилой массив города Новоуральск.</Text>
                <HStack mx={2} mt={3}>
                    <View mx={3} w={2} bg={'rgb(152, 29, 151)'}/>
                    <Text my={3} fontSize={14} fontStyle={'italic'}>Цель проекта - снижение риска возникновения фактов вандализма, разбоя, краж и прочих противоправных действий посредством установки систем видеофиксации на придомовой территории.

                        Вам не нужно приобретать дорогостоящее оборудование и беспокоиться о его содержании и обслуживании - мы все это сделаем за Вас.</Text>
                </HStack>
                <View>
                    <Image resizeMode={'contain'} w={'full'}  source={Camera0} />
                </View>
                <Text fontSize={18} fontWeight={'bold'} color={'rgb(186, 21, 142)'}>СМОТРИТЕ НА ЛЮБЫХ УСТРОЙСТВАХ</Text>
                <Text>Возможен просмотр видео в реальном времени, а также доступ к архиву записей прямо в личном кабинета данного сервиса.</Text>
                <VStack>
                    <Image resizeMode={'contain'} w={'full'} source={Camera1} />
                    <VStack>
                        <Text fontWeight={'bold'} color={'rgb(186, 21, 142)'}>ПК / НОУТБУК</Text>
                        <Text>Трансляция камер прямо на вашем домашнем компьютере или ноутбуке! Смотрите через приложение или браузер.</Text>
                    </VStack>
                </VStack>

                <HStack>
                    <Image />
                    <VStack>
                        <Image resizeMode={'contain'} w={'full'} source={Camera2} />
                        <Text fontWeight={'bold'} color={'rgb(186, 21, 142)'}>ПЛАНШЕТ</Text>
                        <Text>Безопасный двор прямо в вашем планшете! Все камеры в вашем дворе в одном приложении.</Text>
                    </VStack>
                </HStack>

                <HStack>
                    <Image />
                    <VStack>
                        <Image resizeMode={'contain'} w={'full'} source={Camera3} />
                        <Text fontWeight={'bold'} color={'rgb(186, 21, 142)'}>ТЕЛЕФОН</Text>
                        <Text>Весь двор как на ладони! Камеры видеонаблюдения в вашем мобильном. Доступ из любой точки мира!</Text>
                    </VStack>
                </HStack>
            </ScrollView>
            <BottomTabMenu />

        </LinearGradient>
    )
};

export default Video;
