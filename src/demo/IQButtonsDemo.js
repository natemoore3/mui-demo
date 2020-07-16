import React from 'react'
import { Box, Grid, Button, Fab, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default function IQButtonsDemo() {
    return (
        <Grid item xs={12} md={3}>
            {/*
                we should take advantage of the Typography component for
                consistent fonts across the application. The styles of each
                variant can be controlled in the theme object.
            */}
            <Typography variant='h2' color='primary'>
                Buttons
            </Typography>
            <Box paddingBottom={2} paddingTop={3}>
                <Button variant='contained' color='primary'>
                    hello world
                </Button>
            </Box>
            <Box paddingBottom={2}>
                <Button variant='outlined' color='primary'>
                    hello world
                </Button>
            </Box>
            <Box paddingBottom={2}>
                <Fab color='primary' size='small'>
                    <AddIcon />
                </Fab>
            </Box>
        </Grid>
    )
}
