import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
    searchbar: {
        maxWidth: 860,
        height: 67,
        borderRadius: 91,
        backgroundColor: 'rgb(245,245,245)',
        border: '1px solid #e7e7e7',
        boxShadow: '0 3px 20px 0 rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0 auto',
        position: 'relative',
        transition: 'all 150ms ease',
        '& .MuiList-root': {
            outline: 'none !important',
            '& div': {
                outline: 'none !important',
            }
        }

    },
    searchbarSm: {
        boxShadow: 'none',
        border: '1px solid ' + theme.textColor.border,
        height: 48,
        backgroundColor: '#fff',
        transition: 'all 150ms ease',

    },
    noAfter: {
        '&:after': {
            backgroundColor: 'transparent !important',
        },
    },
    searchbarItem: {
        height: '100%',
        maxWidth: 200,
        flex: 1,
        flexGrow: 1,
        borderRadius: 34,
        // backgroundColor:'rgba(245,245,245,1)',
        backgroundColor: 'transparent',
        padding: '11px 26px',
        cursor: 'pointer',
        transition: 'all 150ms ease',
        position: 'relative',
        [theme.breakpoints.down(800)]: {
            padding: '11px 20px',
        },
        '&:after': {
            content: '""',
            height: 34,
            width: 1,
            backgroundColor: '#d6d3d3',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'all 150ms ease',

        },

        '&:hover': {
            backgroundColor: '#fff',
            boxShadow: '0 3px 20px 0 rgba(0,0,0,0.25)',
            '& + div': {
                '&:after': {
                    backgroundColor: 'transparent'
                },
            },
            '&:after': {
                backgroundColor: 'transparent'
            },


        },
        '&>p': {
            fontSize: 13,
            lineHeight: '22px',
            '&:nth-child(1)': {
                color: theme.textColor.primary,
                marginBottom: 1,
            },
            '&:nth-child(2)': {
                color: theme.textColor.secondary
            }
        }
    },

    searchbarItemChild: {
        marginRight: 0,
        '&>p': {
            fontSize: 13,
            lineHeight: '22px',
            '&:nth-child(1)': {
                color: theme.textColor.primary,
                marginBottom: 1,
            },
            '&:nth-child(2)': {
                color: theme.textColor.secondary
            }
        }
    },
    searchBtnContainer: {
        display: 'flex',
        paddingRight: 11,
        // minWidth: 248,
        maxWidth: 300,
        justifyContent: 'space-between',
        '& button': {
            width: 43,
            minWidth: 43,
            maxWidth: 43,
            height: 43,
            backgroundColor: '#ff5a5f',
            borderRadius: '50%',
            '&:hover': {
                backgroundColor: '#ff5a5f',
            },
            '& svg': {
                fontSize: 23,
                color: '#fff',
                transform: 'scaleX(-1)'
            }
        }
    },

    searchbarItemActive: {

        backgroundColor: '#fff',
        boxShadow: '0 3px 20px 0 rgba(0,0,0,0.25)',
        '&:after': {
            backgroundColor: 'transparent'
        },
        '& + div': {
            '&:after': {
                backgroundColor: 'transparent'
            },
        },

    },
    locationMenu: {

        border: 'none !important',
        outline: 'none !important',
        marginTop: 13,
        transform: 'translate3d(calc(0px), 65px, 0px) !important',
        left: 0,
        right: 'unset !important',
        '& .MuiPaper-root': {
            width: 504,
            // height: 508,
            borderRadius: 32,
            padding: '25px 33px',
            paddingBottom: 9
        }

    },
    countMenu: {

        border: 'none !important',
        outline: 'none !important',
        marginTop: 13,
        transform: 'translate3d(calc(1vw), 54px, 0px) !important',
        '& ul': {
            padding: 0,
            outline: 'none !important'
        },
        '& .MuiPaper-root': {
            width: 300,
            maxHeight: 250,
            height: 250,
            overflowY: 'auto',
            overflowX:'auto',
            // height: 508,
            transform: 'translate(15px, 11px)!important',
            borderRadius: 32,
            padding: '0',
            paddingBottom: 9,
            '&>div':{
                '&>div':{
                    '&:nth-child(1)':{
                        marginLeft:'unset !important',
                        marginRight:'-15px !important'
                    }
                }
            }
        }

    },
    dateMenu: {

        border: 'none !important',
        outline: 'none !important',
        marginTop: 13,
        transform: ' translate3d(-0, 65px, 0px) !important',
        width: 'calc(100vw - 80px)',
        maxWidth: 860,
        [theme.breakpoints.down(900)]: {
            transform: 'translate3d(calc(50vw - 65%), 65px, 0px) !important',
            width: 'auto',

        },
        '& .MuiPaper-root': {
            width: 'calc(100vw - 80px)',
            maxWidth: 860,
            // height: 508,
            // transform: 'translate(57px, 13px)!important',
            borderRadius: 32,
            padding: '0',
            paddingBottom: 9,
            [theme.breakpoints.down(900)]: {
                padding: '10px',
                width: 'auto',
            },
        }

    },
    selectFromLocation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
        height: 49,
        width: '100%',

        '& img': {
            width: 49,
            marginRight: 21
        },
        '& p': {
            fontSize: 13
        }
    },
    locationHistoryContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: 20,
        '&>p': {
            fontSize: 14,
            fontFamily: theme.font.medium,
            marginBottom: 12
        }
    },
    locationHistoryItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 16,
        cursor: 'pointer',
        width: '100%',
        '&>p': {
            fontSize: 13,
            color: theme.textColor.secondary
        }
    },
    locationHistoryIcon: {
        width: 49,
        height: 49,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #e4e4e4',
        backgroundColor: theme.textColor.bg,
        borderRadius: 7,
        marginRight: 15,
        '&>svg': {
            fontSize: 20,
            color: '#a1a1a1'
        }
    },
    locationOfferContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: 4,
        '&>p': {
            fontSize: 14,
            fontFamily: theme.font.medium,
            marginBottom: 12
        }
    },
    locationOfferItemContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: '100%'
    },
    selectedCity: {
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            border: '1px solid #909090',
            borderRadius: 10,
            width: 'calc(100% - 3px)',
            height: 'calc(100% - 3px)',
        }
    },
    locationOfferItem: {
        border: '1px solid #909090',
        borderRadius: 12,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 23px',
        cursor: 'pointer',
        marginRight: 8,
        marginBottom: 16,
        '&>p': {
            color: theme.textColor.primary,
            fontSize: 13,
        }
    },
    deleteDate: {
        width: 24,
        maxWidth: 24,
        minWidth: 24,
        height: 24,
        padding: 0,
        borderRadius: '50%',
        position: 'absolute',
        top: 20,
        right: 15,
        backgroundColor: 'rgb(235, 235, 235) !important',
        '& svg': {
            fontSize: 12
        }
    },
    roomContainer: {
        width: '100%',

    },
    roomNumber: {
        width: '100%',
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid ' + theme.textColor.border,
        position: 'relative',
        '&>p': {
            fontSize: 14,
            fontFamily: theme.font.bold,

        }
    },
    removeRoom: {
        position: 'absolute !important',
        right: '25px !important',
        width: '35px !important',
        minWidth: '35px !important',
        maxWidth: '35px !important',
        height: '35px !important',
        borderRadius: '50% !important',
        // border: '1px solid ' + theme.textColor.primary,
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        backgroundColor: '#f2f2f2 !important',
        '& svg': {
            fontSize: '17px !important',
            color: theme.textColor.primary + ' !important'
        }
    },
    roomPeopleCount: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 55,
        padding: '0 25px',
        position: 'relative',
        '&:after': {
            position: 'absolute',
            content: '""',
            width: '80%',
            height: 1,
            backgroundColor: theme.textColor.border,
            bottom: 0,
            right: '50%',
            transform: 'translateX(50%)'
        },
        '&:last-child': {
            '&:after': {
                position: 'absolute',
                content: '""',
                width: '100%',
                height: 1,
                backgroundColor: theme.textColor.border,
                bottom: 0,
                right: '50%',
                transform: 'translateX(50%)'
            },
        }

    },
    roomPeopleInfo: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '&>p': {
            fontSize: 13,
            color: theme.textColor.secondary,
            '&:nth-child(1)': {
                fontFamily: theme.font.bold,
                color: theme.textColor.primary
            }
        }
    },
    roomPeopleControl: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>button': {
            width: 35,
            minWidth: 35,
            maxWidth: 35,
            height: 35,
            borderRadius: '50%',
            border: '1px solid ' + theme.textColor.border,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
                fontSize: 17,
                color: theme.textColor.disabled
            }
        },
        '&>p': {
            fontSize: 13,
            color: theme.textColor.primary,
            margin: '0 12px',
            fontFamily: theme.font.bold,

        }
    },
    addRoomContainer: {
        width: '100%',
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>button': {
            width: 35,
            minWidth: 35,
            maxWidth: 35,
            height: 35,
            borderRadius: '50%',
            border: '1px solid ' + theme.textColor.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
            '& svg': {
                fontSize: 17,
                color: theme.textColor.primary
            }
        },
    },
    searchbarPlaceholder: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px 0 24px',
        cursor: 'pointer',
        '&>p': {
            fontSize: 13,
            '&>span':{
                color:'#b3adad'
            }
        },
        '&>div': {
            width: 32,
            marginLeft:30,
            height: 32,
            borderRadius: '50%',
            backgroundColor: '#ff5a5f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&>svg': {
                color: '#fff',
                transform: 'scaleX(-1)'
            }

        }
    },
    emptyPlaceholder:{
        minWidth:250,
    }

}));