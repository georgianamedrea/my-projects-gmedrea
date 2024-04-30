import styles from './Events.module.scss';

import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const MyEventElement = ({ imageUrl, eventName, interested, going}) => {
    return (
        <Card sx={{ maxWidth: 345 }} className={styles.myEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={imageUrl}
                                alt="event"
                            />
                            <CardContent className={styles.myEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.myEventName}>
                                    {eventName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.myEventIntestedPeople}>
                                    {interested} interested · {going} going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.myActionButtons}>
                            <Button size="small" color="primary" className={styles.myButton}>
                                Interested
                            </Button>
                            <SendIcon className={styles.mySendIcon} />
                        </CardActions>
                    </Card>
    )
}

MyEventElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    interested: PropTypes.number.isRequired,
    going: PropTypes.number.isRequired
}

export default MyEventElement;