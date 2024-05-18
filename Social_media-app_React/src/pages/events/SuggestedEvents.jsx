import styles from './Events.module.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SuggestedEvents = ({ events, onLike }) => {

    return (
        <>
            <h3 className={styles.titleSuggestedEvents}>Discover events nearby </h3>
            <div className={styles.suggestedEvents}>
                {events.map((event) => {
                    return (
                        <div key={event.id}>
                            <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={event.imageUrl}
                                        alt="event"
                                    />
                                    <CardContent className={styles.suggestedEventText}>
                                        <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                                            {event.eventName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                                            {event.interested} interested · {event.going} going
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={styles.actionButtons}>
                                    <Button size="small" color="primary" className={styles.button} onClick={() => onLike(event)} >
                                        Interested
                                    </Button>
                                    <SendIcon className={styles.sendIcon} />
                                </CardActions>
                            </Card>
                        </div>
                    )
                })}
            </div >
        </>
    )
}


export default SuggestedEvents;