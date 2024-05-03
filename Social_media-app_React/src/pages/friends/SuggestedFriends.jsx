import styles from './Friends.module.scss';

import { useState } from 'react';

import userName1 from '../../assets/images/userName1.jpg';
import userName2 from '../../assets/images/userName2.jpg';
import userName3 from '../../assets/images/userName3.jpg';
import userName4 from '../../assets/images/userName4.jpeg';
import userName5 from '../../assets/images/userName5.jpeg';
import userName6 from '../../assets/images/userName6.jpg';
import userName7 from '../../assets/images/userName7.jpg';
import userName8 from '../../assets/images/userName8.jpg';
import userName9 from '../../assets/images/userName9.jpg';
import userName10 from '../../assets/images/userName10.jpg';
import userName11 from '../../assets/images/userName11.jpg';
import userName12 from '../../assets/images/userName12.jpg';

import SuggestedFriendElement from './SuggestedFriendElement';

    const SuggestedFriends = () => {

    const SuggestedFriendRequests = [
        {
            imageUrl: userName1,
            name: 'Username 50',
            id: 60
        },
        {
            imageUrl: userName2,
            name: 'Username 51',
            id: 61
        },
        {
            imageUrl: userName3,
            name: 'Username 52',
            id: 62
        },
        {
            imageUrl: userName4,
            name: 'Username 53',
            id: 63
        },
        {
            imageUrl: userName5,
            name: 'Username 54',
            id: 64
        },
        {
            imageUrl: userName6,
            name: 'Username 55',
            id: 65
        },
        {
            imageUrl: userName7,
            name: 'Username 56',
            id: 66
        },
        {
            imageUrl: userName8,
            name: 'Username 57',
            id: 67
        },
        {
            imageUrl: userName9,
            name: 'Username 58',
            id: 68
        },
        {
            imageUrl: userName10,
            name: 'Username 59',
            id: 69
        },
        {
            imageUrl: userName11,
            name: 'Username 60',
            id: 70
        },
        {
            imageUrl: userName12,
            name: 'Username 61',
            id: 71
        },
        {
            imageUrl: userName1,
            name: 'Username 62',
            id: 72
        },
        {
            imageUrl: userName2,
            name: 'Username 63',
            id: 73
        },
        {
            imageUrl: userName3,
            name: 'Username 64',
            id: 74
        },
        {
            imageUrl: userName4,
            name: 'Username 65',
            id: 75
        },
        {
            imageUrl: userName5,
            name: 'Username 66',
            id: 76
        },
        {
            imageUrl: userName6,
            name: 'Username 67',
            id: 77
        },
        {
            imageUrl: userName7,
            name: 'Username 68',
            id: 78
        },
        {
            imageUrl: userName8,
            name: 'Username 69',
            id: 79
        },
        {
            imageUrl: userName9,
            name: 'Username 70',
            id: 80
        },
        {
            imageUrl: userName10,
            name: 'Username 71',
            id: 81
        },
        {
            imageUrl: userName11,
            name: 'Username 72',
            id: 82
        },
        {
            imageUrl: userName12,
            name: 'Username 73',
            id: 83
        }
    ]

    const [suggestedFriends, setSuggestedFriends] = useState(24)

    const removeSuggested = () => {
        setSuggestedFriends(suggestedFriends - 1)
    }

    return (
        <>
            <h3 className={styles.titleSuggested}>Suggested friends <span>{suggestedFriends}</span></h3>
            <div className={styles.suggestedFriendsContainer}>
                {SuggestedFriendRequests.map((suggestedFriend) => {
                    return (
                        <SuggestedFriendElement
                            imageUrl={suggestedFriend.imageUrl}
                            name={suggestedFriend.name}
                            key={suggestedFriend.id}
                            onButtonClick={removeSuggested}
                        />
                    )
                })}
            </div>
        </>

    )
}

export default SuggestedFriends;