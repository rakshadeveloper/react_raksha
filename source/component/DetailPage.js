import React from 'react';
import { View, Text } from 'react-native';

const DetailPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text
                onPress={() => {
                    navigation.navigate('List Page')
                }}
                style={{
                    color: 'red'
                }}>Detail Page</Text>
        </View>
    );
}

export default DetailPage;