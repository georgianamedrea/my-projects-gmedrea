import styles from './Events.module.scss';

import event1 from '../../assets/images/event1.jpeg';
import event2 from '../../assets/images/event2.jpeg';
import event3 from '../../assets/images/event3.jpeg';

import MyEventElement from './MyEventsElement';


const LikedEvents = () => {

    const MyEvents = [
        {
            imageUrl: event1,
            eventName: 'Event name 1',
            id: 1,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 2',
            id: 2,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event3,
            eventName: 'Event name 3',
            id: 3,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 4',
            id: 4,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 5',
            id: 5,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event3,
            eventName: 'Event name 6',
            id: 6,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 7',
            id: 7,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 8',
            id: 8,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 9',
            id: 9,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event3,
            eventName: 'Event name 10',
            id: 10,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 11',
            id: 11,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 12',
            id: 12,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        }
    ]

    return (
        <>
        <h3 className={styles.titleMyEvents}>Your events </h3>
        <div className={styles.myEvents}>
            {MyEvents.map((myEvent) => {
                return (
                    <MyEventElement
                        imageUrl={myEvent.imageUrl}
                        eventName={myEvent.eventName}
                        key={myEvent.id}
                        interested={myEvent.interested}
                        going={myEvent.going}
                    />
                )

            })}
        </div>
        </>
        
    )
}

export default LikedEvents;