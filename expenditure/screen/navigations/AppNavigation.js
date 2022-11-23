import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';
import Login from '../authentication/Login';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Context as AuthenticationContext,
} from '../context/AuthenticationContext';
import User from '../expense/User';
import ExpenseList from '../expense/ExpenseList';
import AddExpense from '../expense/AddExpense';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PaymentList from '../expense/PaymentList';
import AddPayment from '../expense/AddPayment';
import Setting from '../expense/Setting';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const AppNavigation = ({ }) => {
  const { state: {
    user
  } } = useContext(AuthenticationContext);



  return (
    <>
      <NavigationContainer>
        {
          user == null ?
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
            : <>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Expenditure') {
                      iconName = 'money';
                    }
                    if (route.name === 'Setting') {
                      iconName = 'gears';
                    }
                    if (route.name === 'Payment') {
                      iconName = 'bitcoin';
                    }
                    if (route.name === 'Extension') {
                      // iconName = 'extension';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                  },

                })}
              >
                <Tab.Screen name="Expenditure" component={ExpenseNavigator} />
                <Tab.Screen name="Payment" component={PaymentNavigator} />
                {/* <Tab.Screen name="Profile" component={ProfileNavigator} /> */}
                <Tab.Screen name="Setting" component={SettingNavigator} />
                {/* <Tab.Screen name="Extension" component={ExtensionNavigator} /> */}
              </Tab.Navigator>

            </>
        }
      </NavigationContainer>
    </>
  );
}


const SettingNavigator = ({ navigation }) => {
  const { signout } = useContext(AuthenticationContext);

  return <Stack.Navigator>
    <Stack.Screen name="Settings" component={Setting} options={{
      headerShown: true,
      headerRight: () => (
        <Button
          onPress={() => {
            signout()
          }}
          title="Signout"
          color="#000"
        />
      )
    }} />
  </Stack.Navigator>
}




const ProfileNavigator = ({ navigation }) => {
  return <Stack.Navigator>
    <Stack.Screen name="Profile" component={User} options={{ headerShown: false }} />
  </Stack.Navigator>
}

const ExtensionNavigator = ({ navigation }) => {
  const { signout } = useContext(AuthenticationContext);

  return <Stack.Navigator>
    <Stack.Screen name="ExtensionScreen" component={ExtensionScreen} options={{
      headerShown: true,
      headerRight: () => (
        <Button
          onPress={() => {
            signout()
          }}
          title="Signout"
          color="#000"
        />
      )
    }} />
  </Stack.Navigator>
}



const ExpenseNavigator = ({ navigation }) => {
  return <Stack.Navigator>

    <Stack.Screen name="Expense" component={ExpenseList} options={{
      headerShown: true, headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate("AddExpense")
          }}
          title="Add Expense"
          color="#000"
        />
      )
    }}
    />
    <Stack.Screen name="AddExpense" component={AddExpense} options={{ headerShown: true }} />
  </Stack.Navigator>
}




const PaymentNavigator = ({ navigation }) => {
  return <Stack.Navigator>
    <Stack.Screen name="PaymentList" component={PaymentList} options={{
      headerShown: true,
      //   headerTitle: (props) => <Text>Payment</Text>,
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate("AddPayment")
          }}
          title="Add Payment"
          color="#000"
        />
      )
    }}

    />
    <Stack.Screen name="AddPayment" component={AddPayment} />
  </Stack.Navigator>
}

const ExtensionScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Hi Extension SCreen</Text>
    </SafeAreaView>
  )
}


export default AppNavigation;
