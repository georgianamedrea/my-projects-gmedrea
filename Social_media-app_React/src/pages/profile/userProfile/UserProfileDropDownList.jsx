import styles from './UserProfile.module.scss';

const UserProfileDropDownList = (props) => {
    return (
        <div>
            <ul className={styles.userDropDownListItems}>
                <button className={styles.userDropDownDelete} onClick={props.onButtonClick}>Delete post</button>
                <button className={styles.userDropDownHide} onClick={props.onButtonClick}>Hide from profile</button>
            </ul>
        </div>
    )
}

export default UserProfileDropDownList;