import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    type CompositeScreenProps,
    type NavigationContainer,
    type NavigatorScreenParams,
} from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type ComponentProps } from 'react';

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> { }

//bottom nav related types
export type RootNavigatorParamList = {
    UnAuthenticatedStack: NavigatorScreenParams<UnAuthenticatedStackNavigatorParamList>;
    AuthenticatedStack: NavigatorScreenParams<AuthenticatedStackNavigatorParamList>;
};

//unauthenticated stack related types

export type UnAuthenticatedStackNavigatorParamList = {
    Login: undefined;
};

//authenticated stack related types

export type AuthenticatedStackNavigatorParamList = {
    Root: NavigatorScreenParams<BottomTabNavigatorParamList>;
};

//all screen params for bottom tab
export type BottomTabNavigatorParamList = {
    RegisterStack: NavigatorScreenParams<RegisterStackParamList>;
    NewsStack: NavigatorScreenParams<NewsStackParamList>;
    BoardStack: NavigatorScreenParams<BoardStackParamList>;
    RankStack: NavigatorScreenParams<RankStackParamList>;
};

// 1: register related types
export type RegisterStackParamList = {
    Register: undefined;
};

export type RegisterStackScreenProps<T extends keyof RegisterStackParamList> = NativeStackScreenProps<
    RegisterStackParamList,
    T
>;

// 2: News related types
export type NewsStackParamList = {
    News: undefined;
};

export type NewsStackScreenProps<T extends keyof NewsStackParamList> =
    NativeStackScreenProps<NewsStackParamList, T>;

// 3: rank related types
export type RankStackScreenProps<T extends keyof RankStackParamList> = NativeStackScreenProps<
    RankStackParamList,
    T
>;

export type RankStackParamList = {
    Rank: undefined
};

// 3: board related types
export type BoardStackScreenProps<T extends keyof BoardStackParamList> = NativeStackScreenProps<
    BoardStackParamList,
    T
>;

export type BoardStackParamList = {
    Board: undefined
}

//gloabl types
export type RootNavigatorScreenProps<T extends keyof RootNavigatorParamList> =
    NativeStackScreenProps<RootNavigatorParamList, T>;

export type UnAuthenticatedStackNavigatorScreenProps<
    T extends keyof UnAuthenticatedStackNavigatorParamList
> = NativeStackScreenProps<UnAuthenticatedStackNavigatorParamList, T>;

export type AuthenticatedStackNavigatorScreenProps<
    T extends keyof AuthenticatedStackNavigatorParamList
> = NativeStackScreenProps<AuthenticatedStackNavigatorParamList, T>;

export type BottomTabNavigatorScreenProps<T extends keyof BottomTabNavigatorParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<BottomTabNavigatorParamList, T>,
        AuthenticatedStackNavigatorScreenProps<keyof AuthenticatedStackNavigatorParamList>
    >;



declare global {

    namespace ReactNavigation {
        export interface RootParamList
            extends RootNavigatorParamList,
            UnAuthenticatedStackNavigatorParamList,
            AuthenticatedStackNavigatorParamList,
            RegisterStackParamList,
            NewsStackParamList,
            BoardStackParamList,
            RankStackParamList { }
    }
}
