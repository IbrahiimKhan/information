import {
    Badge,
    Box,
    ChatBox,
    Divider,
    Header,
    HStack,
    Icon,
    IconButton,
    Input,
} from '@/components';
import chatMessages from '@/data/chat.json';
import theme from '@/theme';
import { FlashList } from '@shopify/flash-list';
import React, { FC, useRef, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

export const ChatScreen: FC = () => {
    const [messages, setMessages] = useState(chatMessages);
    const [inputText, setInputText] = useState('');
    const flashListRef = useRef<any>();
    const isIOS = Platform.OS === 'ios';

    const handleSendMessage = () => {
        if (!inputText.trim()) { return; }

        const newMessage = {
            id: messages.length + 1,
            userId: 'u2',
            name: 'john',
            message: inputText.trim(),
            timestamp: new Date().toISOString(),
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInputText('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header bg="white">
                <Header.BackAction />
                <Header.Content title="Monday, February 23 | 14:00 - Tel Aviv" color="primary" icon="" />
                <Header.Action icon="chevron-right" type="ant" color="primary" />
            </Header>
            <Divider />

            <Box mt={6} px={7} flexDirection="row" alignItems="center" justifyContent="space-between">
                <Icon icon="sharealt" type="ant" color="black" />
                <HStack g={5}>
                    <HStack g={5}>
                        {Array(5)
                            .fill(null)
                            .map((_, index) => (
                                <Badge key={index} content="" variant="dot" placement="bottomRight">
                                    <Icon variant="image" icon="avatar" size={18} />
                                </Badge>
                            ))}
                    </HStack>
                </HStack>
            </Box>
            <Divider mt={5} />
            <Box flex={1} mx={7}>
                <FlashList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ref={flashListRef}
                    data={messages}
                    renderItem={({ item, index }) => (
                        <ChatBox
                            message={item}
                            isLastMessage={
                                index === messages.length - 1 || messages[index + 1]?.userId !== item.userId
                            }
                        />
                    )}
                    contentContainerStyle={styles.contentContainer}
                    keyExtractor={(item) => item.id.toString()}
                    estimatedItemSize={50}
                    onContentSizeChange={async () => {
                        flashListRef.current?.scrollToEnd({ animated: true });
                    }}
                />
            </Box>
            <Box height={isIOS ? theme.sizes.height / 10 : theme.sizes.height / 7.5} bg="white" />
            <Box position="absolute" width="100%" bottom={0} bg="white" py={10} px={7}>
                <HStack alignItems="center">
                    <Icon icon="plus" color="primary" />
                    <Input
                        variant="shadow"
                        value={inputText}
                        onChangeText={setInputText}
                        placeholder="Add a comment..."
                    />
                    <IconButton disabled={!inputText} variant="svg" icon="fly" size={14} onPress={handleSendMessage} />
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
        paddingTop: theme.spacing[5],
        paddingBottom: theme.spacing[10],
    },
});
