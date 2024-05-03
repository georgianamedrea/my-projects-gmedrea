import styles from './LeftSide.module.scss';

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

import LeftSideElement from './LeftSideElement';


const LeftSide = () => {

    const IconElements = [
        {
            icon: <PeopleIcon />,
            name: 'Friends',
            id: 0
        },
        {
            icon: <MmsIcon />,
            name: 'Feeds',
            id: 1
        },
        {
            icon: <GroupsIcon />,
            name: 'Groups',
            id: 2
        },
        {
            icon: <YouTubeIcon />,
            name: 'Video',
            id: 3
        },
        {
            icon: <AccessTimeIcon />,
            name: 'Memories',
            id: 4
        },
        {
            icon: <BookmarkBorderIcon />,
            name: 'Saved',
            id: 5
        },
        {
            icon: <WebIcon />,
            name: 'Pages',
            id: 6
        },
        {
            icon: <EventIcon />,
            name: 'Events',
            id: 7
        },
        {
            icon: <WaterDropIcon />,
            name: 'Blood donations',
            id: 8
        },
        {
            icon: <StorefrontIcon />,
            name: 'Marketplace',
            id: 9
        },
        {
            icon: <InsightsIcon />,
            name: 'Recent ad activity',
            id: 10
        },
        {
            icon: <FavoriteBorderIcon />,
            name: 'Fundraisers',
            id: 11
        },
    ]

    return (
         <div className={styles.leftContainer}>
            {IconElements.map((iconElement) => {
                return (
                    <LeftSideElement
                        icon={iconElement.icon}
                        name={iconElement.name}
                        key={iconElement.id}
                    />
                )
            })}
        </div>
    )
}

export default LeftSide;