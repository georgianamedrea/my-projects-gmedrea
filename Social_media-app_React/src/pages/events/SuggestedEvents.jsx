import styles from './Events.module.scss';

import event1 from '../../assets/images/event1.jpeg';
import event2 from '../../assets/images/event2.jpeg';
import event3 from '../../assets/images/event3.jpeg';

import SuggestedEventsElement from './SuggestedEventsElement';


const SuggestedEvents = () => {

    const SuggestedEventsList = [
        {
            imageUrl: event1,
            eventName: 'Event name 20',
            id: 20,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 21',
            id: 21,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event3,
            eventName: 'Event name 22',
            id: 22,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 23',
            id: 23,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 24',
            id: 24,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event3,
            eventName: 'Event name 25',
            id: 25,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 26',
            id: 26,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 27',
            id: 27,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 28',
            id: 28,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event3,
            eventName: 'Event name 29',
            id: 29,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event2,
            eventName: 'Event name 30',
            id: 30,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: event1,
            eventName: 'Event name 31',
            id: 31,
            interested: Math.round(Math.random() * 25),
            going: Math.floor(Math.random() * 15)
        }
    ]

    return (
        <>
            <h3 className={styles.titleSuggestedEvents}>Discover events nearby </h3>
            <div className={styles.suggestedEvents}>
                {SuggestedEventsList.map((suggestedEvent) => {
                    return (
                        <SuggestedEventsElement
                            imageUrl={suggestedEvent.imageUrl}
                            eventName={suggestedEvent.eventName}
                            key={suggestedEvent.id}
                            interested={suggestedEvent.interested}
                            going={suggestedEvent.going}
                        />
                    )
                })}
            </div>
        </>

    )
}

export default SuggestedEvents;