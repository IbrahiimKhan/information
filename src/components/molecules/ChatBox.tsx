import theme from '@/theme';
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../ui/typography/Text';
import Card from '../ui/layout/Card';
import Icon from '../ui/media-icons/Icon';
import HStack from '../ui/layout/HStack';
import { Box } from '../ui/layout/Box';

interface ChatBoxProps {
    message: {
        id: number;
        userId: string;
        name: string;
        message: string;
        timestamp: string;
    };
    isLastMessage: boolean;
}

export const ChatBox: React.FC<ChatBoxProps> = ({ message, isLastMessage }) => {
    const isUser1 = message.userId === 'u1';

    return (
        <Box flexDirection="row" borderRadius="rounded-md" overflow="hidden" alignItems="flex-end" g={2} alignSelf={isUser1 ? 'flex-start' : 'flex-end'} marginVertical={4} maxWidth="90%" >
            {isLastMessage && isUser1 && <Icon icon="avatar" variant="image" />}
            {isUser1 && !isLastMessage && < Box width={20} />}

            <Card borderRadius="rounded-md" variant={isUser1 ? 'elevated' : 'outlined'} flex={1} overflow="hidden">
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={isUser1 ? [theme.colors.black, theme.colors.primary] : [theme.colors.white, theme.colors.white]}
                    style={styles.container}
                >
                    <Text color={isUser1 ? 'white' : 'black'} mb={4} variant="b2medium" fontWeight={900}>{message.name}</Text>
                    <Text color={isUser1 ? 'white' : 'black'} mb={2}>{message.message}</Text>
                    <Text color={isUser1 ? 'white' : 'black'} textAlign="right" >{new Date(message.timestamp).toLocaleTimeString()}</Text>
                </LinearGradient>
            </Card>
            {isLastMessage && !isUser1 && <Icon icon="avatar" variant="image" />}
            {!isUser1 && !isLastMessage && < Box width={20} />}
        </Box>
    );
};

export default ChatBox;

const styles = StyleSheet.create({
    container: {
        paddingVertical: theme.spacing[4],
        paddingHorizontal: theme.spacing[5],
    },
});
