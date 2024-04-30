import styles from './Pages.module.scss';

import SuggestedPages from './SuggestedPages';
import LikedPages from './LikedPages';


const Pages = () => {

    return (
        <div className={styles.pages}>
            <SuggestedPages />
            <LikedPages />
        </div>
    )
}

export default Pages;