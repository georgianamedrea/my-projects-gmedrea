import styles from "./MyProfile.module.scss";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { useState } from "react";


const MyProfileIntroElement = ({ icon, text }) => {

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    const [isVisible, setIsVisible] = useState(true)

    const deleteHandler = () => {
        setIsVisible(!isVisible)
    }


    return (
        <div>
            {isVisible && <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                <Grid item xs={12} md={6}>
                    <Demo>
                        <List dense={dense}>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={deleteHandler}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        {icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={text}
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                        </List>
                    </Demo>
                </Grid>
            </Box>}
        </div>
    )
}

export default MyProfileIntroElement;