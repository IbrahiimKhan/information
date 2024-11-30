import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type FC } from 'react';

import { FeedScreen } from '@/screens/authenticated/feed';
import { type BottomTabNavigatorScreenProps, type RankStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RankStackParamList>();

export const RankStack: FC<BottomTabNavigatorScreenProps<'RankStack'>> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                animationDuration: 0,
            }}>
            <Stack.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
