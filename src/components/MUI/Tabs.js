import { withStyles } from '@material-ui/core/styles'
import MuiTabs from '@material-ui/core/Tabs'

const Tabs = withStyles({
    root: {
        background: 'transparent',
        minHeight: 36
    },
    indicator: {
        height: 4
    }
})(MuiTabs)

export default Tabs

/**
 * These are raw MUI components that have been styled to match our design spec.
 * They contain no business logic and can be used anywhere in the application.
 */
