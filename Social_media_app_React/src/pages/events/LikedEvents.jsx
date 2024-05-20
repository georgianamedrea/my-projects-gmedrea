import styles from './Events.module.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const LikedEvents = ({ events }) => {

    return (
        <>
            <h3 className={styles.titleMyEvents}>Your events </h3>
            <div className={styles.myEvents}>
                {events.map((event) => {
                    return (
                        <div key={event.id}>
                            <Card sx={{ maxWidth: 345 }} className={styles.myEvent}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={event.imageUrl}
                                        alt="event"
                                    />
                                    <CardContent className={styles.myEventText}>
                                        <Typography gutterBottom variant="h5" component="div" className={styles.myEventName}>
                                            {event.eventName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className={styles.myEventIntestedPeople}>
                                            {event.interested} interested · {event.going} going
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
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default LikedEvents;