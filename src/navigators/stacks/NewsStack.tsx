import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type FC } from 'react';

import { ServiceScreen } from '@/screens/authenticated/service';
import { type BottomTabNavigatorScreenProps, type NewsStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<NewsStackParamList>();

export const NewsStack: FC<BottomTabNavigatorScreenProps<'NewsStack'>> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                animationDuration: 0,
            }}>
            <Stack.Screen
                name="Service"
                component={ServiceScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
