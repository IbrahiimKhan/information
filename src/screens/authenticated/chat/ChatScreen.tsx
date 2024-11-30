
import { Badge, Box, ChatBox, Divider, Header, HStack, Icon } from '@/components';
import theme from '@/theme';
import { FlashList } from '@shopify/flash-list';
import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import chatMessages from '@/data/chat.json';

export const ChatScreen: FC = ({ }) => {

    const [messages, setMessages] = useState(chatMessages);


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
                    <HStack g={5}>
                        {Array(5)
                            .fill(null)
                            .map((_, index) => (
                                <Badge key={index} content={''} variant="dot" placement="bottomRight">
                                    <Icon variant="image" icon="avatar" size={18} />
                                </Badge>
                            ))}
                    </HStack>
                </HStack>
            </Box>
            <Divider mt={5} />
            <Box flex={1} mx={7}>
                <FlashList
                    data={messages}
                    renderItem={({ item, index }) => (
                        <ChatBox
                            message={item}
                            isLastMessage={
                                index === messages.length - 1 || messages[index + 1]?.userId !== item.userId
                            }
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    estimatedItemSize={50}
                />
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

