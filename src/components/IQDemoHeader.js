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

/**
 * These components are specific to our application and can contain business logic.
 * While they may contain business logic they should still be re-usable thorughout the application
 */
