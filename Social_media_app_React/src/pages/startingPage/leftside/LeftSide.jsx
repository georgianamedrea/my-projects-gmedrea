import styles from './LeftSide.module.scss';

import { Link } from 'react-router-dom';

import PeopleIcon from '@mui/icons-material/People';
import MmsIcon from '@mui/icons-material/Mms';
import GroupsIcon from '@mui/icons-material/Groups';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import WebIcon from '@mui/icons-material/Web';
import EventIcon from '@mui/icons-material/Event';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InsightsIcon from '@mui/icons-material/Insights';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const LeftSide = () => {
    return (
        <div className={styles.leftContainer}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={styles.leftNav}>
                <ListItem>
                    <Link to='./myFriends'>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                                <PeopleIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                            </Avatar>
                        </ListItemAvatar>
                    </Link>
                    <Link to='./myFriends'>
                        <ListItemText primary="Friends" className={styles.pageName} />
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <MmsIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Feeds" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <GroupsIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Groups" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <YouTubeIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Video" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <AccessTimeIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Memories" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <BookmarkBorderIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Saved" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <Link to='./pages-section'>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                                <WebIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                            </Avatar>
                        </ListItemAvatar>
                    </Link>
                    <Link to='./pages-section'>
                        <ListItemText primary="Pages" className={styles.pageName} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='./events'>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                                <EventIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                            </Avatar>
                        </ListItemAvatar>
                    </Link>
                    <Link to='./events'>
                        <ListItemText primary="Events" className={styles.pageName} />
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <WaterDropIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Blood donations" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <StorefrontIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Marketplace" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <InsightsIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Recent ad activity" className={styles.pageName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <FavoriteBorderIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Fundraisers" className={styles.pageName} />
                </ListItem>
            </List>
        </div>
    )
}

export default LeftSide;