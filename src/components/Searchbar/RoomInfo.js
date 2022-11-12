import { Button, Typography } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { numberFormat } from "../../utilities";
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './Style'
const RoomInfo = (
    {
        roomCount,
        handleChange,
        handleRemove,
        roomInfo,
        roomNumber
    }
) => {
    const classes = useStyles()
    return (
        <div className={classes.roomContainer} style={roomCount<2 ? {paddingTop:20}:{}}>
            {roomCount>1 && <div className={classes.roomNumber}>
                <Typography>اتاق {numberFormat.toPersianDigits(roomNumber)}</Typography>
                <Button onClick={handleRemove} className={classes.removeRoom}><CloseIcon /></Button>
            </div>}

            <div className={classes.roomPeopleCount}>
                <div className={classes.roomPeopleInfo}>
                    <Typography>بزرگسال</Typography>
                    <Typography>بالای ۱۲ سال</Typography>
                </div>
                <div className={classes.roomPeopleControl}>
                    <Button onClick={()=>{handleChange('adult',parseInt(roomInfo.adult)+1)}}><AddIcon /></Button>
                    <Typography>{roomInfo.adult}</Typography>
                    <Button onClick={()=>{handleChange('adult',parseInt(roomInfo.adult)-1)}}><RemoveIcon /></Button>
                </div>
            </div>
            <div className={classes.roomPeopleCount}>
                <div className={classes.roomPeopleInfo}>
                    <Typography>کودک</Typography>
                    <Typography>۲ تا ۱۲ سال</Typography>
                </div>
                <div className={classes.roomPeopleControl}>
                    <Button onClick={()=>{handleChange('child',parseInt(roomInfo.child)+1)}}><AddIcon /></Button>
                    <Typography>{roomInfo.child}</Typography>
                    <Button onClick={()=>{handleChange('child',parseInt(roomInfo.child)-1)}}><RemoveIcon /></Button>
                </div>
            </div>
            <div className={classes.roomPeopleCount}>
                <div className={classes.roomPeopleInfo}>
                    <Typography>نوزاد</Typography>
                    <Typography>زیر ۲ سال</Typography>
                </div>
                <div className={classes.roomPeopleControl}>
                    <Button onClick={()=>{handleChange('infant',parseInt(roomInfo.infant)+1)}}><AddIcon /></Button>
                    <Typography>{roomInfo.infant}</Typography>
                    <Button onClick={()=>{handleChange('infant',parseInt(roomInfo.infant)-1)}}><RemoveIcon /></Button>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo