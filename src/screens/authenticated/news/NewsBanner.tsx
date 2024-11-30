import { Box, HStack, Icon, Text } from '@/components';
import theme from '@/theme';
import { getImage } from '@assets/constants/images';
import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';


type NewsBannerProps = {
    title: string,
    subTitle: string,
    duration: string
}

export const NewsBanner: FC<NewsBannerProps> = ({ title, subTitle, duration }) => {
    return (
        <Box borderRadius="rounded-sm" overflow="hidden" width={theme.sizes.safeWidth} height={theme.sizes.height / 4} my={5}>
            <ImageBackground source={getImage('banner')} style={styles.image} resizeMode="cover" >

                <Box position="absolute" bottom={10} left={10} right={10}>
                    <Text numberOfLines={2} color="white" mb={3} variant="b2bold">{title}</Text>
                    <HStack mb={4} g={5} alignItems="center"  >
                        <Text numberOfLines={1} color="white" > {subTitle}</Text>
                        <Text numberOfLines={1} color="white"> {duration} of reading</Text>
                        <Icon icon="clock" type="evil" size={6} color="white" />
                    </HStack>
                </Box>
            </ImageBackground>
        </Box>
    );
};

export default NewsBanner;

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: '100%',
    },
});
