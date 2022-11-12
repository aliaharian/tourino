import { Button, Grid, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import useStyles from './Style'
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import img from '../../assets/img/landscapeTour.png'
import AppsIcon from '@material-ui/icons/Apps';
import { useEffect, useState } from 'react';
import RoomItem from './RoomItem';
import TransportItem from './TransportItem';
import FacilityItem from './FacilityItem';
const roomsData=[
    {
        name:'اتاق اول',
        type:'لوکس',
        capacity:3
    },
    {
        name:'اتاق اول',
        type:'لوکس',
        capacity:3
    },
    {
        name:'اتاق اول',
        type:'لوکس',
        capacity:3
    },
    {
        name:'اتاق اول',
        type:'لوکس',
        capacity:3
    }
]
const transportStart={
    name: 'اتوبوس vip',
    date: 1614409433,
    startTime:1614409433,
    endTime:1614409633,
    type:'اتوبوس'
}
const transportEnd={
    name: 'اتوبوس vip',
    date: 1614409433,
    startTime:1614409433,
    endTime:1614409633,
    type:'اتوبوس'
}
const facilities = [
    `نمازخانه`,
    `دستشویی`,
    `عکاسی`,
    `نمازخانه`,
    `دستشویی`,
    `عکاسی`,
    `نمازخانه`,
    `دستشویی`,
    `عکاسی`,
   
    
] 
  
  

const HotelDetail = ({ hotel, query ,origin,dest}) => {

    const classes = useStyles();
    const [rooms, setRooms] = useState([
        {
            adult: 1,
            child: 0,
            infant: 0
        }
    ]);
    const [adults, setAdults] = useState(1);
    const [infants, setInfants] = useState(0);

    useEffect(() => {
        if (query.rooms) {
            let tmp = query.rooms
            let roomsArray = []
            let adultsTmp = 0
            let infantsTmp = 0

            tmp = tmp.split(',')
            tmp.map((item) => {
                let singleRoom = item.split('_')
                adultsTmp = parseInt(adultsTmp) + parseInt(singleRoom[0]) + parseInt(singleRoom[1])
                infantsTmp = parseInt(infantsTmp) + parseInt(singleRoom[2])
                if (
                    (singleRoom[0] > 5) ||
                    (singleRoom[1] > 5) ||
                    (singleRoom[2] > 5)
                    // ((parseInt(singleRoom[0]) + parseInt(singleRoom[1]) + parseInt(singleRoom[2])) < 2)
                ) {
                    Router.push('/', undefined, { shallow: true })
                    Dispatch(enqueueSnackbar(
                        {
                            message: 'پارامتر های ارسالی صحیح نیست',
                            options: {
                                variant: 'error'
                            }
                        }))
                    flag = false;

                    return;
                }
                roomsArray.push({
                    adult: singleRoom[0],
                    child: singleRoom[1],
                    infant: singleRoom[2]
                })
            })

            if (adultsTmp + infantsTmp > 10 || adultsTmp + infantsTmp < 2) {
                Router.push('/', undefined, { shallow: true })
                Dispatch(enqueueSnackbar(
                    {
                        message: 'پارامتر های ارسالی صحیح نیست',
                        options: {
                            variant: 'error'
                        }
                    }))
                flag = false;

                return;
            }

            setRooms(roomsArray)
            setAdults(adultsTmp)
            setInfants(infantsTmp)

        }
    }, [query])
    return (
        <div className={classes.container}>
            <div className={classes.hotelSection}>

                <div className={classes.hotelName}>
                    <Typography>{hotel.name}</Typography>
                </div>
                <div className={classes.hotelInfo}>
                    <div>
                        <div>
                            <Star />
                            <Typography>{hotel.star}</Typography>
                        </div>
                        <Typography>{hotel.cityName}</Typography>
                        <Typography className={classes.hotelAddress}>{hotel.address}</Typography>
                    </div>
                    <div>
                        <ShareIcon />
                        <BookmarkBorderIcon />
                    </div>
                </div>

                <div className={classes.hotelImages}>
                    <div><img src={img} /></div>
                    <div>
                        <div><img src={img} /></div>
                        <div><img src={img} /></div>
                        <div><img src={img} /></div>
                        <div><img src={img} /></div>
                    </div>
                    <Button className={classes.ImageFloatBtn}>
                        <AppsIcon />
                        <Typography>نمایش همه تصاویر </Typography>
                    </Button>
                </div>
                <div className={classes.aboutHotel}>
                    <Typography>درباره هتل</Typography>
                    <Typography>{hotel.description}</Typography>
                </div>
            </div>
            <div className={classes.roomsSection}>
                <Typography className={classes.roomsTitle}>مشخصات اتاق
                    <span>
                        {`${adults + infants} نفر - ${Math.floor((query.endDate - query.startDate) / 86400)} شب `}
                    </span>
                </Typography>
                <Grid container className={classes.roomItemContainer}>
                    {roomsData.map((room)=>(
                        <RoomItem capacity={room.capacity} type={room.type} name={room.name} />
                    ))}

                </Grid>
            </div>
            <div className={classes.transportSection}>
                <Typography className={classes.transportTitle}>بلیط رفت و برگشت
                
                </Typography>
                <Grid container className={classes.transportItemContainer}>
                        <TransportItem transport={transportStart} type='start' origin={origin} dest={dest}/>
                        <TransportItem transport={transportEnd} type='end' origin={origin} dest={dest}/>
                </Grid>
            </div>
            <div className={classes.facilitySection}>
                <Typography className={classes.facilityTitle}>امکانات رفاهی تور
                
                </Typography>
                <Grid container className={classes.transportItemContainer}>
                {facilities.map((facility)=>(
                        <FacilityItem facility={facility}/>
                        ))}
                </Grid>
            </div>
        </div>
    )
}

export default HotelDetail