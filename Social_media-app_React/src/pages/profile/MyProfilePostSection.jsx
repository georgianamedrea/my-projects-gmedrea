import styles from "./MyProfile.module.scss";

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';

import profile from '../../assets/images/profile.jpg';
import post3 from '../../assets/images/post3.jpg';
import post4 from '../../assets/images/post4.jpg';

import MyProfileCommentSection from './MyProfileCommentSection';
import DropDownList from './MyProfileDropDownList';

import { useState } from 'react';


const MyProfilePostSection = ({ postData }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100))
    const [isShared, setIsShared] = useState(false)
    const [shares, setShares] = useState(Math.floor(Math.random() * 100))

    const postImages = {
        0: post3,
        1: post4
    }

    const handleLike = () => {
        if (!isLiked) {
            setLikes(prevState => prevState + 1)
        } else {
            setLikes(prevState => prevState - 1)
        }
        setIsLiked(prevState => !prevState)
    }

    const handleShare = () => {
        if (!isShared) {
            setShares(prevState => prevState + 1)
        } else {
            setShares(prevState => prevState - 1)
        }
        setIsShared(prevState => !prevState)
    }

    const [openDropDown, setOpenDropDown] = useState(false);

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible((isVisible) => !isVisible)
    }

    return (
        <>
            {isVisible && <div className={styles.mainPost}>
                <div className={styles.userInfo}>
                    <Link to='/me'>
                        <img src={profile} alt="Profile Picture"
                            className={styles.myProfilePictureImg} />
                    </Link>
                    <Link to='/me' className={styles.myProfileName} >Georgiana Medrea</Link>

                    <div className={styles.contextMenu}>
                        <MoreHorizIcon onClick={() => setOpenDropDown((openDropDown) => !openDropDown)} />
                        {openDropDown && <DropDownList onButtonClick={handleClick}/>}
                    </div>
                </div>

                <section className={styles.content}>
                    <p>{postData.title}</p>
                    <div className={styles.imageWrapper}>
                        <img src={postImages[postData.id % 2]} alt="post content" className={styles.mainPostImage} />
                    </div>

                    <p>{postData.body}</p>
                </section>

                <section className={styles.reacts}>
                    <div className={styles.likesNumber}>
                        <ThumbUpIcon />
                        <span className={styles.reactsCount}>{likes}</span>
                    </div>

                    <div className={styles.sharesNumber}>
                        <ReplyIcon />
                        <span className={styles.reactsCount}>{shares}</span>
                    </div>
                </section>

                <section className={styles.reactsActions}>
                    <div className={`${styles.reaction} ${isLiked && styles.blue}`} onClick={handleLike}>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </div>

                    <div className={styles.reaction}>
                        <CommentIcon />
                        <span>Comment</span>
                    </div>

                    <div className={`${styles.reaction} ${isShared && styles.blue}`} onClick={handleShare}>
                        <ReplyIcon />
                        <span>Share</span>
                    </div>
                </section>

                <section className={styles.commentContainer}>
                    <MyProfileCommentSection />
                </section>
            </div>}
        </>
    )
}

MyProfilePostSection.propTypes = {
    postData: PropTypes.object.isRequired
}


export default MyProfilePostSection;