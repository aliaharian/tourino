import { Button, Grid, Typography } from '@material-ui/core';
import useStyles from './Style'
import { dateTime } from '../../utilities';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
const TransportItem = (props) => {
    const classes = useStyles();
    const unixToPersian = (unix) => dateTime.dateTimeCustom(unix)

    const customDate = (date) => {
        return unixToPersian(date).weekDay + ' ' + unixToPersian(date).year + '/' + unixToPersian(date).monthNum + '/' + unixToPersian(date).day
        // + ' | ' + unixToPersian(date).hour + ':' + unixToPersian(date).minute
    }
    return (
        <Grid sx={12} sm={12} md={6} lg={6} xl={6} className={classes.transportItemParent}>
            <div className={classes.transportItem}>
                <div className={classes.transportHeader}>
                    <Typography>
                        <span>

                            {props.type === 'start' ? `بلیت رفت` : `بلیت برگشت`}
                            &nbsp;
                                :
                        </span>
                        <span>
                            &nbsp;
                             {customDate(props.transport.date)}
                        </span>
                    </Typography>
                    <Typography>
                        سفر با {props.transport.type}
                    </Typography>
                    <Button className={classes.changeTransportBtn}>تغییر بلیت</Button>
                </div>
                <div className={classes.transportBody}>
                    <div className={classes.transportLogo}>
                        <DirectionsBusIcon />
                    </div>
                    <div className={classes.transportTime}>
                        <div>
                            <Typography>{unixToPersian(props.transport.startTime).hour + ':' + unixToPersian(props.transport.startTime).minute}</Typography>
                            <div></div>
                            <Typography noWrap>{props.type === 'start' ? props.origin.name : props.dest.name}</Typography>
                        </div>
                        <div></div>
                        <div>
                            <Typography>{unixToPersian(props.transport.endTime).hour + ':' + unixToPersian(props.transport.endTime).minute}</Typography>
                            <div></div>
                            <Typography noWrap>{props.type === 'start' ? props.dest.name : props.origin.name}</Typography>
                        </div>
                    </div>
                    <div className={classes.transportName}>
                        سفر با {props.transport.name}
                    </div>
                </div>

            </div>
        </Grid>
    )
}

export default TransportItem;