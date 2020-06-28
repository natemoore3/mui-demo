import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

export default function IQDemoHeader() {
    return (
        <Grid item xs={12}>
            <Box paddingTop={4}>
                <Typography variant='h1' color='textPrimary'>
                    IQ Material-UI Demo
                </Typography>
            </Box>
        </Grid>
    )
}
