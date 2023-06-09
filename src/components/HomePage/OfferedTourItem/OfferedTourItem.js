import { Button, Typography } from '@material-ui/core'
import useStyles from './Style'
import StarRateIcon from '@material-ui/icons/StarRate'
import dateTime from '../../../utilities/dateTime'
import numberFormat from '../../../utilities/numberFormat'
const OfferedTourItem = ({ data }) => {
    const classes = useStyles()
    const unixToPersian = (unix) => dateTime.dateTimeCustom(unix)
    const customDate=(date)=>{
        return unixToPersian(date).weekDay+' '+unixToPersian(date).year+'/'+unixToPersian(date).monthNum+'/'+unixToPersian(date).day+' | '+unixToPersian(date).hour+':'+unixToPersian(date).minute
    }
    return (
        <div className={classes.tourItem}>
            <div className={classes.imageContainer} style={{backgroundImage:`url(${data.img})`}}>
                {/* <img src={data.img}/> */}
            </div>

            <div className={classes.dataContainer}>
                <div className={classes.tourBaseInfo}>
                    <div>
                        <Typography>{data.name}</Typography>
                        <Typography>
                            <StarRateIcon />
                            {data.star}
                        </Typography>
                        <Typography>{data.destnation}</Typography>
                    </div>
                    <div>
                        <Typography>{numberFormat.toPersianSeprateTomanCommas(data.price)}</Typography>
                        <Typography>تومان</Typography>
                    </div>

                </div>
                <div className={classes.tourTransfer}>
                    <div>
                        <Typography>رفت</Typography>
                        <Typography>{data.transfer[0].name}</Typography>
                        <Typography noWrap>{customDate(data.transfer[0].time)}</Typography>
                    </div>
                    <div>
                        <Typography>برگشت</Typography>
                        <Typography>{data.transfer[1].name}</Typography>
                        <Typography noWrap>{customDate(data.transfer[1].time)}</Typography>
                    </div>

                </div>
                <div className={classes.tourActions}>
                    <div>{`${data.days} شب و ${data.nights} روز` }</div>
                    <div><Button>جزئیات تور</Button></div>
                </div>
            </div>
        </div>
    )

}

export default OfferedTourItem