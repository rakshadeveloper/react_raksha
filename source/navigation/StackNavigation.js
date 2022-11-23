import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from '../component/FirstPage';
import ListPage from '../component/ListPage';
import DetailPage from '../component/DetailPage';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name="First Page"
                    component={FirstPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="List Page"
                    component={ListPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailPage}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StackNavigation;