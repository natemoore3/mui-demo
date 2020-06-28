import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiTab from '@material-ui/core/Tab'

const Tab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 0,
        color: theme.palette.text.primary,
        minHeight: 36,
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: 16,
        marginLeft: 16,
        '&:first-child': {
            marginLeft: 0
        },
        '&:last-child': {
            marginRight: 0
        }
    }
}))((props) => <MuiTab disableRipple {...props} />)

export default Tab
