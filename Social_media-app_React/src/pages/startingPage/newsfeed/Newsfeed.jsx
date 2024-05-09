import styles from './Newsfeed.module.scss';

import PropTypes from 'prop-types';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';

import post1 from '../../../assets/images/post1.jpg';
import post2 from '../../../assets/images/post2.jpg';
import userName1 from '../../../assets/images/userName1.jpg';
import userName2 from '../../../assets/images/userName2.jpg';
import userName3 from '../../../assets/images/userName3.jpg';
import userName4 from '../../../assets/images/userName4.jpeg';
import userName5 from '../../../assets/images/userName5.jpg';
import userName6 from '../../../assets/images/userName6.jpg';
import userName7 from '../../../assets/images/userName7.jpg';
import userName8 from '../../../assets/images/userName8.jpg';
import userName9 from '../../../assets/images/userName9.jpg';
import userName10 from '../../../assets/images/userName10.jpg';
import userName11 from '../../../assets/images/userName11.jpg';
import userName12 from '../../../assets/images/userName12.jpg';

import CommentsSection from './comments/CommentsSection';
import DropDownList from './NewsfeedDropDownList';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Newsfeed = ({ postData }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100))
    const [isShared, setIsShared] = useState(false)
    const [shares, setShares] = useState(Math.floor(Math.random() * 100))

    const postImages = {
        0: post1,
        1: post2,
    }

    const postProfileImage = {
        1: userName1, 2: userName2, 3: userName3, 4: userName4, 5: userName5, 6: userName6, 7: userName7, 8: userName8, 9: userName9, 10: userName10, 11: userName11,
        12: userName12, 13: userName1, 14: userName2, 15: userName3, 16: userName4, 17: userName5, 18: userName6, 19: userName7, 20: userName8, 21: userName9, 22: userName10, 23: userName11, 24: userName12,
        25: userName1, 26: userName2, 27: userName3, 28: userName4, 29: userName5, 30: userName6, 31: userName7, 32: userName8,
        33: userName9, 34: userName10, 35: userName11, 36: userName12, 37: userName1, 38: userName2, 39: userName3, 40: userName4, 41: userName5, 42: userName6,
        43: userName7, 44: userName8, 45: userName9, 46: userName10, 47: userName11, 48: userName12, 49: userName1, 50: userName2, 51: userName3, 52: userName4, 53: userName5,
        54: userName6, 55: userName7, 56: userName8, 57: userName9, 58: userName10, 59: userName11, 60: userName12, 61: userName1, 62: userName2,
        63: userName3, 64: userName4, 65: userName5, 66: userName6, 67: userName7, 68: userName8, 69: userName9, 70: userName10, 71: userName11,
        72: userName12, 73: userName1, 74: userName2, 75: userName3, 76: userName4, 77: userName5, 78: userName6, 79: userName7, 80: userName8, 81: userName9,
        82: userName10, 83: userName11, 84: userName12, 85: userName1, 86: userName2, 87: userName3, 88: userName4, 89: userName5, 90: userName6, 91: userName7,
        92: userName8, 93: userName9, 94: userName10, 95: userName11, 96: userName12, 97: userName1, 98: userName2, 99: userName3, 100: userName4
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
                    <Link to={`/profile/${postData.id}`}>
                        <img src={postProfileImage[postData.id]} alt="Profile Picture"
                            className={styles.profilePictureImg} />
                    </Link>
                    <Link to={`/profile/${postData.id}`} className={styles.username}>Username {postData.id}</Link>

                    <div className={styles.contextMenu}>
                        <MoreHorizIcon onClick={() => setOpenDropDown((openDropDown) => !openDropDown)} />
                        {openDropDown && <DropDownList onButtonClick={handleClick} />}
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
                    <div className={`${styles.reaction} ${isLiked && styles.purple}`} onClick={handleLike}>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </div>

                    <div className={styles.reaction}>
                        <CommentIcon />
                        <span>Comment</span>
                    </div>

                    <div className={`${styles.reaction} ${isShared && styles.purple}`} onClick={handleShare}>
                        <ReplyIcon />
                        <span>Share</span>
                    </div>
                </section>

                <section className={styles.commentContainer}>
                    <CommentsSection />
                </section>
            </div>}
        </>

    )
}

Newsfeed.propTypes = {
    postData: PropTypes.object.isRequired
}

export default Newsfeed;