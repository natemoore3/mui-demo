import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            // light: "#35aeef" ,
            main: '#35aeef',
            // dark: "#35aeef",
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#B9F214'
        },
        success: {
            main: '#B9F214'
        },
        text: {
            primary: '#ffffff',
            secondary: '#87898b',
            disabled: '#87898b',
            hint: '#87898b'
        },
        background: {
            default: '#212730',
            paper: '#ffffff'
        }
    },

    typography: {
        h1: {
            // fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif",
            // fontWeight: 300,
            fontSize: '2rem'
            // lineHeight: 1.167,
            // letterSpacing: "-0.01562em",
        },
        h2: {
            // fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif",
            // fontWeight: 300,
            fontSize: '1.8rem'
            // lineHeight: 1.167,
            // letterSpacing: "-0.01562em",
        }
    },

    overrides: {
        MuiButton: {
            label: {
                textTransform: 'none'
            },
            root: {
                borderRadius: 2
            }
        }
    }
})
