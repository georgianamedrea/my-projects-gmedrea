import styles from './StartingPage.module.scss';

import Newsfeed from './newsfeed/Newsfeed';
import LeftSide from './leftside/LeftSide.jsx';
import RightSide from './rightSide/RightSide.jsx';

import postService from '../../services/postService';
import useFetch from '../../hooks/useFetch';

import { useEffect, useState } from 'react';


const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    const [postList, setPostList] = useState([])

    useEffect( () => {
        async function getPosts() {
            const response = await postService.get()
            setPostList(response)
            return response;
        }
        getPosts().catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div className={styles.mainContainer}>
            <LeftSide className={styles.leftSide} />
            <section className={styles.newsfeed}>
                {postList && postList.map(post => {
                    return <Newsfeed postData={post} key={post.id}/>
                })}
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id}/>
                })}
            </section>
            <RightSide className={styles.rightSide} />
        </div>
    )
}

export default StartingPage;