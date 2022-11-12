import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
    searchTourContainer: {
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
    FilterContainer: {
        paddingRight: 40,
        [theme.breakpoints.down(1445)]: {
            paddingRight: 16,
        },
        '&>div': {
            width: '100%',
            height: 'auto',
            padding: '0 40px',
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 20,
            position:'sticky',
            top:105
        }
    },
    hotelsList: {
        paddingLeft: 40,
        [theme.breakpoints.down(1445)]: {
            paddingLeft: 16,
        },
        paddingTop: 12,
    },
    sortSection: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& p': {
            fontSize: 13,
            color: theme.textColor.primary
        }
    },
    sortButtons: {
        '& .MuiButton-root': {
            height: '39px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            border: '1px solid ' + theme.textColor.border,
            color: theme.textColor.secondary,
            marginLeft: 13,
            fontSize: 13,
            padding: '9px 11px'

        }
    },
    sortSelected: {
        border: '1px solid ' + theme.textColor.primary + ' !important',
        color: theme.textColor.primary + ' !important',
    },
    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: theme.textColor.border,
        marginTop: '33px'

    },
    tourItem: {
        width: '100%',
        height: 268,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '33px 0',
        // boxShadow: '0px 3px 12px rgba(0,0,0,0.16)',
        // borderRadius: 20,
        overflow: 'hidden',
        borderBottom: '1px solid ' + theme.textColor.border,
    },
    imageContainer: {
        flex: 1,
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 8,
    },
    dataContainer: {
        flex: 1.5,
        paddingLeft: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
    },
    tourBaseInfo: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        '&>div': {
            '&:nth-child(1)': {
                '&>p': {
                    '&:nth-child(1)': {
                        fontFamily: theme.font.bold,
                        color: theme.textColor.primary,
                        marginBottom: 2,
                    },
                    '&:nth-child(2)': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginBottom: 2,
                        fontFamily: theme.font.medium,
                        color: theme.textColor.primary,
                        fontSize: 13,
                        lineHeight: '20px',
                        '&>svg': {
                            color: '#fe5f55',
                            fontSize: 20,
                        },
                    },
                    '&:nth-child(3)': {
                        fontFamily: theme.font.regular,
                        color: theme.textColor.secondary,
                        fontSize: 13,
                    },
                    '&:nth-child(4)': {
                        fontFamily: theme.font.regular,
                        color: theme.textColor.primary,
                        fontSize: 13,
                    },

                }
            },
            '&:nth-child(2)': {
                '&>p': {
                    color: '#fe5f55',
                    textAlign: 'right',
                    '&:nth-child(1)': {
                        fontFamily: theme.font.bold,
                        marginBottom: 2,
                    },
                    '&:nth-child(2)': {
                        fontFamily: theme.font.regular,
                        fontSize: 13,
                    },

                }
            },
        }
    },
    tourTransfer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: '100%',
        '&>div': {
            flex: 1,
            '&:nth-child(1)': {
                borderRight: '1px solid ' + theme.textColor.border,
                paddingRight: 10,
            },
            '&:nth-child(2)': {
                paddingLeft: 20
            },
            '&>p': {
                '&:nth-child(1)': {
                    fontFamily: theme.font.regular,
                    fontSize: 13,
                    color: theme.textColor.secondary,
                    lineHeight: '22px'
                },
                '&:nth-child(2)': {
                    fontFamily: theme.font.medium,
                    fontSize: 16,
                    color: theme.textColor.primary,
                    lineHeight: '25px'

                },
                '&:nth-child(3)': {
                    fontFamily: theme.font.regular,
                    fontSize: 13,
                    color: theme.textColor.secondary,
                    lineHeight: '22px'

                }
            }
        }

    },
    tourActions: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        '&>div': {
            fontSize: 13,
            color: theme.textColor.primary,
            '&>button': {
                width: '100px !important',
                height: '39px !important',
                border: '1px solid ' + theme.textColor.border + ' !important',
                color: theme.textColor.secondary + ' !important',
                borderRadius: '19px !important',
                // backgroundColor:'#fff !important',
                fontSize: '13px !important'

            }
        }
    },
    sidebarContainer: {
        '&>div:last-child': {
            '&:after': {
                display: 'none',
            }
        }
    },
    sidebarItem: {
        padding: '37px 0',
        position: 'relative',
        '&:after': {
            content: '""',
            backgroundColor: theme.textColor.border,
            width: 'calc(100% + 80px)',
            height: 1,
            bottom: 0,
            position: 'absolute',
            right: -40,
        },
        '&>p': {
            fontSize: 15,
            color: theme.textColor.primary,
            marginBottom: 33,
        }
    },
    starSlider: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        '&:after': {
            content: '""',
            backgroundColor: theme.textColor.border,
            width: '100%',
            height: 3,
            top: '17%',
            position: 'absolute',
            zIndex: -1,
            borderRadius: 20,
        },
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            cursor: 'pointer',
            '&>div': {
                width: 12,
                height: 12,
                borderRadius: 12,
                backgroundColor: theme.textColor.border,
                marginBottom: 5,
            },
            '&>p': {
                fontSize: 13,
                color: theme.textColor.primary
            }
        },
    },
    activeStar: {
        '&>div': {
            width: '16px !important',
            height: '16px !important',
            borderRadius: '14px !important',
            backgroundColor: '#fff !important',
            border: '1px solid #3d6b92',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3px !important',
            '&:after': {
                content: '""',
                backgroundColor: '#3d6b92',
                width: '10px',
                height: 10,
                borderRadius: 12,
                position: 'absolute',
            }
        },
        '&>p': {
            fontSize: 13,
            color: theme.textColor.primary
        }
    },
    hotelTypeContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        '& span': {
            fontSize: 13,
            color: theme.textColor.primary
        }
    },

    priceText:{
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>p':{
            fontSize:13,
            color:theme.textColor.primary,
            '&:nth-child(2)':{
                textAlign:'right'
            }
        }
    },
    noResult:{
        width:'100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        marginTop:40,
        '& img':{
            marginBottom:15
        }
    }
}));