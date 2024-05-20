import styles from './Pages.module.scss';

import SuggestedPages from './SuggestedPages';
import LikedPages from './LikedPages';

import pageName2 from '../../assets/images/pageName2.jpeg';
import pageName3 from '../../assets/images/pageName3.jpeg';
import pageName4 from '../../assets/images/pageName4.jpeg';

import { useState } from 'react';


const Pages = () => {

    const [suggestedPages, setSuggestedPages] = useState([
        {
            imageUrl: pageName2,
            pageName: 'Page name 20',
            id: 0,
            pageLikes: 225,
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 21',
            id: 1,
            pageLikes: 300
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 22',
            id: 2,
            pageLikes: 12
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 23',
            id: 3,
            pageLikes: 25
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 24',
            id: 4,
            pageLikes: 41
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 25',
            id: 5,
            pageLikes: 14
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 26',
            id: 6,
            pageLikes: 59
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 27',
            id: 7,
            pageLikes: 200
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 28',
            id: 8,
            pageLikes: 258
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 29',
            id: 9,
            pageLikes: 999
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 30',
            id: 10,
            pageLikes: 1258
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 31',
            id: 11,
            pageLikes: 2654
        }
    ])

    const [likedPages, setLikedPages] = useState([
        {
            imageUrl: pageName2,
            pageName: 'Page name 1',
            id: 0,
            pageLikes: 125,
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 2',
            id: 1,
            pageLikes: 2569
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 3',
            id: 2,
            pageLikes: 789
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 4',
            id: 3,
            pageLikes: 250,
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 5',
            id: 4,
            pageLikes: 1300
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 6',
            id: 5,
            pageLikes: 256
        }
    ]);

    const handleLike = (page) => {
        // Remove from suggested pages
        const updatedSuggestedPages = suggestedPages.filter((p) => p !== page);
        setSuggestedPages(updatedSuggestedPages);

        // Add to liked pages
        setLikedPages([...likedPages, page]);
    };

    return (
        <div className={styles.pages}>
            <SuggestedPages  pages={suggestedPages} onLike={handleLike} />
            <LikedPages pages={likedPages} />
        </div>
    )
}

export default Pages;