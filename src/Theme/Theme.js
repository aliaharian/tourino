import {createMuiTheme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({

    anchorOriginBottomRight: {
        right: 'unset',
        left: 20,
        backgroundColor: 'red'
    },

    direction: "rtl",
    shadows: ["none"],
    typography: {
        fontFamily: [
            "chistaYekanR",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
    font: {
        regular: 'chistaYekanR',
        bold: 'chistaYekanB',
        medium: 'chistaYekanM',
        latin: 'chistaYekanLatin',

    },
    textColor: {
        primary: '#0f0f0f',
        secondary: '#909090',
        disabled: '#0c0b3180',
        border: '#d6d3d3',
        avatarBorder: '#0c0b3133',
        fivePercent: '#0c0b310d',
        threePercent: '#0c0b3108',
        success: '#34c278',
        bgHover:'#ebebeb',
        bg:'#f7f7f7',
        successAlt: '#00dbb51a',
        error: '#ff6575',
        tooltip: '#3a3958',
        avatarBg:'#3d6b92'
    },
    buttonColor: {
        normal: '#3f53d9',
        hover: '#3748bb'
    },
    palette: {
        primary: {
            main: "#1641FF",
        },
        secondary: {
            main: "#19857b",
        },
        bg:{
            gold:"#F1B80E"
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
        border: {
            main: "rgba(224, 224, 224, 1)",
        },
        secondaryText: {
            main: "#0c0b31cc",
        },
        primaryText: {
            main: "#0c0b31",
        },
    },
});

export default theme;
