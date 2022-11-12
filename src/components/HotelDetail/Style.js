import { makeStyles } from "@material-ui/styles";
import bg from '../../assets/img/bg.png'
export default makeStyles((theme) => ({
    container: {
        maxWidth: 1618,
        margin: '0 auto',
        padding: '21px 250px',
        [theme.breakpoints.down(1445)]: {
            padding: '21px 180px',
        },
        [theme.breakpoints.down(1350)]: {
            padding: '21px 130px',
        },
        [theme.breakpoints.down(1250)]: {
            padding: '21px 40px',
        },
    },
    hotelSection: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 20,
        borderBottom: '1px solid ' + theme.textColor.border
    },
    hotelName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        '&>p': {
            fontSize: 13,
            fontFamily: theme.font.bold,
            color: theme.textColor.primary
        }
    },
    hotelInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: 15,

        '&>div:nth-child(1)': {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            '& p': {
                fontSize: 13,
                fontFamily: theme.font.medium,
                color: theme.textColor.primary,
                marginRight: 20
            },
            '&>div': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                '& svg': {
                    color: theme.textColor.error,
                    fontSize: 18
                }
            }
        },
        '&>div:nth-child(2)': {
            '& svg': {
                marginLeft: 10,
                color: theme.textColor.secondary,
                fontSize: 18
            }

        }

    },
    hotelAddress: {
        fontSize: '13px !important',
        fontFamily: theme.font.regular + ' !important',
        color: theme.textColor.secondary + ' !important',
    },
    hotelImages: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row-reverse',
        maxHeight: '100%',
        marginTop: 15,
        position: 'relative',

        '&>div:nth-child(1)': {
            flex: 1,
            maxWidth: 'calc(50% - 3px)',
            height: '100%',

            '& img': {
                width: '100%',
            }
        },
        '&>div:nth-child(2)': {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            maxWidth: 'calc(50% - 3px)',
            height: '100%',

            '& div': {
                maxWidth: 'calc(50% - 3.5px)',
                '& img': {
                    width: '100%',

                }
            }
        }

    },
    ImageFloatBtn: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: '7px 10px',
        '& p': {
            fontSize: 13,
            color: theme.textColor.secondary
        },
        '& svg': {
            fontSize: 18,
            color: theme.textColor.secondary,
            marginRight: 5
        },
        '&:hover': {
            position: 'absolute',
            bottom: 20,
            left: 10,
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: '7px 10px',
        }
    },
    aboutHotel: {
        marginTop: 15,
        '&>p:nth-child(1)': {
            fontSize: 16,
            fontFamily: theme.font.bold,
            color: theme.textColor.primary,
            marginBottom: 10,
        },
        '&>p:nth-child(2)': {
            fontSize: 13,
            fontFamily: theme.font.regular,
            color: theme.textColor.secondary,
            lineHeight: 1.8
        },
    },
    roomsSection: {
        width: '100%',
        padding: '20px 0',
        borderBottom: '1px solid ' + theme.textColor.border

    },
    roomsTitle: {
        fontSize: 13,
        fontFamily: theme.font.regular,
        color: theme.textColor.primary,
        marginBottom: 10,
        '& span': {
            color: theme.textColor.secondary,
            marginLeft: 10
        }
    },
    roomItemContainer: {
        margin: '0 -10px',
        width: 'calc(100% + 20px)'

    },
    roomItemParent: {
        padding: '10px',
    },
    roomItem: {
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 8,
        padding: '15px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '& p': {
            fontSize: 12,
            color: theme.textColor.primary,
        }
    },

    roomType: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    changeRoomBtn: {
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 12,
        '& span': {
            fontSize: 11,
            color: theme.textColor.secondary,

        }
    },
    transportSection: {
        width: '100%',
        padding: '20px 0',
        borderBottom: '1px solid ' + theme.textColor.border

    },
    transportTitle: {
        fontSize: 13,
        fontFamily: theme.font.regular,
        color: theme.textColor.primary,
        marginBottom: 10,
    },
    transportItemContainer: {
        margin: '0 -10px',
        width: 'calc(100% + 20px)'

    },
    transportItemParent: {
        padding: '10px',
    },
    transportItem: {
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 8,
        // padding: '15px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '& p': {
            fontSize: 12,
            color: theme.textColor.primary,
        }
    },
    transportHeader: {
        padding: 15,
        borderBottom: '1px solid ' + theme.textColor.border,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'relative',
        '&>p:nth-child(2)': {
            position: 'absolute',
            right: '50%',
            transform: 'translateX(50%)'
        }
    },
    changeTransportBtn: {
        border: '1px solid ' + theme.textColor.border,
        borderRadius: 12,
        '& span': {
            fontSize: 11,
            color: theme.textColor.secondary,

        }
    },
    transportBody: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: 15,
    },
    transportLogo: {
        width: 60,
        height: 60,
        borderRadius: '50%',
        border: '1px solid ' + theme.textColor.border,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            color: theme.textColor.secondary
        }
    },
    transportTime: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        padding: '20px 0',
        '&>div:nth-child(1) , &>div:nth-child(3)': {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            '& p': {
                maxWidth: '100px',
            },
            '&>div:nth-child(2)': {
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#3d6b92',
                margin: '5px 0',

            }
        },
        '&>div:nth-child(1) ': {
            left: 0,
            alignItems: 'flex-start',

        },
        '&>div:nth-child(2)': {
            width: '100%',
            height: 3,
            borderRadius: 3,
            backgroundColor: theme.textColor.border,
            margin: '5px 0',
        },

        '&>div:nth-child(3) ': {
            right: 0,
            alignItems: 'flex-end',

        },
    },
    transportName: {
        fontSize: 12,
        color: theme.textColor.primary
    },
    facilitySection: {
        width: '100%',
        padding: '20px 0',
        // borderBottom: '1px solid ' + theme.textColor.border

    },
    facilityTitle: {
        fontSize: 13,
        fontFamily: theme.font.regular,
        color: theme.textColor.primary,
        marginBottom: 10,
    },
    facilityItemParent: {
        padding: '10px',
    },
    facilityItem: {
        borderRadius: 8,
        // padding: '15px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',

        '& p ': {
            fontSize: 12,
            color: theme.textColor.primary,
        },
        '& span': {
            fontSize: 13,
            color: theme.textColor.primary,
        },
        '& svg':{
            fontSize:18
        }
    },
}));
