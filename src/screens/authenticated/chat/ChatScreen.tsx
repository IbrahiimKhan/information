
import { Badge, Box, Divider, Header, HStack, Icon } from '@/components';
import theme from '@/theme';
import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';


export const ChatScreen: FC = ({ }) => {


    return (
        <SafeAreaView style={styles.container}>
            <Header bg="white">
                <Header.BackAction />
                <Header.Content title="Monday, February 23 | 14:00 - Tel Aviv" color="primary" icon="" />
                <Header.Action icon="chevron-right" type="ant" color="primary" />
            </Header>
            <Divider />

            <Box mt={6} px={7} flexDirection="row" alignItems="center" justifyContent="space-between" >
                <Icon icon="sharealt" type="ant" color="black" />
                <HStack g={5}>
                    <Badge content={''} variant="dot" placement="bottomRight">
                        <Icon variant="image" icon="avatar" size={18} />
                    </Badge>
                    <Badge content={''} variant="dot" placement="bottomRight">
                        <Icon variant="image" icon="avatar" size={18} />
                    </Badge>
                    <Badge content={''} variant="dot" placement="bottomRight">
                        <Icon variant="image" icon="avatar" size={18} />
                    </Badge>
                    <Badge content={''} variant="dot" placement="bottomRight">
                        <Icon variant="image" icon="avatar" size={18} />
                    </Badge>
                    <Badge content={''} variant="dot" placement="bottomRight">
                        <Icon variant="image" icon="avatar" size={18} />
                    </Badge>
                </HStack>

            </Box>

        </SafeAreaView>
    );
};

export default ChatScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: theme.spacing[5],
    },
});

