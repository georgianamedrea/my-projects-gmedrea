import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss'
import Newsfeed from './newsfeed/Newsfeed';
import LeftSide from './leftside/LeftSide';
import RightSide from './rightSide/RightSide';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div className={styles.mainContainer}>
            <LeftSide className={styles.leftSide} />
            <section className={styles.newsfeed}>
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id}/>
                })}
            </section>
            <RightSide className={styles.rightSide} />
        </div>
    )
}

export default StartingPage;