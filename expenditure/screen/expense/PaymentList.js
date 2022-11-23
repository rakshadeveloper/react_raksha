import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import { monthName } from "./AddPayment";


const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{...styles.item, backgroundColor: "#00000040"}}>
    <Text style={{...styles.title, color:'#FFFFFF'}}>{monthName[item?.month-1]?.label} - {item.year}</Text>
    <Text style={{...styles.title, color:'#FFFFFF'}}>Amount : {item.amount}</Text>
  </TouchableOpacity>
);

const PaymentList= () => {
  const [selectedId, setSelectedId] = useState(null);
  const [paymentList, setPaymentList] = useState([]);


 

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={paymentList}
        renderItem={renderItem}
        keyExtractor={(item) =>item?.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default PaymentList;