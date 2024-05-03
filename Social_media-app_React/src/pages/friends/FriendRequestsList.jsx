import styles from './Friends.module.scss';

import { useState } from 'react';

import PropTypes from 'prop-types';

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

import FriendRequestElement from './FriendRequestElement';


const FriendRequestsList = () => {

    const FriendRequests = [
        {
            imageUrl: userName1,
            name: 'Username 30',
            id: 30
        },
        {
            imageUrl: userName2,
            name: 'Username 31',
            id: 31
        },
        {
            imageUrl: userName3,
            name: 'Username 32',
            id: 32
        },
        {
            imageUrl: userName4,
            name: 'Username 33',
            id: 33
        },
        {
            imageUrl: userName5,
            name: 'Username 34',
            id: 34
        },
        {
            imageUrl: userName6,
            name: 'Username 35',
            id: 35
        },
        {
            imageUrl: userName7,
            name: 'Username 36',
            id: 36
        },
        {
            imageUrl: userName8,
            name: 'Username 37',
            id: 37
        },
        {
            imageUrl: userName9,
            name: 'Username 38',
            id: 38
        },
        {
            imageUrl: userName10,
            name: 'Username 39',
            id: 39
        },
        {
            imageUrl: userName11,
            name: 'Username 40',
            id: 40
        },
        {
            imageUrl: userName12,
            name: 'Username 41',
            id: 41
        },
        {
            imageUrl: userName1,
            name: 'Username 42',
            id: 42
        },
        {
            imageUrl: userName2,
            name: 'Username 43',
            id: 43
        },
        {
            imageUrl: userName3,
            name: 'Username 44',
            id: 44
        },
        {
            imageUrl: userName4,
            name: 'Username 45',
            id: 45
        },
        {
            imageUrl: userName5,
            name: 'Username 46',
            id: 46
        },
        {
            imageUrl: userName6,
            name: 'Username 47',
            id: 47
        },
        {
            imageUrl: userName7,
            name: 'Username 48',
            id: 48
        },
        {
            imageUrl: userName8,
            name: 'Username 49',
            id: 49
        },
        {
            imageUrl: userName9,
            name: 'Username 50',
            id: 50
        },
        {
            imageUrl: userName10,
            name: 'Username 51',
            id: 51
        },
        {
            imageUrl: userName11,
            name: 'Username 52',
            id: 52
        },
        {
            imageUrl: userName12,
            name: 'Username 53',
            id: 53
        }
    ]

    const [friendsNumber, setFriendsNumber] = useState(24)

    const addFriend = () => {
        setFriendsNumber(friendsNumber + 1)
    }

    const [friendRequests, setFriendRequests] = useState(24)

    const removeRequest = () => {
        setFriendRequests(friendRequests - 1)
    }

    const updateFriends = () => {
        addFriend();
        removeRequest()
    }

    return (
        <>
            <h3 className={styles.titleRequests}>My Friends <span>{friendsNumber}</span> <hr />Friend Requests <span className={styles.splash}>{friendRequests}</span></h3>
            <div className={styles.friendRequestsContainer}>
                {FriendRequests.map((friendRequest) => {
                    return (
                        <FriendRequestElement
                            imageUrl={friendRequest.imageUrl}
                            name={friendRequest.name}
                            key={friendRequest.id}
                            onButtonClick={updateFriends}
                            onRemoveClick={removeRequest}
                        />
                    )
                })}
            </div>
        </>

    )
}

export default FriendRequestsList;