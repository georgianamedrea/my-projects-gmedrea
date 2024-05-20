import styles from './MyProfile.module.scss';

const DropDownList = (props) => {
    return (
        <div>
            <ul className={styles.dropDownListItems}>
                <button className={styles.dropDownDelete} onClick={props.onButtonClick}>Delete post</button>
                <button className={styles.dropDownHide} onClick={props.onButtonClick}>Hide from profile</button>
            </ul>
        </div>
    )
}

export default DropDownList;