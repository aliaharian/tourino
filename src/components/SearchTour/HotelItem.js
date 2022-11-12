import { Button, Typography } from '@material-ui/core'
import useStyles from './Style'
import StarRateIcon from '@material-ui/icons/StarRate'
import { dateTime, numberFormat } from '../../utilities'


const HotelItem = ({ data }) => {
    const classes = useStyles()
    const unixToPersian = (unix) => dateTime.dateTimeCustom(unix)
    const customDate = (date) => {
        return unixToPersian(date).weekDay + ' ' + unixToPersian(date).year + '/' + unixToPersian(date).monthNum + '/' + unixToPersian(date).day + ' | ' + unixToPersian(date).hour + ':' + unixToPersian(date).minute
    }
    return (
        <div className={classes.tourItem}>
            <div className={classes.imageContainer} style={{ backgroundImage: `url(${data.img})` }}>
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
                        <Typography>{`${Math.floor((data.transfer[1].time - data.transfer[0].time) / 86400) + 1} شب و ${Math.floor((data.transfer[1].time - data.transfer[0].time) / 86400)} روز`}</Typography>

                    </div>
                    <div>
                        <Typography>{numberFormat.toPersianSeprateTomanCommas(data.price)}</Typography>
                        <Typography>تومان</Typography>
                    </div>

                </div>
                <div className={classes.tourTransfer}>
                    <div>
                        <Typography>رفت</Typography>
                        <Typography style={{maxWidth:120}} noWrap>{data.transfer[0].name}</Typography>
                        <Typography noWrap>{data.transfer[0].departDate+' - '+data.transfer[0].departTime}</Typography>
                    </div>
                    <div>
                        <Typography>برگشت</Typography>
                        <Typography style={{maxWidth:120}} noWrap>{data.transfer[1].name}</Typography>
                        <Typography noWrap>{data.transfer[1].departDate+' - '+data.transfer[1].departTime}</Typography>
                    </div>
                    <div className={classes.tourActions}>
                        <div><Button>جزئیات تور</Button></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HotelItem;