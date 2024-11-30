import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type FC } from 'react';

import { BoardScreen } from '@/screens/authenticated/board';
import { type BoardStackParamList, type BottomTabNavigatorScreenProps } from '@/types/navigation';

const Stack = createNativeStackNavigator<BoardStackParamList>();

export const BoardStack: FC<BottomTabNavigatorScreenProps<'BoardStack'>> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                animationDuration: 0,
            }}>
            <Stack.Screen
                name="Board"
                component={BoardScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
