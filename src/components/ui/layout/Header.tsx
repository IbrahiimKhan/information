import { useNavigation } from '@react-navigation/native';
import { BoxProps, TextProps } from '@shopify/restyle';
import React, { type PropsWithChildren, type ReactElement } from 'react';

import { type Theme } from '@/theme';

import { IconButton, type IconButtonProps } from '../media-icons/IconButton';

import Icon from '../media-icons/Icon';
import { Text } from '../typography/Text';
import { Box } from './Box';
import HStack from './HStack';

export const Header = ({ children, ...rest }: PropsWithChildren & BoxProps<Theme>): ReactElement => {
    return (
        <Box py={5} {...rest} >
            <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                {children}
            </Box>
        </Box>
    );
};

const BackAction = ({ onPress }: { onPress?: () => void }): ReactElement => {
    const navigation = useNavigation();
    const navigateBack = (): void => {
        navigation.goBack();
    };

    return (
        <IconButton
            size={10}
            variant="vector"
            type="ant"
            color="primary"
            icon="chevron-left"
            onPress={onPress ?? navigateBack}
        />
    );
};

type ContentProps = {
    title: string;
    subTitle?: string | undefined;
    icon: string,
} & BoxProps<Theme> & TextProps<Theme>;

const Content = ({ title, subTitle = undefined, color = 'white', icon = 'avatar', ...rest }: ContentProps): ReactElement => {
    return (
        <Box {...rest}>
            <HStack g={5} mx={7} >
                {icon && <Icon variant="image" icon="avatar" size={16} />}
                <Box>
                    <Text variant="b2bold" color={color}>{title}</Text>
                    {subTitle !== undefined && <Text variant="b3medium" color={color}>{subTitle}</Text>}
                </Box>
            </HStack>
        </Box>
    );
};

const Action = (props: { icon: string; onPress?: () => void } & IconButtonProps): ReactElement => {
    return <IconButton {...props} />;
};

Header.BackAction = BackAction;
Header.Content = Content;
Header.Action = Action;

export default Header;
