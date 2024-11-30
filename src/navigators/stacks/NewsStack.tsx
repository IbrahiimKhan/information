import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type FC } from 'react';

import { NewsScreen } from '@/screens/authenticated/news';
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
                name="News"
                component={NewsScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
