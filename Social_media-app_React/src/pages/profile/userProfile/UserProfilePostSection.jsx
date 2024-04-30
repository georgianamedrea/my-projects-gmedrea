import styles from "./UserProfile.module.scss";

import PropTypes from 'prop-types';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';

import post5 from '../../../assets/images/post5.jpeg';
import post6 from '../../../assets/images/post6.jpg';

import DropDownList from './UserProfileDropDownList';
import UserProfileCommentSection from './UserProfileCommentSection';

import { useState } from 'react';


const UserProfilePostSection = ({ postData, name, photo }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100))
    const [isShared, setIsShared] = useState(false)
    const [shares, setShares] = useState(Math.floor(Math.random() * 100))

    const postImages = {
        0: post5,
        1: post6
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
            {isVisible && <div className={styles.userMainPost}>
                <div className={styles.userInfo}>
                    <img src={photo} alt="Profile Picture"
                        className={styles.userProfilePictureImg} />
                    <div className={styles.userProfileName}>{name}</div>

                    <div className={styles.userContextMenu}>
                        <MoreHorizIcon onClick={() => setOpenDropDown((openDropDown) => !openDropDown)} />
                        {openDropDown && <DropDownList onButtonClick={handleClick} />}
                    </div>
                </div>

                <section className={styles.userContent}>
                    <p>{postData.title}</p>
                    <div className={styles.userImageWrapper}>
                        <img src={postImages[postData.id % 2]} alt="post content" className={styles.userMainPostImage} />
                        <div className={styles.userInfoIcon}>
                            <InfoIcon fontSize='large' color='info' />
                        </div>
                    </div>

                    <p>{postData.body}</p>
                </section>

                <section className={styles.userReacts}>
                    <div className={styles.userLikesNumber}>
                        <ThumbUpIcon />
                        <span className={styles.userReactsCount}>{likes}</span>
                    </div>

                    <div className={styles.userSharesNumber}>
                        <ReplyIcon />
                        <span className={styles.reactsCount}>{shares}</span>
                    </div>
                </section>

                <section className={styles.userReactsActions}>
                    <div className={`${styles.userReaction} ${isLiked && styles.blue}`} onClick={handleLike}>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </div>

                    <div className={styles.userReaction}>
                        <CommentIcon />
                        <span>Comment</span>
                    </div>

                    <div className={`${styles.userReaction} ${isShared && styles.blue}`} onClick={handleShare}>
                        <ReplyIcon />
                        <span>Share</span>
                    </div>
                </section>

                <section className={styles.userCommentContainer}>
                    <UserProfileCommentSection photo={photo} name={name}/>
                </section>
            </div>}
        </>
    )
}

UserProfilePostSection.propTypes = {
    postData: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
}


export default UserProfilePostSection;