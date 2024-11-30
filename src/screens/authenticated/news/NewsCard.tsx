
import { Card } from '@/components';
import { News } from '@/types/news';
import React, { FC } from 'react';
import NewsListCard from './NewsListCard';
import NewsScoreCard from './NewsScoreCard';

type NewsCardProps = {
    news: News;
};

export const NewsCard: FC<NewsCardProps> = ({ news }) => {
    const renderCardContent = () => {
        switch (news.cardType) {
            case 'list':
                return <NewsListCard news={news} />;
            case 'score':
                return <NewsScoreCard news={news} />;
            case 'system':
                return <NewsListCard news={news} />;
            default:
                return null;
        }
    };

    return <Card>{renderCardContent()}</Card>;
};

export default NewsCard;
