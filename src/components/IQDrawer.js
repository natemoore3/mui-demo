import React from 'react'
import { styled, useTheme } from '@material-ui/core/styles'
import {
    List,
    ListItem,
    ListItemIcon,
    Box,
    IconButton
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Drawer from './MUI/Drawer'
import PayIcon from '../icons/PayIcon'
import IQIcon from '../icons/IQIcon'

const StyledListItemIcon = styled(ListItemIcon)({
    justifyContent: 'center'
})

const StyledSearchButtonWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    padding: '24px 0 14px'
})

export default function IQDrawer() {
    const theme = useTheme()

    return (
        <Drawer variant='permanent'>
            <Box display='flex' justifyContent='center'>
                <IQIcon />
            </Box>
            <StyledSearchButtonWrapper>
                <IconButton>
                    <SearchIcon style={{ color: theme.palette.success.main }} />
                </IconButton>
            </StyledSearchButtonWrapper>
            <List>
                <ListItem button>
                    <StyledListItemIcon>
                        <PayIcon />
                    </StyledListItemIcon>
                </ListItem>
                <ListItem button>
                    <StyledListItemIcon>
                        <PayIcon />
                    </StyledListItemIcon>
                </ListItem>
                <ListItem button>
                    <StyledListItemIcon>
                        <PayIcon />
                    </StyledListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    )
}

/**
 * These components are specific to our application and can contain business logic.
 * While they may contain business logic they should still be re-usable thorughout the application
 */
