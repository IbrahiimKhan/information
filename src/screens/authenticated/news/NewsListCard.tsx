import { Box, FastImage, HStack, Icon, Text, VStack } from '@/components';
import theme from '@/theme';
import { News } from '@/types/news';
import { getImage, images } from '@assets/constants/images';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Source } from 'react-native-fast-image';

type NewsListCardProps = {
    news: News
}

export const NewsListCard: FC<NewsListCardProps> = ({ news }) => {
    const type = news?.cardType === 'list' ? 'News' : 'System';

    return (
        <Box p={5} flex={1}>
            <HStack justifyContent="space-between" alignItems={type === 'News' ? 'center' : 'flex-start'} flex={1}>
                <VStack flex={1} >
                    <Text color="primary">{type}</Text>
                    <Text variant="b2medium" >{news?.title}</Text>
                    <HStack mb={2} mt={4} g={4} flex={1}>
                        <HStack alignItems="center" g={3}>
                            <Icon icon="clock" type="evil" size={6} color="primary" />
                            <Text variant="b4semiBold" color="secondary">{news?.time}</Text>
                        </HStack>
                        {type === 'News' && <HStack alignItems="center" g={3}>
                            <Icon icon="chatbubble-outline" type="ionicon" size={6} color="primary" />
                            <Text variant="b4semiBold" color="secondary">{news?.comments}</Text>
                        </HStack>}
                    </HStack>
                </VStack>
                {news?.newsImage && <FastImage source={getImage(news?.newsImage as keyof typeof images) as Source} width={100} height={100} style={styles.newsImage} />}
                {type === 'System' && <Box >
                    <Icon icon="sharealt" type="ant" color="primary" />
                </Box>}
            </HStack>
        </Box>
    );
};

export default NewsListCard;

const styles = StyleSheet.create({
    newsImage: {
        borderRadius: theme.borderRadii['rounded-sm'],
    },
});
