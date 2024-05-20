import styles from './Friends.module.scss';

import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState } from 'react';


const SuggestedFriendElement = ({ imageUrl, name, onButtonClick }) => {

    const [isVisible, setIsVisible] = useState(true);
    const [hideButton, setHideButton] = useState(false);

    const showRequest = () => {
        setIsVisible((isVisible) => !isVisible)
    }

    const updateRemove = () => {
        showRequest();
        onButtonClick()
    }

    let initialValue = "Remove"
    const [buttonText, setButtonText] = useState(initialValue)

    const handleClick = () => {
        setHideButton(!hideButton);
        setButtonText('Sent!');
        setTimeout((setIsVisible), 2000);
        onButtonClick()
    }

    return (
        <div>
            {isVisible && <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                <CardMedia
                    component="img"
                    alt="user photo"
                    height="120"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                        {name}
                    </Typography>
                </CardContent>
                <CardActions className={styles.button}>
                    <Button size="small" sx={{ border: 1, visibility: hideButton ? 'hidden' : 'display' }} className={styles.addFriendButton} onClick={handleClick}>Add friend</Button>
                    <Button size="small" sx={{ border: 1 }} className={styles.removeButton} onClick={updateRemove}>{buttonText}</Button>
                </CardActions>
            </Card>}
        </div>
    )
}

SuggestedFriendElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default SuggestedFriendElement;
