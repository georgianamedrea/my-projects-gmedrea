import styles from './Newsfeed.module.scss';

const DropDownList = (props) => {
    return (
        <div>
            <ul className={styles.dropDownListItems}>
                <button className={styles.dropDownHide} onClick={props.onButtonClick}>Hide post</button>
                <button className={styles.dropDownSnooze} onClick={props.onButtonClick}>Snooze profile</button>
            </ul>
        </div>
    )
}

export default DropDownList;