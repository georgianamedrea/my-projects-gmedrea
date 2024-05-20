import styles from './Pages.module.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const SuggestedPages = ({ pages, onLike }) => {

    return (
        <>
            <h3 className={styles.titleSuggestedPages}>Suggested Pages</h3>
            <div className={styles.suggestedPages}>
                {pages.map((page) => {
                    return (
                        <div key={page.id}>
                            <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={page.imageUrl}
                                        alt="page name"
                                    />
                                    <CardContent className={styles.suggestedPageText}>
                                        <Typography gutterBottom variant="h6" component="div" className={styles.suggestedPageName}>
                                            <strong>{page.pageName}</strong>
                                        </Typography>
                                        <Typography gutterBottom component="div" className={styles.suggestedPageLikes}>
                                            <small>{page.pageLikes} people like this page</small>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" className={styles.suggestedPageButton} onClick={() => onLike(page)} >
                                        Like
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default SuggestedPages;