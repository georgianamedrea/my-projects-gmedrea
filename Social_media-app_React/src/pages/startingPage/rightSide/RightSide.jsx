import styles from './RightSide.module.scss';

import userName1 from '../../../assets/images/userName1.jpg';
import userName2 from '../../../assets/images/userName2.jpg';
import userName3 from '../../../assets/images/userName3.jpg';
import userName4 from '../../../assets/images/userName4.jpeg';
import userName5 from '../../../assets/images/userName5.jpg';
import userName6 from '../../../assets/images/userName6.jpg';
import userName7 from '../../../assets/images/userName7.jpg';
import userName8 from '../../../assets/images/userName8.jpg';
import userName9 from '../../../assets/images/userName9.jpg';
import userName10 from '../../../assets/images/userName10.jpg';
import userName11 from '../../../assets/images/userName11.jpg';
import userName12 from '../../../assets/images/userName12.jpg';

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import RightSideElement from './RightSideElement';
import ChatBox from '../newsfeed/chatbox/Chatbox';

import { useEffect, useState } from 'react';


const RightSide = () => {

    function randomUniqueNum(range, outputCount) {

        let arr = []
        for (let i = 0; i <= range; i++) {
            arr.push(i)
        }

        let result = [];

        for (let i = 0; i <= outputCount; i++) {
            const random = Math.floor(Math.random() * (range - i));
            result.push(arr[random]);
            arr[random] = arr[range - i];
        }

        return result;
    }

    let randomIds = randomUniqueNum(23, 23);

    const FriendsElements = [
        {
            imageUrl: userName1,
            name: 'Username 1',
            id: randomIds[0]
        },
        {
            imageUrl: userName2,
            name: 'Username 2',
            id: randomIds[1]
        },
        {
            imageUrl: userName3,
            name: 'Username 3',
            id: randomIds[2]
        },
        {
            imageUrl: userName4,
            name: 'Username 4',
            id: randomIds[3]
        },
        {
            imageUrl: userName5,
            name: 'Username 5',
            id: randomIds[4]
        },
        {
            imageUrl: userName6,
            name: 'Username 6',
            id: randomIds[5]
        },
        {
            imageUrl: userName7,
            name: 'Username 7',
            id: randomIds[6]
        },
        {
            imageUrl: userName8,
            name: 'Username 8',
            id: randomIds[7]
        },
        {
            imageUrl: userName9,
            name: 'Username 9',
            id: randomIds[8]
        },
        {
            imageUrl: userName10,
            name: 'Username 10',
            id: randomIds[9]
        },
        {
            imageUrl: userName11,
            name: 'Username 11',
            id: randomIds[10]
        },
        {
            imageUrl: userName12,
            name: 'Username 12',
            id: randomIds[11]
        },
        {
            imageUrl: userName1,
            name: 'Username 13',
            id: randomIds[12]
        },
        {
            imageUrl: userName2,
            name: 'Username 14',
            id: randomIds[13]
        },
        {
            imageUrl: userName3,
            name: 'Username 15',
            id: randomIds[14]
        },
        {
            imageUrl: userName4,
            name: 'Username 16',
            id: randomIds[15]
        },
        {
            imageUrl: userName5,
            name: 'Username 17',
            id: randomIds[16]
        },
        {
            imageUrl: userName6,
            name: 'Username 18',
            id: randomIds[17]
        },
        {
            imageUrl: userName7,
            name: 'Username 19',
            id: randomIds[18]
        },
        {
            imageUrl: userName8,
            name: 'Username 20',
            id: randomIds[19]
        },
        {
            imageUrl: userName9,
            name: 'Username 21',
            id: randomIds[20]
        },
        {
            imageUrl: userName10,
            name: 'Username 22',
            id: randomIds[21]
        },
        {
            imageUrl: userName11,
            name: 'Username 23',
            id: randomIds[22]
        },
        {
            imageUrl: userName12,
            name: 'Username 24',
            id: randomIds[23]
        }
    ]

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 10000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const [isChatOpen, setChatOpen] = useState(false);

    return (
        <div className={styles.rightContainer}>
            {FriendsElements.map((friendElement) => {
                if (friendElement.id < 12) {
                    return (
                        <RightSideElement
                            imageUrl={friendElement.imageUrl}
                            name={friendElement.name}
                            key={friendElement.id}
                        />
                    )
                }
            })}
            < ChatBubbleIcon onClick={() => setChatOpen(!isChatOpen)} />
            {isChatOpen && <ChatBox className={styles.chatBox} />}
        </div>
    )
}

export default RightSide;