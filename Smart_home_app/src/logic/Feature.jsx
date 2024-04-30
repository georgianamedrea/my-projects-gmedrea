/**React */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**App */
import './Feature.scss';
import buttonIcon from './assets/images/lights-icon.png'
import buttonIconOff from './assets/images/lights-icon-off.png'
import smartHomeIcon from './assets/images/smart-home.jpg'

/**Material UI */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Feature = ({ name, action, toggleAction, state }) => {

    const [icon, setIcon] = useState('')

    const featureButtonHandler = () => {
        toggleAction(name)
    }

    useEffect(() => {
        if (name === 'Toggle Lights') {
            state ? setIcon(buttonIcon) : setIcon(buttonIconOff)
        } else {
            setIcon(smartHomeIcon);
        }
    }, [state])

    return (
        <div className="feature">
            <Card sx={{ maxWidth: 250 }} onClick={featureButtonHandler}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={icon}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description to be added
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    )
}

Feature.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    toggleAction: PropTypes.func.isRequired,
    state: PropTypes.bool
}

export default Feature;