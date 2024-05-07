import styles from "./UserProfile.module.scss";

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import userName1 from '../../../assets/images/userName1.jpg';
import userName2 from '../../../assets/images/userName2.jpg';
import userName3 from '../../../assets/images/userName3.jpg';
import userName4 from '../../../assets/images/userName4.jpeg';
import userName5 from '../../../assets/images/userName5.jpeg';
import userName6 from '../../../assets/images/userName6.jpg';
import userName7 from '../../../assets/images/userName7.jpg';
import userName8 from '../../../assets/images/userName8.jpg';
import userName9 from '../../../assets/images/userName9.jpg';
import userName10 from '../../../assets/images/userName10.jpg';

import { useState } from 'react';


const USER_DATA = [
    {
        "id": 1,
        "firstName": "Username",
        "lastName": "3",
        "fullName": "Username 3",
        "date": "3/3/2024",
        "profileImage": userName3,
        "comment": "justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris"
    },
    { "id": 2, "firstName": "Username", "lastName": "1", "fullName": "Username 7", "date": "5/1/2023", "profileImage": userName7, "comment": "sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas" },
    { "id": 3, "firstName": "Username", "lastName": "5", "fullName": "Username 5", "date": "4/19/2023", "profileImage": userName5, "comment": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit" },
    { "id": 4, "firstName": "Username", "lastName": "7", "fullName": "Username 1", "date": "4/22/2023", "profileImage": userName1, "comment": "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst" },
    { "id": 5, "firstName": "Username", "lastName": "2", "fullName": "Username 2", "date": "10/7/2023", "profileImage": userName2, "comment": "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique" },
    { "id": 6, "firstName": "Username", "lastName": "4", "fullName": "Username 4", "date": "6/9/2023", "profileImage": userName4, "comment": "est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id" },
    { "id": 7, "firstName": "Username", "lastName": "6", "fullName": "Username 6", "date": "2/9/2024", "profileImage": userName6, "comment": "porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio" },
    { "id": 8, "firstName": "Username", "lastName": "8", "fullName": "Username 8", "date": "3/4/2024", "profileImage": userName8, "comment": "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia" },
    { "id": 9, "firstName": "Username", "lastName": "10", "fullName": "Username 10", "date": "6/23/2023", "profileImage": userName10, "comment": "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero" },
    { "id": 10, "firstName": "Username", "lastName": "9", "fullName": "Username 9", "date": "6/25/2023", "profileImage": userName9, "comment": "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in" }]

const UserProfileCommentSection = ({ photo, name }) => {
    const [newComment, setNewComment] = useState('');
    const [listOfComments, setListOfComments] = useState(USER_DATA)

    const submitHandler = (e) => {
        e.preventDefault();

        setListOfComments(prevState => {
            const myComment = {
                id: prevState.length,
                fullName: name,
                date: 'right now',
                comment: newComment,
                profileImage: photo
            }

            setNewComment('');
            return [myComment, ...prevState]
        })
    }


    return (
        <div className={styles.userCommentsInputContainer}>
            <div className={styles.userCommentInputSection}>
                <img src={photo} alt="" className={styles.userProfilePictureImg} />
                <form onSubmit={submitHandler} noValidate >
                    <input type="text" placeholder='Write a comment...' onChange={(e) => setNewComment(e.target.value)} />
                    <button>Add comment</button>
                </form>
            </div>

            <div className={styles.userPostComments}>
                {listOfComments && listOfComments.map((comment, idx) => {
                    return (
                        <div className={styles.userComments} key={idx}>
                            <div className={styles.userInfo}>
                                <Link to='/'>
                                    <img src={comment.profileImage} alt="Profile pic" className={styles.userProfilePictureImg} />
                                </Link>
                                <Link to='/'>
                                    <span>{comment.fullName}</span>
                                </Link>
                            </div>
                            <div className={styles.userCommentInfo}>
                                <p>{comment.comment}</p>
                                <p className={styles.userTimeOfPost}>{comment.date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

UserProfileCommentSection.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default UserProfileCommentSection;