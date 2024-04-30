import styles from './Friends.module.scss';

import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState } from 'react';


const FriendRequestElement = ({ imageUrl, name }) => {

    const [isVisible, setIsVisible] = useState(true);
    const [hideButton, setHideButton] = useState(false);

    let initialValue = "Remove"
    const [buttonText, setButtonText] = useState(initialValue)

    const handleClick = () => {
        setHideButton(!hideButton)
        setButtonText("Friends!")
        setTimeout((setIsVisible), 2000)
    }

    return (
        <div>
            {isVisible && <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                <CardMedia
                    component="img"
                    alt="user photo"
                    height="120"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                        {name}
                    </Typography>
                </CardContent>
                <CardActions className={styles.button}>
                    <Button size="small" sx={{ border: 1, visibility: hideButton ? 'hidden' : 'display' }} className={styles.confirmButton} onClick={handleClick}>Confirm</Button>
                    <Button size="small" sx={{ border: 1 }} className={styles.removeButton} onClick={() => setIsVisible((isVisible) => !isVisible)}>{buttonText}</Button>
                </CardActions>
            </Card>}
        </div>
    )
}

FriendRequestElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default FriendRequestElement;