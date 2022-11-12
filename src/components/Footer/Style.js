import { makeStyles } from "@material-ui/styles";
import bg from '../../assets/img/bg.png'
export default makeStyles((theme) => ({
    footerGrandContainer: {
        width: '100%',
        backgroundColor: '#bfd7ea26',
    },
    footerContainer: {
        width: '100%',
        maxWidth: 1618,
        margin: '0 auto',
        margin: '0 auto',
        padding: '119px 80px 21px 80px',
        [theme.breakpoints.down(1200)]: {
            padding: '119px 40px 21px 40px',
        },
    },
    footer: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: '0 auto',
        '&>div': {
            '&:nth-child(1) ,&:nth-child(3) ': {
                paddingRight: 180,
                [theme.breakpoints.down(1500)]: {
                    paddingRight: 100,
                },
                [theme.breakpoints.down(1400)]: {
                    paddingRight: 80,
                },
                [theme.breakpoints.down(1200)]: {
                    paddingRight: 50,
                },

            },

            '&>h1': {
                fontSize: 20,
                fontFamily: theme.font.medium,
                fontWeight: 'normal',
                color: '#0b3954',
                marginBottom: 19,
            },
            '&>h3': {
                fontSize: 16,
                fontFamily: theme.font.medium,
                fontWeight: 'normal',
                color: '#0b3954',
                marginBottom: 19,
            },
            '&>p': {
                fontSize: 13,
                fontFamily: theme.font.regular,
                fontWeight: 'normal',
                color: theme.textColor.secondary,
                lineHeight: '30px',
            },
            '&>div': {
                '&>div': {
                    padding: 11,
                    boxSizing: 'borderBox',
                    '&>img': {
                        width: '100%'
                    }
                }
            },
            '&>ul': {
                padding: 0,
                listStyleType: 'none',
                '&>li': {
                    '&>a': {
                        fontSize: 13,
                        color: theme.textColor.secondary,
                        lineHeight: '30px',
                        '&:hover': {
                            textDecoration: 'none'
                        }

                    }
                }
            }
        }
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: theme.textColor.border,
        color: theme.textColor.border,
        margin: '70px 0 33px 0'
    },
    copyright: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            '&>p': {
                fontSize: 13,
                fontFamily: theme.font.regular,
                fontWeight: 'normal',
                color: theme.textColor.secondary,
                lineHeight: '30px',
            },
            '&>a': {
                marginRight: 24,
                height: '30px',
                display:'block',
                '&:last-child': {
                    marginRight: 0,
                },
                '&>img': {
                    height: '25px',
                    opacity: 0.4,
                    transition:'all 250ms ease',
                    '&:hover':{
                        opacity: 0.7,

                    }
                }
            }
        }
    }
}));
