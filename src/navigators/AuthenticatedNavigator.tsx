
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type ReactElement } from 'react';

import { type AuthenticatedStackNavigatorParamList } from '@/types/navigation';

import { BottomTabNavigator } from './BottomTabNavigator';
import { ChatScreen } from '@/screens/authenticated/chat';

const Stack = createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export const AuthenticatedNavigator = (): ReactElement => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}

                options={{ animation: 'slide_from_bottom' }}
            />

        </Stack.Navigator>
    );
};

export default AuthenticatedNavigator;
