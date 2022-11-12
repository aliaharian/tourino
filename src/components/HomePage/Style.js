import { makeStyles } from "@material-ui/styles";
import bg from '../../assets/img/bg.png'
export default makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 825,
        maxHeight: '95vh',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',

        '&:before': {
            content: '""',
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0, 0, 0, 0)) !important',
            height: 112,
            width: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1
        }

    },
    hotelsSection: {
        width: '100%',
        maxWidth: 1618,
        margin: '74px auto 0 auto',
        padding: '0 80px',
        marginBottom: 58,
        [theme.breakpoints.down(1200)]: {
            padding: '0 40px',
        },
    },
    hotelItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 16

    },
    hotelImg: {
        marginRight: 17,
        '& img': {
            width: 64,
            height: 64,
            borderRadius: 8
        }
    },
    hotelName: {
        '&>p': {
            fontSize: 13,
            color: theme.textColor.secondary,
            '&:nth-child(1)': {
                fontFamily: theme.font.bold,
                color: theme.textColor.primary,
            }
        }
    },
    landscapeToursSection: {
        width: '100%',
        maxWidth: 1618,
        margin: '74px auto 0 auto',
        padding: '87px 72px 114px 72px',
        marginBottom: 58,
        backgroundImage: 'linear-gradient(#fff 70%, #bfd7ea 200%)',
        [theme.breakpoints.down(1200)]: {
            padding: '87px 32px 114px 32px',
        },
    },
    offeredToursSection: {
        width: '100%',
        maxWidth: 1618,
        margin: '74px auto 0 auto',
        padding: '87px 72px 114px 72px',
        marginBottom: 58,
        backgroundColor: '#fff',
        [theme.breakpoints.down(1200)]: {
            padding: '87px 32px 114px 32px',
        },
    },
    landscapeTourTitle: {
        fontSize: 22,
        textAlign: 'center',
        width: '100%',
        color: theme.textColor.primary,
        marginBottom: 58,
    },
    landscapeTourItem: {
        padding: '0 8px',
        marginBottom: 25,
        '&>a': {
            width: '100%',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'none',
            },
            '&>img': {
                maxWidth: 390,
                width: '100%',
                borderRadius: 8
            },
            '&>p': {
                color: theme.textColor.secondary,
                fontSize: 13,
            }
        }
    },
    offeredToursCarousel: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>div': {
            maxWidth: 'calc(100% - 186px)',
            width: 'calc(100% - 186px)',
            [theme.breakpoints.down(800)]: {
                maxWidth: 'calc(100% - 130px)',
                width: 'calc(100% - 130px)',

            },

        },
        '& .swiper-slide': {
            height: 320,
            paddingRight: 13,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
    customersCarousel: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>div': {
            maxWidth: 'calc(100% - 70px)',
            width: 'calc(100% - 70px)',
            [theme.breakpoints.down(800)]: {
                maxWidth: 'calc(100% - 70px)',
                width: 'calc(100% - 70px)',

            },

        },
        '& .swiper-slide': {
            height: 'auto',
            // paddingRight: 13,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
    tourNavBtn: {
        width: '48px !important',
        maxWidth: '48px !important',
        minWidth: '48px !important',
        height: '48px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid ' + theme.textColor.border + ' !important',
        borderRadius: '50% !important',
        '&>svg': {
            color: theme.textColor.primary
        }
    },
    customerNavBtn: {
        width: '30px !important',
        maxWidth: '30px !important',
        minWidth: '30px !important',
        height: '30px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: 'none',
        borderRadius: '50% !important',
        '&>svg': {
            color: theme.textColor.primary
        }
    },
    tourFilterContainer: {
        width: 'calc(100% - 186px)',
        maxWidth: 'calc(100% - 186px)',
        margin: '0 auto',
        marginBottom: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down(800)]: {
            maxWidth: 'calc(100% - 130px)',
            width: 'calc(100% - 130px)',
        },
        '&>div': {
            marginRight: 13
        }
    },
    FaqSection: {
        width: '100%',
        maxWidth: 1618,
        margin: '0 auto 0 auto',
        padding: '8px 80px 114px 80px',
        marginBottom: 58,
        backgroundImage: '#fff',
        [theme.breakpoints.down(1200)]: {
            padding: '8px 40px 114px 40px',
        },
    },
    customersIcon: {
        width: '90px',
        filter: 'grayscale(100%)',
        transition: 'all 250ms ease',
        opacity: 0.8,
        '&:hover': {
            filter: 'grayscale(0)',
            opacity: 1,


        }

    }
}));
