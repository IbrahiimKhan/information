import { Box, Card, Divider, HStack, Icon, Text, VStack } from '@/components';
import { News, Player } from '@/types/news';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

type NewsScoreCardProps = {
    news: News
}

const NewsScoreCard: FC<NewsScoreCardProps> = ({ news }) => {
    let teamAScore = 0;
    let teamBScore = 0;

    news.score?.forEach(scr => {
        const [teamA, teamB] = scr.split(/[-\s]+/).map(Number); // Split and convert to numbers
        teamAScore += teamA;
        teamBScore += teamB;
    });
    return (
        <>
            <Box p={5} flex={1} >
                <HStack alignItems="flex-start" justifyContent="space-between">
                    <VStack flex={1}>
                        <Text variant="heading3" color="black"  >{news.title}</Text>
                        <HStack mt={3} g={5}>
                            <HStack alignItems="center" g={3}>
                                <Icon icon="calendar" type="ant" size={6} color="primary" />
                                <Text variant="b4semiBold" color="secondary">{news.time?.split(' ')?.[0]}</Text>
                            </HStack>
                            <HStack alignItems="center" g={3}>
                                <Icon icon="clock" type="evil" size={6} color="primary" />
                                <Text variant="b4semiBold" color="secondary">{news.time?.split(' ')?.[1]}</Text>
                            </HStack>
                            <HStack alignItems="center" g={3}>
                                <Icon icon="chatbubble-outline" type="ionicon" size={6} color="primary" />
                                <Text variant="b4semiBold" color="secondary">{news.comments}</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                    <Box >
                        <Icon icon="sharealt" type="ant" color="primary" />
                    </Box>
                </HStack>
            </Box>
            <Divider />
            <HStack justifyContent="space-between" py={5}>
                <HStack  >
                    {news?.team[0]?.players?.map((player: Player, index: number) => {
                        return <VStack alignItems="center" key={index} p={5}>
                            <Box>
                                <Icon size={18} variant="image" icon={player.photo} />
                                <Icon size={7} variant="image" icon={player.nationality} style={styles.badge} />
                            </Box>
                            <Text color="black" variant="b3semiBold">{player.name}</Text>
                            <Text color="secondary">({player.nickname})</Text>
                        </VStack>;
                    })}
                </HStack>
                <VStack alignItems="center">
                    <Text variant="b2regular">{teamAScore} - {teamBScore}</Text>
                    {news?.score?.map((score: string, index: number) => (
                        <Card key={index} variant="outlined" width={50} alignItems="center" marginBottom={4}>
                            <Text

                                color="black"
                                variant="b2regular"
                                fontWeight={300}
                            >
                                {score}
                            </Text>
                        </Card>
                    ))}
                </VStack>

                <HStack alignItems="center" >
                    {news?.team[1]?.players?.map((player: Player, index: number) => {
                        return <VStack alignItems="center" key={index} p={5}>
                            <Box>
                                <Icon size={18} variant="image" icon={player.photo} />
                                <Icon size={7} variant="image" icon={player.nationality} style={styles.badge} />
                            </Box>
                            <Text color="black" variant="b3semiBold">{player.name}</Text>
                            <Text color="secondary">({player.nickname})</Text>
                        </VStack>;
                    })}
                </HStack>
            </HStack>
        </>
    );
};

export default NewsScoreCard;

const styles = StyleSheet.create({
    badge: {
        position: 'absolute', bottom: 0, right: 0, borderRadius: 5,
    },
});
