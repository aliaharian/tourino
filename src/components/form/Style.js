import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
    inputRoot: {

        width: '100%',
        height: 48,
        '& .Mui-focused': {
            border: '1px solid ' + theme.textColor.primary,
        },
        '&>div': {
            height: '100%',
            padding: '0 15px',
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
        },
        '& input': {

        }
    },
    label: {
        color: theme.textColor.primary,
        fontSize: 13,
        marginBottom: 7,
        paddingLeft: 5
    },
    ltr: {
        direction: 'rtl',
        textAlign: 'right'
    },
    required: {
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: theme.textColor.error
        }
    },
    error: {
        '&>div': {
            border: '1px solid ' + theme.textColor.error + ' !important',
        },
    }
    ,
    codeInputContainer: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row-reverse',
        width:'100%',
        maxWidth:'300px',
        margin:'0 auto',
    },
     codeInputRoot: {
        width: '48px',
        height: 48,
        '& .Mui-focused': {
            border: '1px solid ' + theme.textColor.primary,
        },
        '&>div': {
            height: '100%',
            padding: '0 15px',
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 8,
        },
        '& input': {    
            textAlign:'center'

        }
    },

}));
