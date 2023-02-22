import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const styles = (theme) => ({
    dialog: {
        '& .MuiDialog-paper': {
            width: 649,
            maxWidth: '649px !important',
            height: 'auto',
            borderRadius: 20,
            paddingBottom: 82,
        }
    },
    dialogTitle:{
       
        '& h6':{
             display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        '& svg':{
            cursor:"pointer"
        }
        }
    },
    root: {
        margin: 0,
        padding: 23,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        borderBottom: 'none !important',
        flex: 'unset !important',
        '&>p': {
            color: theme.textColor.secondary,
            fontSize: 16
        }
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '40px',
        right: '0',
        width: '100%',
        '& button': {
            width: '157px !important',
            height: '42px !important',
            borderRadius: '41px !important',
            border: '1px solid ' + theme.textColor.secondary + ' !important',
            color: theme.textColor.primary + ' !important'
        }
    },
}))(MuiDialogActions);


const DialogLayout = withStyles(styles)(({
    open,
    classes,
    title,
    children,
    onClose,
    onSubmit,
    submitText,
    loading
}) => {

    return (
        <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open} className={classes.dialog}>
            <DialogTitle id="customized-dialog-title" className={classes.dialogTitle} onClose={onClose}>
                {title}
                <Close onClick={onClose}/>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                <Button disableRipple autoFocus onClick={onSubmit} color="primary">
                    {loading ? <CircularProgress size={20}/> : submitText || `تایید`}
                </Button>
            </DialogActions>
        </Dialog>
    )
})

export default DialogLayout;