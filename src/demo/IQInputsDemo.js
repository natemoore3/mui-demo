import React from 'react'
import { Box, Grid, Typography, TextField } from '@material-ui/core'

export default function IQInputsDemo() {
    return (
        <Grid item xs={12} md={3}>
            <Typography variant='h2' color='secondary'>
                Inputs
            </Typography>
            <Box paddingBottom={2} paddingTop={3}>
                <TextField
                    placeholder='michael scott'
                    label='search for a contact'
                    color='secondary'
                    autoFocus
                    fullWidth
                />
            </Box>
            <Box paddingBottom={2}>
                <TextField
                    placeholder='michael scott'
                    label='search for a contact'
                    color='primary'
                />
            </Box>
        </Grid>
    )
}
