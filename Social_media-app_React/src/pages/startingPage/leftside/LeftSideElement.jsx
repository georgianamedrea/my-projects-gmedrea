import styles from './LeftSide.module.scss';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import PropTypes from 'prop-types';


const LeftSideElement = ({ icon, name }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background-paper' }} className={styles.leftNav}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'rgb(27, 173, 173)', width: 50, height: 50 }}>
                        {icon}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} className={styles.pageName} />
            </ListItem>
        </List >
    )
}

LeftSideElement.propTypes = {
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired
}

export default LeftSideElement;