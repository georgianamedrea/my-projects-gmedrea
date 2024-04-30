import styles from './Events.module.scss';

import SuggestedEvents from "./SuggestedEvents";
import LikedEvents from './LikedEvents';


const Events = () => {
    return (
        <div className={styles.events}>
            <SuggestedEvents />
            <LikedEvents />
        </div>
    )
}

export default Events;