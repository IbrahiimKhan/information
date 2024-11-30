/* eslint-disable react/no-unstable-nested-components */
import {
    type BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { type RouteProp } from '@react-navigation/native';
import React, { type FC, type ReactElement } from 'react';
import { type TextStyle, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import theme from '@/theme';
import {
    type AuthenticatedStackNavigatorScreenProps,
    type BottomTabNavigatorParamList,
} from '@/types/navigation';

import { IconButton } from '@/components';
import { Accountscreen } from '@/screens/authenticated/account';
import { useStringHelper } from '@/utils';
import { NewsStack } from './stacks/NewsStack';
import { RankStack } from './stacks/RankStack';
import { RegisterStack } from './stacks/RegisterStack';

const BottomTabIcon = ({
    focused,
    title,
}: {
    title: string;
    focused: boolean;
    color: string;
    size: number;
}): ReactElement => {
    const { camelize } = useStringHelper();
    return (
        <IconButton
            variant="svg"
            icon={camelize(title)}
            color={focused ? 'primary' : 'white'}
            size={7}
        />
    );
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

interface BottomTabNavigatorProps extends AuthenticatedStackNavigatorScreenProps<'Root'> { }

export const BottomTabNavigator: FC<BottomTabNavigatorProps> = (): ReactElement => {
    const { bottom } = useSafeAreaInsets();

    const screenOptions = ({
        route,
    }: {
        route: RouteProp<BottomTabNavigatorParamList, keyof BottomTabNavigatorParamList>;
    }): BottomTabNavigationOptions => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.black900,
        tabBarShowLabel: true,
        headerShadowVisible: false,
        tabBarStyle: [$tabBar, { height: 64 + bottom }],
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,

        tabBarIcon: props => <BottomTabIcon {...props} title={route?.name} />,
    });

    return (
        <Tab.Navigator screenOptions={screenOptions} initialRouteName="BoardStack">
            <Tab.Screen
                name="RegisterStack"
                component={RegisterStack}
                options={{
                    title: 'Register',
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.white,
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                    },
                }}
            />
            <Tab.Screen
                name="BoardStack"
                component={Accountscreen}
                options={{
                    title: 'Game Board',
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.white,
                }}
            />
            <Tab.Screen
                name="RankStack"
                component={RankStack}
                options={{
                    title: 'Rank',
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.white,
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                    },
                }}

            />
            <Tab.Screen
                name="NewsStack"
                component={NewsStack}
                options={{
                    title: 'News',
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.white,
                }}
            />


        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const $tabBar: ViewStyle = {
    // borderTopLeftRadius: 24,
    // borderTopRightRadius: 24
    backgroundColor: theme.colors.black,
};

const $tabBarItem: ViewStyle = {
    paddingTop: theme.spacing[4],
};

const { b5semiBold } = theme.textVariants;

const $tabBarLabel: TextStyle = {
    fontFamily: b5semiBold.fontFamily,
    fontSize: b5semiBold.fontSize,
    paddingBottom: 6,
};
