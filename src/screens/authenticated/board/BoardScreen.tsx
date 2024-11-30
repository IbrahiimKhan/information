/* eslint-disable react/no-unstable-nested-components */
import { Box, Button, Divider, GameCard, Header, HStack, Icon, Text } from '@/components';
import match from '@/data/match.json';
import theme from '@/theme';
import { BoardStackScreenProps } from '@/types/navigation';
import { FlashList } from '@shopify/flash-list';
import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface BoardScreenProps extends BoardStackScreenProps<'Board'> { }

export const BoardScreen: FC<BoardScreenProps> = ({ navigation }) => {

    const handleChat = () => {
        navigation.navigate('Chat');
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header bg="black">
                <Header.Content title="Noam Penn (Panther)" subTitle="A tennis player" icon="avatar" />
            </Header>
            <Box mt={6} px={7}  >
                <HStack g={4} >
                    <Icon variant="svg" icon="filter" />
                    <Box flexDirection="row" borderWidth={2} alignItems="center" justifyContent="center" borderColor="secondary200" borderRadius="rounded-full" px={5} py={3}>
                        <Text >Date |</Text>
                        <Text> Hours</Text>
                        <Box>
                            <Icon icon="chevron-down" color="primary" />
                        </Box>
                    </Box>
                </HStack>
            </Box>
            <Divider my={5} />
            <Box alignSelf="flex-start" ml={7}>
                <Button type="outlined" px={5} >
                    <Button.Text title="Double games" />
                </Button>
            </Box>
            <Box px={7} flex={1}>
                <FlashList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={match}
                    estimatedItemSize={200}
                    renderItem={({ item }) => <GameCard onPress={() => handleChat()} match={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <Box height={10} />}
                    contentContainerStyle={styles.contentContainer}
                />
            </Box>
        </SafeAreaView>
    );
};

export default BoardScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: theme.spacing[5],
    },
});

