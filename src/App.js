import React from 'react'
import { ThemeProvider, Container, Grid } from '@material-ui/core'
import styled from '@material-ui/styles/styled'
import { theme } from './theme'
import IQButtonsDemo from './demo/IQButtonsDemo'
import IQInputsDemo from './demo/IQInputsDemo'
import IQTabsDemo from './demo/IQTabsDemo'
import { IQDrawer, IQDemoHeader } from './components'

const StyledContainer = styled(Container)({
    marginLeft: 100,
    width: 'calc(100% - 100px)'
})

function App() {
    return (
        <>
            <IQDrawer />
            <StyledContainer>
                <Grid container spacing={5}>
                    <IQDemoHeader />
                    <IQButtonsDemo />
                    <IQInputsDemo />
                    <IQTabsDemo />
                </Grid>
            </StyledContainer>
        </>
    )
}

export default function ThemedApp() {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )
}
