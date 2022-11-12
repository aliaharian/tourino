import { Button, Grid, Typography } from '@material-ui/core';
import useStyles from './Style'
import SingleBedIcon from '@material-ui/icons/SingleBed';
const RoomItem = (props) => {
    const classes = useStyles();


    return (
        <Grid sx={12} sm={6} md={4} lg={3} xl={3} className={classes.roomItemParent}>
            <div className={classes.roomItem}>
                <div className={classes.roomIcon}>
                    <SingleBedIcon />
                </div>
                <div className={classes.roomName}>
                    <Typography>{props.name}</Typography>
                </div>
                <div className={classes.roomType}>
                    <Typography>
                        {props.type} با ظرفیت {props.capacity} نفر
                </Typography>
                    <Button className={classes.changeRoomBtn}>تغییر اتاق</Button>
                </div>
            </div>
        </Grid>
    )
}

export default RoomItem;