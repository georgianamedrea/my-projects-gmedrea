import styles from './Events.module.scss';

import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';


const SuggestedEventsElement = ({ imageUrl, eventName, interested, going }) => {

    const [isVisible, setIsVisible] = useState(true);

    const [active, setActive] = useState(false);

    const eventHandler = () => {
        setActive(!active);
        setTimeout((setIsVisible), 2000)
    }

    return (
        <div>
            {isVisible && <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={imageUrl}
                        alt="event"
                    />
                    <CardContent className={styles.suggestedEventText}>
                        <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                            {eventName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                            {interested} interested · {going} going
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={styles.actionButtons}>
                    <Button size="small" color="primary" style={{ backgroundColor: active ? 'rgb(59, 112, 247)' : 'lightgray', color: active ? 'white' : 'black' }} className={styles.button} onClick={eventHandler}>
                        Interested
                    </Button>
                    <SendIcon className={styles.sendIcon} />
                </CardActions>
            </Card>}
        </div>
    )
}

SuggestedEventsElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    interested: PropTypes.number.isRequired,
    going: PropTypes.number.isRequired
}

export default SuggestedEventsElement;