import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    dialog: {
        '& .MuiDialog-paper': {
            width: 649,
            maxWidth:'649px !important',
            height: 292,
            borderRadius:20
        }
    },
    root: {
        margin: 0,
        padding: 23,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: '40px',
        borderBottom:'none !important',
        flex:'unset !important',
        '&>p':{
            color:theme.textColor.secondary,
            fontSize:16
        }
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        '& button':{
            width:'157px !important',
            height:'42px !important',
            borderRadius:'41px !important',
            border:'1px solid '+theme.textColor.secondary+' !important',
            color:theme.textColor.primary +' !important'
        }
    },
}))(MuiDialogActions);


const TimeoutModal = withStyles(styles)(({ open, classes }) => {


    const handleClose = () => {
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.dialog}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                پایان زمان جستجو
        </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    مدت زمان اعتبار نتایج جستجو به اتمام رسید.
<br />
به منظور بروزرسانی قیمت ها و تور ها، لطفا جستجوی خود را از ابتدا انجام دهید.
          </Typography>

            </DialogContent>
            <DialogActions>
                <Button disableRipple autoFocus onClick={() => {
                    window.location.reload();
                }} color="primary">
                    جستجوی مجدد
          </Button>
            </DialogActions>
        </Dialog>
    )
})

export default TimeoutModal;