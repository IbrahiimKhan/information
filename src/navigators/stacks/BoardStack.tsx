import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type FC } from 'react';

import { FeedScreen } from '@/screens/authenticated/feed';
import { type BoardStackParamList, type BottomTabNavigatorScreenProps } from '@/types/navigation';

const Stack = createNativeStackNavigator<BoardStackParamList>();

export const Account: FC<BottomTabNavigatorScreenProps<'BoardStack'>> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                animationDuration: 0,
            }}>
            <Stack.Screen
                name="Account"
                component={FeedScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
