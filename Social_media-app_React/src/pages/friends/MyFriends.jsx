import styles from './Friends.module.scss';

import { Link } from "react-router-dom";

import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';

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

import MyFriendElement from './MyFriendElement.jsx';

import { useState } from 'react';


const MyFriends = () => {

    const MyFriendsList = [
        {
            imageUrl: userName1,
            name: 'Username 1',
            id: 0
        },
        {
            imageUrl: userName2,
            name: 'Username 2',
            id: 1
        },
        {
            imageUrl: userName3,
            name: 'Username 3',
            id: 2
        },
        {
            imageUrl: userName4,
            name: 'Username 4',
            id: 3
        },
        {
            imageUrl: userName5,
            name: 'Username 5',
            id: 4
        },
        {
            imageUrl: userName6,
            name: 'Username 6',
            id: 5
        },
        {
            imageUrl: userName7,
            name: 'Username 7',
            id: 6
        },
        {
            imageUrl: userName8,
            name: 'Username 8',
            id: 7
        },
        {
            imageUrl: userName9,
            name: 'Username 9',
            id: 8
        },
        {
            imageUrl: userName10,
            name: 'Username 10',
            id: 9
        },
        {
            imageUrl: userName11,
            name: 'Username 11',
            id: 10
        },
        {
            imageUrl: userName12,
            name: 'Username 12',
            id: 11
        },
        {
            imageUrl: userName1,
            name: 'Username 13',
            id: 12
        },
        {
            imageUrl: userName2,
            name: 'Username 14',
            id: 13
        },
        {
            imageUrl: userName3,
            name: 'Username 15',
            id: 14
        },
        {
            imageUrl: userName4,
            name: 'Username 16',
            id: 15
        },
        {
            imageUrl: userName5,
            name: 'Username 17',
            id: 16
        },
        {
            imageUrl: userName6,
            name: 'Username 18',
            id: 17
        },
        {
            imageUrl: userName7,
            name: 'Username 19',
            id: 18
        },
        {
            imageUrl: userName8,
            name: 'Username 20',
            id: 19
        },
        {
            imageUrl: userName9,
            name: 'Username 21',
            id: 20
        },
        {
            imageUrl: userName10,
            name: 'Username 22',
            id: 21
        },
        {
            imageUrl: userName11,
            name: 'Username 23',
            id: 22
        },
        {
            imageUrl: userName12,
            name: 'Username 24',
            id: 23
        }
    ]

    const [myFriendsNumber, setMyFriendsNumber] = useState(24)

    const unfriendFriend = () => {
        setMyFriendsNumber(myFriendsNumber - 1)
    }


    return (
        <div className={styles.myFriendsCotainer}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <Link to="/myFriends">
                        <PeopleIcon sx={{ width: 40, height: 40 }} />
                        <p>My Friends  <span className={styles.friendsNumber}> {myFriendsNumber}</span></p>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link to="/friendRequests">
                        <Diversity1Icon sx={{ width: 40, height: 40 }} />
                        <p>Friend Requests  <span className={styles.requestsNumber}> 24</span></p>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link to="/suggestedFriends">
                        <Diversity3Icon sx={{ width: 40, height: 40 }} />
                        <p>Suggested Friends  <span className={styles.suggestedNumber}> 24</span></p>
                    </Link>
                </li>
            </ul>
            <div className={styles.myFriendsList}>
                {MyFriendsList.map((myFriend) => {
                    return (
                        <MyFriendElement
                            imageUrl={myFriend.imageUrl}
                            name={myFriend.name}
                            key={myFriend.id}
                            onButtonClick={unfriendFriend}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default MyFriends;