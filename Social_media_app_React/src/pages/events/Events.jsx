import styles from './Events.module.scss';

import event1 from '../../assets/images/event1.jpeg';
import event2 from '../../assets/images/event2.jpeg';
import event3 from '../../assets/images/event3.jpeg';

import SuggestedEvents from "./SuggestedEvents";
import LikedEvents from './LikedEvents';

import { useState } from 'react';


const Events = () => {

    const [suggestedEvents, setSuggestedEvents] = useState([
        {
            imageUrl: event1,
            eventName: 'Event name 20',
            id: 0,
            interested: 745,
            going: 125
        },
        {
            imageUrl: event2,
            eventName: 'Event name 21',
            id: 1,
            interested: 236,
            going: 100
        },
        {
            imageUrl: event3,
            eventName: 'Event name 22',
            id: 2,
            interested: 912,
            going: 420
        },
        {
            imageUrl: event2,
            eventName: 'Event name 23',
            id: 3,
            interested: 11,
            going: 12
        },
        {
            imageUrl: event1,
            eventName: 'Event name 24',
            id: 4,
            interested: 17,
            going: 23
        },
        {
            imageUrl: event3,
            eventName: 'Event name 25',
            id: 5,
            interested: 156,
            going: 102
        },
        {
            imageUrl: event1,
            eventName: 'Event name 26',
            id: 6,
            interested: 123,
            going: 122
        },
        {
            imageUrl: event2,
            eventName: 'Event name 27',
            id: 7,
            interested: 100,
            going: 222
        },
        {
            imageUrl: event1,
            eventName: 'Event name 28',
            id: 8,
            interested: 12,
            going: 123
        },
        {
            imageUrl: event3,
            eventName: 'Event name 29',
            id: 9,
            interested: 236,
            going: 123
        },
        {
            imageUrl: event2,
            eventName: 'Event name 30',
            id: 10,
            interested: 122,
            going: 123
        },
        {
            imageUrl: event1,
            eventName: 'Event name 31',
            id: 11,
            interested: 586,
            going: 856
        }
    ])

    const [likedEvents, setLikedEvents] = useState([
        {
            imageUrl: event1,
            eventName: 'Event name 1',
            id: 12,
            interested: 125,
            going: 236
        },
        {
            imageUrl: event2,
            eventName: 'Event name 2',
            id: 13,
            interested: 102,
            going: 200
        },
        {
            imageUrl: event3,
            eventName: 'Event name 3',
            id: 14,
            interested: 2365,
            going: 2369
        },
        {
            imageUrl: event2,
            eventName: 'Event name 4',
            id: 15,
            interested: 1256,
            going: 236
        },
        {
            imageUrl: event1,
            eventName: 'Event name 5',
            id: 16,
            interested: 569,
            going: 896
        },
        {
            imageUrl: event3,
            eventName: 'Event name 6',
            id: 17,
            interested: 236,
            going: 789
        }
    ])

    const handleLike = (event) => {
        // Remove from suggested events
        const updatedSuggestedEvents = suggestedEvents.filter((e) => e !== event);
        setSuggestedEvents(updatedSuggestedEvents);

        // Add to liked events
        setLikedEvents([...likedEvents, event]);
    };

    return (
        <div className={styles.events}>
            <SuggestedEvents events={suggestedEvents} onLike={handleLike} />
            <LikedEvents events={likedEvents} />
        </div>
    )
}

export default Events;