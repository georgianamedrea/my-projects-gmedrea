import styles from './Friends.module.scss';

import FriendRequestsList from './FriendRequestsList.jsx';
import SuggestedFriends from "./SuggestedFriends.jsx";


const Friends = () => {
    return (
        <div className={styles.friendsCotainer}>
            <div className={styles.requests}>
                <FriendRequestsList />
                <SuggestedFriends />
            </div>

        </div>
    )
}

export default Friends;