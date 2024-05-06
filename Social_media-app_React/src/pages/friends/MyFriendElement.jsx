import styles from './Friends.module.scss';

import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState } from 'react';


const MyFriendElement = ({ imageUrl, name, onButtonClick }) => {

    const [isVisible, setIsVisible] = useState(true);

    const showRequest = () => {
        setIsVisible((isVisible) => !isVisible)
    }

    const onClickChanges = () => {
        showRequest();
        onButtonClick()
    }
    
    return (
        <div>
            {isVisible && <Card sx={{ maxWidth: 200, maxHeight: 250 }} className={styles.myFriends}>
                <CardMedia
                    component="img"
                    alt="user photo"
                    height="120"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className={styles.myFriendName}>
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ border: 1 }} className={styles.unfriendButton} onClick={onClickChanges}>Unfriend</Button>
                </CardActions>
            </Card>}
        </div>
    )
}

MyFriendElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default MyFriendElement;