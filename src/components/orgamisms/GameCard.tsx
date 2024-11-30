import { Box, Card, Clickable, Divider, HStack, Icon, Text, VStack } from '@/components'; // Assuming the `Card` component is imported from components
import theme from '@/theme';
import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Player = { name: string; nickname: string; nationality: string; photo: string }

interface GameCardProps extends TouchableOpacityProps {
    match: {
        matchTitle: string;
        matchTime: string;
        messages: number;
        team: Array<{ players: Array<Player> }>;
        precipitation: string;
        weather: string;
    };
}

export const GameCard: React.FC<GameCardProps> = ({ match, onPress }) => {
    return (
        <Card variant="outlined">
            <Box p={5}>
                <HStack alignItems="flex-start" justifyContent="space-between">
                    <VStack>
                        <Text variant="heading3" color="primary" >{match.matchTitle}</Text>
                        <HStack mt={3} g={5}>
                            <HStack alignItems="center" g={3}>
                                <Icon icon="calendar" type="ant" size={6} color="primary" />
                                <Text variant="b4semiBold" color="secondary">{match.matchTime?.split(' ')?.[0]}</Text>
                            </HStack>
                            <HStack alignItems="center" g={3}>
                                <Icon icon="clock" type="evil" size={6} color="primary" />
                                <Text variant="b4semiBold" color="secondary">{match.matchTime?.split(' ')?.[1]}</Text>
                            </HStack>
                            <HStack alignItems="center" g={3}>
                                <Icon icon="chatbubble-outline" type="ionicon" size={6} color="primary" />
                                <Text variant="b4semiBold" color="secondary">{match.messages}</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                    <Icon icon="sharealt" type="ant" color="primary" />
                </HStack>
            </Box>
            <Divider />
            <HStack justifyContent="space-between" py={5}>
                <HStack  >
                    {match?.team[0]?.players?.map((player: Player, index: number) => {
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
                <Text color="primary" variant="heading3" fontWeight={300}>VS.</Text>
                <HStack alignItems="center" >
                    {match?.team[1]?.players?.map((player: Player, index: number) => {
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
            <Divider />
            <HStack justifyContent="space-between" height={theme.sizes.height / 15} px={5} >
                <VStack py={2}>
                    <HStack g={5}>
                        <Icon icon="drop" variant="svg" />
                        <HStack>
                            <Text color="secondary">{match.precipitation}  </Text>
                            <Text color="secondary">Precipitation </Text>
                        </HStack>
                    </HStack>
                    <HStack g={5}>
                        <Icon icon="cloud" variant="svg" />
                        <HStack>
                            <Text color="secondary">25%  </Text>
                            <Text color="secondary">Cloudy </Text>
                        </HStack>
                    </HStack>
                </VStack>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradeint} colors={[theme.colors.primary, theme.colors.black]}>
                    <Clickable onPress={onPress} style={styles.button}>
                        <Text color="white" variant="b3semiBold" >
                            Chat
                        </Text>
                    </Clickable>
                </LinearGradient>
            </HStack>
        </Card>
    );
};

export default GameCard;

const styles = StyleSheet.create({
    gradeint: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        position: 'absolute',
        bottom: 0, right: 0,
    },
    badge: {
        position: 'absolute', bottom: 0, right: 0, borderRadius: 5,
    },
    button: {
        width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',
    },
});
