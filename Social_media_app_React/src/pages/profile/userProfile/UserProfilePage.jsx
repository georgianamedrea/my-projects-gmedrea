import styles from './UserProfile.module.scss';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WcIcon from '@mui/icons-material/Wc';
import CakeIcon from '@mui/icons-material/Cake';

import coverUser from '../../../assets/images/coverUser.jpg';
import pageName1 from '../../../assets/images/pageName1.jpeg';
import pageName2 from '../../../assets/images/pageName2.jpeg';
import pageName3 from '../../../assets/images/pageName3.jpeg';
import pageName4 from '../../../assets/images/pageName4.jpeg';
import pageName5 from '../../../assets/images/pageName5.jpeg';
import pageName6 from '../../../assets/images/pageName6.jpeg';
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

import useFetch from '../../../hooks/useFetch';
import UserProfileIntroElement from "../userProfile/UserProfileIntroElement";
import UserProfilePostSection from "./UserProfilePostSection";

import { useState } from "react";
import { useParams } from "react-router-dom";


const UserProfilePage = () => {

    const id = useParams().id;

    const ItemData = [
        {
            img: pageName1,
            title: 'Image1',
            id: 0
        },
        {
            img: pageName2,
            title: 'Image2',
            id: 1
        },
        {
            img: pageName3,
            title: 'Image3',
            id: 2
        },
        {
            img: pageName4,
            title: 'Image4',
            id: 3
        },
        {
            img: pageName5,
            title: 'Image5',
            id: 4
        },
        {
            img: pageName6,
            title: 'Image6',
            id: 5
        },
        {
            img: pageName1,
            title: 'Image7',
            id: 6
        },
        {
            img: pageName2,
            title: 'Image8',
            id: 7
        },
        {
            img: pageName3,
            title: 'Image9',
            id: 8
        }
    ];

    const FriendsData = [
        {
            img: userName1,
            name: 'Username 101',
            id: 0
        },
        {
            img: userName9,
            name: 'Username 102',
            id: 1
        },
        {
            img: userName7,
            name: 'Username 103',
            id: 2
        },
        {
            img: userName4,
            name: 'Username 104',
            id: 3
        },
        {
            img: userName5,
            name: 'Username 105',
            id: 4
        },
        {
            img: userName6,
            name: 'Username 106',
            id: 5
        },
        {
            img: userName7,
            name: 'Username 107',
            id: 6
        },
        {
            img: userName8,
            name: 'Username 108',
            id: 7
        },
        {
            img: userName9,
            name: 'Username 109',
            id: 8
        },
        {
            img: userName10,
            name: 'Username 110',
            id: 9
        },
        {
            img: userName4,
            name: 'Username 111',
            id: 10
        },
        {
            img: userName12,
            name: 'Username 112',
            id: 11
        },
        {
            img: userName1,
            name: 'Username 113',
            id: 12
        },
        {
            img: userName9,
            name: 'Username 114',
            id: 13
        },
        {
            img: userName10,
            name: 'Username 115',
            id: 14
        },
        {
            img: userName4,
            name: 'Username 116',
            id: 15
        },
        {
            img: userName9,
            name: 'Username 117',
            id: 16
        },
        {
            img: userName6,
            name: 'Username 118',
            id: 17
        },
        {
            img: userName7,
            name: 'Username 119',
            id: 18
        },
        {
            img: userName8,
            name: 'Username 120',
            id: 19
        },
        {
            img: userName9,
            name: 'Username 121',
            id: 20
        },
        {
            img: userName10,
            name: 'Username 122',
            id: 21
        },
        {
            img: userName7,
            name: 'Username 123',
            id: 22
        },
        {
            img: userName12,
            name: 'Username 124',
            id: 23
        }
    ]

    const IntroDataList = [
        {
            icon: <WcIcon />,
            text: "Gender: xxxxx",
            id: 0
        },
        {
            icon: <CakeIcon />,
            text: "Birthdate: xx  xxxxxxx xxxx",
            id: 1
        },
        {
            icon: <FavoriteIcon />,
            text: "Relationship status:  xxxxxx",
            id: 2
        },
        {
            icon: <HomeIcon />,
            text: "Lives in: xxxxxxx",
            id: 3
        },
        {
            icon: <WorkIcon />,
            text: "Works as:  xxxx xxxxxxxxx",
            id: 4
        },
        {
            icon: <SchoolIcon />,
            text: "Studied at: xxxx xxxxxxxx",
            id: 5
        }
    ]

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));


    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    const userProfileImage = {
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

    const userProfileName = {
        1: 'Username 1', 2: 'Username 2', 3: 'Username 3', 4: 'Username 4', 5: 'Username 5', 6: 'Username 6', 7: 'Username 7', 8: 'Username 8', 9: 'Username 9', 10: 'Username 10', 11: 'Username 11',
        12: 'Username 12', 13: 'Username 13', 14: 'Username 14', 15: 'Username 15', 16: 'Username 16', 17: 'Username 17', 18: 'Username 18', 19: 'Username 19', 20: 'Username 20', 21: 'Username 21', 22: 'Username 22', 23: 'Username 23', 24: 'Username 24',
        25: 'Username 25', 26: 'Username 26', 27: 'Username 27', 28: 'Username 28', 29: 'Username 29', 30: 'Username 30', 31: 'Username 31', 32: 'Username 32', 33: 'Username 33', 34: 'Username 34', 35: 'Username 35',
        36: 'Username 36', 37: 'Username 37', 38: 'Username 38', 39: 'Username 39', 40: 'Username 40', 41: 'Username 41', 42: 'Username 42', 43: 'Username 43', 44: 'Username 44', 45: 'Username 45',
        46: 'Username 46', 47: 'Username 47', 48: 'Username 48', 49: 'Username 49', 50: 'Username 50', 51: 'Username 51', 52: 'Username 52', 53: 'Username 53', 54: 'Username 54', 55: 'Username 55', 56: 'Username 56', 57: 'Username 57', 58: 'Username 58', 59: 'Username 59', 60: 'Username 60', 61: 'Username 61',
        62: 'Username 62', 63: 'Username 63', 64: 'Username 64', 65: 'Username 65', 66: 'Username 66', 67: 'Username 67', 68: 'Username 68', 69: 'Username 69', 70: 'Username 70', 71: 'Username 71', 72: 'Username 72', 73: 'Username 73', 74: 'Username 74',
        75: 'Username 75', 76: 'Username 76', 77: 'Username 77', 78: 'Username 78', 79: 'Username 79', 80: 'Username 80', 81: 'Username 81', 82: 'Username 82', 83: 'Username 83', 84: 'Username 84', 85: 'Username 85',
        86: 'Username 86', 87: 'Username 87', 88: 'Username 88', 89: 'Username 89', 90: 'Username 90', 91: 'Username 91', 92: 'Username 92', 93: 'Username 93', 94: 'Username 94', 95: 'Username 95',
        96: 'Username 96', 97: 'Username 97', 98: 'Username 98', 99: 'Username 99', 100: 'Username 100'
    }

    let photo = userProfileImage[id];
    let name = userProfileName[id];
    let friendsNumber = Math.floor(Math.random() * 225) + ' Friends'

    return (
        <div className={styles.userProfileContainer}>
            <div className={styles.userProfileHeader}>
                <img src={coverUser} alt="" className={styles.userCoverPhoto} />
                <ListItem className={styles.userProfileData}>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={photo} sx={{ width: 120, height: 120 }} className={styles.userProfilePhoto} />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={friendsNumber} className={styles.userProfileName} />
                </ListItem>
            </div>
            <div className={styles.userProfileSections}>
                <section className={styles.userProfileLeftSection}>
                    <div className={styles.userIntro}>
                        <ListItemText primary="About me" className={styles.userProfileIntroTitle} />
                        {IntroDataList.map((introData) => {
                            return (
                                <UserProfileIntroElement
                                    icon={introData.icon}
                                    text={introData.text}
                                    key={introData.id}
                                />
                            )
                        })}
                    </div>
                    <div className={styles.userPhotos}>
                        <ListItemText primary="Photos" className={styles.userProfilePhotosTitle} />
                        <ImageList sx={{ width:500, height:500 }} cols={3} rowHeight={164}>
                            {ItemData.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt={item.title}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                    <div className={styles.userFriends}>
                        <ListItemText primary="Friends" className={styles.userProfileFriendsTitle} />
                        <ImageList sx={{ width:500, height:500, overflowX: 'hidden' }} cols={3} >
                            {FriendsData.map((friend) => (
                                <ImageListItem key={friend.id}>
                                    <img
                                        srcSet={`${friend.img}?w=248&fit=crop&auto=format&dpr=2 3x`}
                                        src={`${friend.img}?w=248&fit=crop&auto=format`}
                                        alt={friend.title}
                                        className={styles.userFriendPhoto} />
                                    <ImageListItemBar
                                        title={friend.name}
                                        position="below"
                                        className={styles.userFriendName} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </section>
                <section className={styles.userProfileRightSection}>
                    {posts && posts.map(post => {
                        return <UserProfilePostSection postData={post} key={post.id} name={name} photo={photo} />
                    })}
                </section>
            </div>
        </div>
    )
}

export default UserProfilePage;