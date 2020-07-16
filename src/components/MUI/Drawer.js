import React from 'react'
import MuiDrawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 100

const useStyles = makeStyles({
    root: {
        width: drawerWidth
    },
    paper: {
        width: drawerWidth,
        background: '#0f1318',
        border: 'none'
    }
})

export default function Drawer(props) {
    const classes = useStyles()
    return (
        <MuiDrawer
            classes={{
                root: classes.root,
                paper: classes.paper
            }}
            {...props}
        />
    )
}

/**
 * These are raw MUI components that have been styled to match our design spec.
 * They contain no business logic and can be used anywhere in the application.
 */
