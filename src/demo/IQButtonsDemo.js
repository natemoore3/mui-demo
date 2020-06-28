import React from 'react'
import { Box, Grid, Button, Fab, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default function IQButtonsDemo() {
    return (
        <Grid item xs={12} md={3}>
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
