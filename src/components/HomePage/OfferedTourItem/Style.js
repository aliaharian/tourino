import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
    tourItem: {
        width: '100%',
        height: 298,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        boxShadow: '0px 3px 12px rgba(0,0,0,0.16)',
        borderRadius: 20,
        overflow: 'hidden'
    },
    imageContainer: {
        flex: 1,
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat'
    },
    dataContainer: {
        flex: 1.5,
        padding: 30,
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
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        '&>div': {
            flex: 1,
            '&:nth-child(1)':{
                borderRight:'1px solid '+theme.textColor.border,
                paddingRight:10,

            },
            '&:nth-child(2)':{
                paddingLeft:20
            },
            '&>p': {
                '&:nth-child(1)': {
                    fontFamily: theme.font.regular,
                    fontSize: 13,
                    color: theme.textColor.secondary,
                    lineHeight:'22px'
                },
                '&:nth-child(2)': {
                    fontFamily: theme.font.medium,
                    fontSize: 16,
                    color: theme.textColor.primary,
                    lineHeight:'25px'

                },
                '&:nth-child(3)': {
                    fontFamily: theme.font.regular,
                    fontSize: 13,
                    color: theme.textColor.secondary,
                    lineHeight:'22px'

                }
            }
        }

    },
    tourActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        '&>div':{
            fontSize:13,
            color:theme.textColor.primary,
            '&>button':{
                width:'100px !important',
                height:'39px !important',
                border:'1px solid '+theme.textColor.border+' !important',
                color:theme.textColor.secondary+' !important',
                borderRadius:'19px !important',
                // backgroundColor:'#fff !important',
                fontSize:'13px !important'

            }
        }
    }
}));
