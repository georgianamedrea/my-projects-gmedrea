import styles from './Friends.module.scss';

import FriendRequestsList from './FriendRequestsList.jsx';
import FriendsList from "./FriendsList.jsx";
import SuggestedFriends from "./SuggestedFriends.jsx";


const Friends = () => {
    return (
        <div className={styles.friendsCotainer}>
            <FriendsList className={styles.myFriendsList}/>
            <div className={styles.requests}>
                <FriendRequestsList />
                <SuggestedFriends />
            </div>

        </div>
    )
}

export default Friends;