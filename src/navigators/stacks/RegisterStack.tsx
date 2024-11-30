import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type FC } from 'react';

import { HomeScreen } from '@/screens/authenticated/home';
import { type BottomTabNavigatorScreenProps, type RegisterStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

export const RegisterStack: FC<BottomTabNavigatorScreenProps<'RegisterStack'>> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                animationDuration: 0,
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
