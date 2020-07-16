import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Tabs from '../components/MUI/Tabs'
import Tab from '../components/MUI/Tab'

export default function IQTabsDemo() {
    /**
     * This demo doesn't really cover anything about state
     * management but we should try to use local state as
     * much as possible.
     */
    const [value, setValue] = React.useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid item xs={12} md={12}>
            <Typography variant='h2' color='textSecondary'>
                Tabs
            </Typography>
            <Tabs value={value} onChange={handleChange}>
                <Tab label='cards' />
                <Tab label='bank accounts' />
                <Tab label='another tab' />
            </Tabs>
        </Grid>
    )
}
