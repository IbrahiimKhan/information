import { Box, Header, Icon } from '@/components';
import React from 'react';
import { SafeAreaView } from 'react-native';

export const BoardScreen = () => {
    return (
        <SafeAreaView>
            <Header bg="black">
                <Header.Content title="Noam Penn (Panther)" subTitle="A tennis player" icon="avatar" />
            </Header>
            <Box flex={1}>
                <Icon variant="svg" icon="filter" />
            </Box>
        </SafeAreaView>
    );
};

export default BoardScreen;

