import { Box, Header } from '@/components';
import news from '@/data/news.json';
import theme from '@/theme';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsBanner from './NewsBanner';
import NewsCard from './NewsCard';

export const NewsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header bg="black">
                <Header.Content title="Noam Penn (Panther)" subTitle="A tennis player" icon="avatar" />
            </Header>
            <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <Box px={7} flex={1}>
                    <NewsBanner title={'Lorem Ipsum is a nickname for such a completely meaningless text - some'} subTitle={'Lorem Ipsum is'} duration={'4 minutes'} />
                    <FlashList data={news}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <Box height={10} />}
                        estimatedItemSize={200}
                        contentContainerStyle={styles.contentContainer}
                        renderItem={({ item }) => <NewsCard news={item} />} />
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: theme.spacing[5],
    },
    scrollView: {
        flex: 1,
    },
});

