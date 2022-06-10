import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {Center, Divider, Heading, HStack, Icon, Pressable, ScrollView, Text, View, VStack} from "native-base";
import {Linking} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const About = (props) => {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#f6fbff', '#b7bbda', '#bebbf8']}
                        flex={1}>
            <ScrollView>
                <Heading textAlign={'center'}>О Компании</Heading>
                <Divider my={2}/>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'}>
                        <View w={'12px'} h={'12px'} bg={'rgb(80, 45, 147)'} borderRadius={6}/>
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack>
                        <Text>
                            ООО "Конвекс-Новоуральск"
                        </Text>
                    </VStack>
                </HStack>
                <Divider my={2}/>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'}>
                        <View w={'12px'} h={'12px'} bg={'rgb(80, 45, 147)'} borderRadius={6}/>
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack>
                        <Text>
                            ИНН 6629024913
                        </Text>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'}>
                        <View w={'12px'} h={'12px'} bg={'rgb(80, 45, 147)'} borderRadius={6}/>
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack>
                        <Text>
                            г. Новоуральск, ул. Ленина, 107
                        </Text>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'}>
                        <View w={'12px'} h={'12px'} bg={'rgb(80, 45, 147)'} borderRadius={6}/>
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack>
                        <Text>
                            понедельник - пятница: с 09:00 до 18:00
                        </Text>
                        <Text>
                            суббота: с 09:00 до 17:00
                        </Text>
                        <Text>
                            воскресенье: выходной
                        </Text>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'}>
                        <View w={'12px'} h={'12px'} bg={'rgb(80, 45, 147)'} borderRadius={6}/>
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack>
                        <Text>
                            +7 (34370) 5-16-16
                        </Text>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'}>
                        <View w={'12px'} h={'12px'} bg={'rgb(80, 45, 147)'} borderRadius={6}/>
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack>
                        <Text>
                            novo@convex.ru
                        </Text>
                    </VStack>
                </HStack>
                <Divider my={2}/>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'} alignItems={'center'}>
                        <Icon mb="1" as={<MaterialCommunityIcons name={'file-pdf-box'} />} color={"#fff"} size="3xl" />
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack w={'80%'}>
                        <Pressable onPress={()=>{
                            Linking.openURL('https://www.convex.ru/files/tipovoi_dogovor_internet_fl_01_08_2021.pdf')
                        }}>
                            <Text textDecorationLine={'underline'} fontWeight={'bold'}>Типовой договор на оказание услуг электросвязи (услуги интернет) для физических лиц (действует с 01 августа 2021 г.)</Text>
                        </Pressable>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'} alignItems={'center'}>
                        <Icon mb="1" as={<MaterialCommunityIcons name={'file-pdf-box'} />} color={"#fff"} size="3xl" />
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack w={'80%'}>
                        <Pressable onPress={()=>{
                            Linking.openURL('https://www.convex.ru/files/reglament_okazaniya_uslug_internet_convex_24_04_18.pdf')
                        }}>
                            <Text textDecorationLine={'underline'} fontWeight={'bold'}>Регламент оказания телематических услуг и услуг связи по передаче данных (услуги интернет) CONVEX</Text>
                        </Pressable>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'} alignItems={'center'}>
                        <Icon mb="1" as={<MaterialCommunityIcons name={'file-pdf-box'} />} color={"#fff"} size="3xl" />
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack w={'80%'}>
                        <Pressable onPress={()=>{
                            Linking.openURL('https://www.convex.ru/files/publichnaya_oferta_iptv_TKS.pdf')
                        }}>
                            <Text textDecorationLine={'underline'} fontWeight={'bold'}>Публичная оферта о заключении договора на оказание услуг цифрового телевизионного вещания</Text>
                        </Pressable>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'} alignItems={'center'}>
                        <Icon mb="1" as={<MaterialCommunityIcons name={'file-pdf-box'} />} color={"#fff"} size="3xl" />
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack w={'80%'}>
                        <Pressable onPress={()=>{
                            Linking.openURL('https://www.convex.ru/files/polozhenie_ob_obrabotke_pd.pdf')
                        }}>
                            <Text textDecorationLine={'underline'} fontWeight={'bold'}>Положение об обработке персональных данных </Text>
                        </Pressable>
                    </VStack>
                </HStack>
                <HStack w={'full'} p={3}>
                    <VStack w={'10%'} alignItems={'center'}>
                        <Icon mb="1" as={<MaterialCommunityIcons name={'file-pdf-box'} />} color={"#fff"} size="3xl" />
                    </VStack>
                    <Divider orientation={'vertical'} mx={2} />
                    <VStack w={'80%'}>
                        <Pressable onPress={()=>{
                            Linking.openURL('https://www.convex.ru/files/forma_soglasiya_abonenta_na_obrabotku_pd.pdf')
                        }}>
                            <Text textDecorationLine={'underline'} fontWeight={'bold'}>Форма согласия абонента на обработку персональных данных</Text>
                        </Pressable>
                    </VStack>
                </HStack>
            </ScrollView>
        </LinearGradient>
    )
};

export default About;
