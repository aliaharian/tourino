import { Grid, Typography } from '@material-ui/core'
import useStyles from './Style'
import hotelImg from '../../assets/img/hotel.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsList } from '../../../redux/hotel/Actions'
import { BASE_URL } from '../../constant'
const HotelsSection = () => {
    const classes = useStyles()
    const Dispatch = useDispatch()
    const hotels = useSelector((state) => state.hotel.featuredHotelsList);
    useEffect(() => {
        !hotels && Dispatch(getHotelsList())
    }, [hotels])
    console.log(hotels)
    
    return (
        <Grid container className={classes.hotelsSection}>


            {
                (hotels && hotels.content?.length > 0) && hotels.content.map((hotel, index) => (
                    <Grid lg={3} md={4} sm={6} xs={12} className={classes.hotelItem}>
                        <div className={classes.hotelImg}>
                            <img src={hotel.files.length>0 ?`${BASE_URL}/files/bytes/${hotel.files[0].uuid}`:hotelImg} />
                        </div>
                        <div className={classes.hotelName}>
                            <Typography>{hotel.name}</Typography>
                            <Typography>{hotel.cityName}</Typography>
                        </div>
                    </Grid>
                ))

            }

        </Grid>
    )
}

export default HotelsSection