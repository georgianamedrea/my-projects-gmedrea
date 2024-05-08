import styles from './MyProfile.module.scss';

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
import WomanIcon from '@mui/icons-material/Woman';
import CakeIcon from '@mui/icons-material/Cake';
import MyProfileIntroElement from "./MyProfileIntroElement";
import MyProfilePostSection from "./MyProfilePostSection";

import coverProfile from '../../assets/images/coverProfile.jpg'
import profileImage from '../../assets/icons/profile.jpg';
import pageName1 from '../../assets/images/pageName1.jpeg';
import pageName2 from '../../assets/images/pageName2.jpeg';
import pageName3 from '../../assets/images/pageName3.jpeg';
import pageName4 from '../../assets/images/pageName4.jpeg';
import pageName5 from '../../assets/images/pageName5.jpeg';
import pageName6 from '../../assets/images/pageName6.jpeg';
import userName1 from '../../assets/images/userName1.jpg';
import userName4 from '../../assets/images/userName4.jpeg';
import userName5 from '../../assets/images/userName5.jpeg';
import userName6 from '../../assets/images/userName6.jpg';
import userName7 from '../../assets/images/userName7.jpg';
import userName8 from '../../assets/images/userName8.jpg';
import userName9 from '../../assets/images/userName9.jpg';
import userName10 from '../../assets/images/userName10.jpg';
import userName12 from '../../assets/images/userName12.jpg';

import useFetch from '../../hooks/useFetch';

import { useState } from "react";


const MyProfile = () => {

    const itemData = [
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

    const friendsData = [
        {
            img: userName1,
            name: 'Username 1',
            id: 0
        },
        {
            img: userName9,
            name: 'Username 2',
            id: 1
        },
        {
            img: userName7,
            name: 'Username 3',
            id: 2
        },
        {
            img: userName4,
            name: 'Username 4',
            id: 3
        },
        {
            img: userName5,
            name: 'Username 5',
            id: 4
        },
        {
            img: userName6,
            name: 'Username 6',
            id: 5
        },
        {
            img: userName7,
            name: 'Username 7',
            id: 6
        },
        {
            img: userName8,
            name: 'Username 8',
            id: 7
        },
        {
            img: userName9,
            name: 'Username 9',
            id: 8
        },
        {
            img: userName10,
            name: 'Username 10',
            id: 9
        },
        {
            img: userName4,
            name: 'Username 11',
            id: 10
        },
        {
            img: userName12,
            name: 'Username 12',
            id: 11
        },
        {
            img: userName1,
            name: 'Username 13',
            id: 12
        },
        {
            img: userName9,
            name: 'Username 14',
            id: 13
        },
        {
            img: userName10,
            name: 'Username 15',
            id: 14
        },
        {
            img: userName4,
            name: 'Username 16',
            id: 15
        },
        {
            img: userName9,
            name: 'Username 17',
            id: 16
        },
        {
            img: userName6,
            name: 'Username 18',
            id: 17
        },
        {
            img: userName7,
            name: 'Username 19',
            id: 18
        },
        {
            img: userName8,
            name: 'Username 20',
            id: 19
        },
        {
            img: userName9,
            name: 'Username 21',
            id: 20
        },
        {
            img: userName10,
            name: 'Username 22',
            id: 21
        },
        {
            img: userName7,
            name: 'Username 23',
            id: 22
        },
        {
            img: userName12,
            name: 'Username 24',
            id: 23
        }
    ]

    const IntroDataList = [
        {
            icon: <WomanIcon />,
            text: "Gender: xxxxxx",
            id: 0
        },
        {
            icon: <CakeIcon />,
            text: "Birthdate: xx xxxxxxxx xxxx",
            id: 1
        },
        {
            icon: <FavoriteIcon />,
            text: "Relationship status: xxxxxxx",
            id: 2
        },
        {
            icon: <HomeIcon />,
            text: "Lives in: xxxxxxxxx",
            id: 3
        },
        {
            icon: <WorkIcon />,
            text: "Works as: xxx xxxxxxxxx",
            id: 4
        },
        {
            icon: <SchoolIcon />,
            text: "Studied at: xxxx xxxxxxxxx",
            id: 5
        }
    ]

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));


    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div className={styles.myProfileContainer}>
            <div className={styles.myProfileHeader}>
                <img src={coverProfile} alt="" className={styles.coverPhoto} />
                <ListItem className={styles.myProfileData}>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={profileImage} sx={{ width: 120, height: 120 }} className={styles.myProfilePhoto} />
                    </ListItemAvatar>
                    <ListItemText primary="Georgiana Medrea" secondary="24 Friends" className={styles.myProfileName} />
                </ListItem>
            </div>
            <div className={styles.myProfileSections}>
                <section className={styles.myProfileLeftSection}>
                    <div className={styles.intro}>
                        <ListItemText primary="About me" className={styles.myProfileIntroTitle} />
                        {IntroDataList.map((introData) => {
                            return (
                                <MyProfileIntroElement
                                    icon={introData.icon}
                                    text={introData.text}
                                    key={introData.id}
                                />
                            )
                        })}
                    </div>
                    <div className={styles.myPhotos}>
                        <ListItemText primary="Photos" className={styles.myProfilePhotosTitle} />
                        <ImageList sx={{ width:500, height:500 }} cols={3} rowHeight={164}>
                            {itemData.map((item) => (
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
                    <div className={styles.myFriends}>
                        <ListItemText primary="Friends" className={styles.myProfileFriendsTitle} />
                        <ImageList sx={{ width:500, height:500, overflowX: 'hidden' }} cols={3}>
                            {friendsData.map((friend) => (
                                <ImageListItem key={friend.id}>
                                    <img
                                        srcSet={`${friend.img}?w=248&fit=crop&auto=format&dpr=2 3x`}
                                        src={`${friend.img}?w=248&fit=crop&auto=format`}
                                        alt={friend.title}
                                        className={styles.friendPhoto} />
                                    <ImageListItemBar
                                        title={friend.name}
                                        position="below"
                                        className={styles.friendName} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </section>
                <section className={styles.myProfileRightSection}>
                    {posts && posts.map(post => {
                        return <MyProfilePostSection postData={post} key={post.id} />
                    })}
                </section>
            </div>
        </div>
    )
}


export default MyProfile;