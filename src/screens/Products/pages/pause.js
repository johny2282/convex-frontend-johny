import React from 'react';
import {Center, View, Switch, Text, HStack, VStack, Heading, Image, ScrollView} from "native-base";
import pausePic from '../../../assets/pause.jpg'
import BottomTabMenu from "../../../components/BottomTabMenu";

const Pause = (props) => (
    <View flex={1} >
        <ScrollView h={'50%'} _contentContainerStyle={{
            px: "20px",
            mb: "34",
            pb: "100",
            minW: "72"
        }} >
            <VStack alignItems="center" space={4}>
                <Heading>Приостановка обслуживания</Heading>
                <Image source={pausePic} alt={'pausePic'} />
                <Text mt={3} textAlign={'center'} p={2}>
                    Возможность приостановить обслуживание услуг связи для действующих абонентов на срок от 2-х недель до 6 месяцев. Подать заявку необходимо не позднее чем за 24 часа до дня приостановления обслуживания. Дополнительная оплата за услугу не взымается.
                </Text>
                <Text mt={1} textAlign={'center'} px={2}>
                    Оставить заявку для приостановки обслуживания вы можете в любом офисе компании «Convex»; по телефону 8(3435)379-379; либо на сайте в личном кабинете: Выберите категорию «Услуги и сервисы», затем пункт «Временная приостановка обслуживания», после этого нажмите кнопку «Подать заявку». «Приостановка обслуживания» возможна только при неотрицательном балансе.
                </Text>

            </VStack>
        </ScrollView>
        <BottomTabMenu />
    </View>
);

export default Pause;
