import React from 'react';
import {Button, Divider, Text, VStack} from "native-base";

const TariffCard = (props) => (
    <VStack bg={'#ffffff33'} m={3} borderWidth={1} borderColor={'#c3c3c3'} alignItems={'center'} mt={3}>
        <VStack mb={2} w={'full'} bg={'rgb(117, 33, 147)'} alignItems={'center'}>
            <Text color={'#ffffff'} fontSize={13} fontWeight={'bold'}>Новоуральск</Text>
            <Text color={'#ffffff'} fontSize={15} fontWeight={'500'}>{props.item.name}</Text>
        </VStack>
        {props.item.options.map((x) => (
            <>
                <Text>{x.name}</Text>
                <Text>{x.description} <Text fontWeight={'bold'}>{x.accentText}</Text></Text>
                <Divider my={2}/>
            </>
        ))}
        <Text>АБОНЕНТСКАЯ ПЛАТА</Text>
        <Text><Text fontWeight={'bold'}>{props.item.cost}</Text> ₽/мес.*</Text>

        <Button mt={2} w={'full'} bg={props.disableButton ? '#999999' : 'rgb(117, 33, 147)'} disabled={props.disableButton}
                onPress={() => {
                    props.onSelectTariff(props.item._id)
                }}
        >Подключиться</Button>

    </VStack>
);

export default TariffCard;
