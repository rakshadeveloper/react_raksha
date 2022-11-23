import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

const ListPage = ({ navigation }) => {
    const listData = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={listData}
                renderItem={({ item, index }) => {
                    return <FlatlistCard title={item.title} navigation={navigation} />
                }}
            />
        </SafeAreaView>
    );
}

const FlatlistCard = ({ title, navigation }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail')
        }}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default ListPage;