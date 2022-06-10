import React from 'react';
import {Center, Text, View, Box, HStack,  Icon} from "native-base";
import BottomTabMenu from "../../components/BottomTabMenu";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import materialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Products = (props) => {
    const navigation = useNavigation()
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#f6fbff', '#b7bbda', '#bebbf8']}
                        flex={1}>
        <View flex={1} bg={LinearGradient}>
            <Center>
                <HStack mt={2}>
                    <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} ml={'1%'} bordeRadius={5} py={5}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Tariff")}}>
                        <HStack  alignItems={'center'} justifyContent={'flex-start'}>
                            <Icon as={MaterialIcons} name={'credit-card'} size={12} color={'#1d3b87'} mr={2}/>
                          <Text color={'#1d3b87'} fontWeight={'bold'} >{`Оплата и ${'\n'} расчеты`}</Text>
                        </HStack>
                        </TouchableOpacity>
                    </Box>
                    <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} mx={'1%'} flexShrink={1} bordeRadius={5}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Tariff")}}>
                        <HStack alignItems={'center'} justifyContent={'flex-start'}>
                            <Icon as={MaterialIcons} name={'tune'} size={12} color={'#1d3b87'} mr={2}/>
                            <Text color={'#1d3b87'} fontWeight={'bold'} >{`Управление ${'\n'} тарифом`}</Text>
                        </HStack>
                        </TouchableOpacity>
                    </Box>
                </HStack>
                <HStack mt={1} >
                    <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} ml={'1%'} bordeRadius={5} py={5}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Tariff")}}>
                        <HStack  alignItems={'center'} justifyContent={'flex-start'}>
                            <Icon as={MaterialCommunityIcons} name={'cast-variant'} size={12} color={'#1d3b87'} mr={2}/>
                            <Text color={'#1d3b87'} fontWeight={'bold'} >{`Цифровое ТВ`}</Text>
                        </HStack>
                        </TouchableOpacity>
                    </Box>
                    <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} mx={'1%'} flexShrink={1} bordeRadius={5}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Video")}}>
                        <HStack alignItems={'center'} justifyContent={'flex-start'}>
                            <Icon as={MaterialCommunityIcons} name={'video-outline'} size={12} color={'#1d3b87'} mr={2}/>
                            <Text color={'#1d3b87'} fontWeight={'bold'} >{`Видеонаблюдение`}</Text>
                        </HStack>
                        </TouchableOpacity>
                    </Box>
                </HStack>
                <HStack mt={1}>

                        <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} ml={'1%'} bordeRadius={5} py={5}>
                            <TouchableOpacity onPress={() => {navigation.navigate("ChildInternet")}}>
                            <HStack  alignItems={'center'} justifyContent={'flex-start'}>
                                <Icon as={MaterialCommunityIcons} name={'shield-check-outline'} size={12} color={'#1d3b87'} mr={2}/>
                                <Text color={'#1d3b87'} fontWeight={'bold'} >{`Детский и ${'\n'} интернет`}</Text>
                            </HStack>
                            </TouchableOpacity>
                        </Box>

                    <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} mx={'1%'} flexShrink={1} bordeRadius={5}>
                        <TouchableOpacity onPress={() => {navigation.navigate("ScheduleInternet")}}>
                        <HStack alignItems={'center'} justifyContent={'flex-start'}>
                            <Icon as={MaterialCommunityIcons} name={'calendar-month'} size={12} color={'#1d3b87'} mr={2}/>
                            <Text color={'#1d3b87'} fontWeight={'bold'} >{`Интернет по ${'\n'} расписанию`}</Text>
                        </HStack>
                        </TouchableOpacity>
                    </Box>
                </HStack>

                <HStack mt={1}>
                    <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} ml={'1%'} bordeRadius={5} py={5}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Antivirus")}}>

                        <HStack  alignItems={'center'} justifyContent={'flex-start'}>
                            <Icon as={MaterialCommunityIcons} name={'shield-lock'} size={12} color={'#1d3b87'} mr={2}/>
                            <Text color={'#1d3b87'} fontWeight={'bold'} >{`Антивирус`}</Text>
                        </HStack>
                        </TouchableOpacity>
                    </Box>
                    <Box w={'48%'} bg={'rgba(198,243,251,0.24)'} p={3} ml={'1%'} bordeRadius={5} py={5}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Pause")}}>
                        <HStack  alignItems={'center'} justifyContent={'flex-start'}>
                            <Icon as={MaterialCommunityIcons} name={'pause-circle-outline'} size={12} color={'#1d3b87'} mr={2}/>
                            <Text color={'#1d3b87'} fontWeight={'bold'} >{`Приостановка`}</Text>
                        </HStack>
                        </TouchableOpacity>
                    </Box>
                </HStack>

            </Center>
            <BottomTabMenu />

        </View>
        </LinearGradient>
    )
};

export default Products;
