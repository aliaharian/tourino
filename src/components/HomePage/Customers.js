import { Button, Grid, Link, MenuItem, Select, Typography } from '@material-ui/core'
import useStyles from './Style'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Controller } from 'swiper';

import { useEffect, useState } from 'react';
import OfferedTourItem from './OfferedTourItem/OfferedTourItem';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import iranAir from '../../assets/icon/iranAir.svg'
import asemanAir from '../../assets/icon/airline/Asemanairline-logo.svg'
import kaspian from '../../assets/icon/airline/Kaspian-Airline-logo.svg'
import mahan from '../../assets/icon/airline/Mahan-Airline-logo.svg'
import naftAir from '../../assets/icon/airline/Naftair-logo.svg'
import qeshmAir from '../../assets/icon/airline/Qeshmair-logo.svg'
import tabanAir from '../../assets/icon/airline/Taban-Airline-logo.svg'
import kishAir from '../../assets/icon/airline/Kishair-logo.svg'
import ataAir from '../../assets/icon/airline/Ata-Airline.png'
import atrak from '../../assets/icon/airline/Atrakair-Airline-logo.png'
import iranAirTour from '../../assets/icon/airline/Iranairtour-logo.png'
import merajAir from '../../assets/icon/airline/Meraj-Airline-logo.png'


const Customers = () => {
    const classes = useStyles()

    SwiperCore.use([Controller]);

    const [swiper, setSwiper] = useState()
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(true)
    const [openCityFilter, setOpenCityFilter] = useState(false)
    const [selectedCity, setSelectedCity] = useState('tehran')
    const [openTimeFilter, setOpenTimeFilter] = useState(false)
    const [selectedTime, setSelectedTime] = useState('weekEnd')

    const slideNext = () => swiper.slideNext();
    const slidePrev = () => swiper.slidePrev();

    const customers = [
        {
            img: iranAir,
        },
        // {
        //     img: asemanAir,
        // },
        {
            img: kaspian,
        },
        {
            img: mahan,
        },
        {
            img: naftAir,
        },
        {
            img: qeshmAir,
        },
        {
            img: tabanAir,
        },
        {
            img: kishAir,
        },

        {
            img: ataAir,
        },
        {
            img: atrak,
        },
        {
            img: iranAirTour,
        },
        {
            img: merajAir,
        },

       
    ]

    return (
        <Grid className={classes.FaqSection}>
            <Typography className={classes.landscapeTourTitle}>همکاران ما</Typography>

            <Grid container className={classes.customersCarousel}>
                <Button className={classes.customerNavBtn} style={isBeginning ? { visibility: 'hidden' } : {}} onClick={() => { slidePrev() }}><ChevronRightIcon /></Button>

                <Swiper
                    spaceBetween={28}
                    slidesPerView={2}
                    controller={{ control: swiper }}
                    onSlideChange={(e) => {
                        // console.log(e)
                        // console.log('isEnd' , e['isEnd'])
                        setTimeout(() => {
                            setIsEnd(e.isEnd)
                            setIsBeginning(e.isBeginning)
                        }, 100);

                    }}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 28
                        },
                        // // when window width is >= 480px
                        480: {
                            slidesPerView: 4,
                            spaceBetween: 28
                        },
                        // when window width is >= 640px
                        800: {
                            slidesPerView: 5,
                            spaceBetween: 28
                        },
                        1200: {
                            slidesPerView: 7,
                            spaceBetween: 28
                        },

                    }
                    }
                    onSwiper={(e) => {
                        setSwiper(e)
                        setTimeout(() => {
                            setIsEnd(e.isEnd)
                            setIsBeginning(e.isBeginning)
                        }, 100);
                    }}
                >
                    {customers.map((customer, index) => (
                        <SwiperSlide key={index}>
                            <img className={classes.customersIcon} src={customer.img} />
                        </SwiperSlide>
                    ))}


                </Swiper>

                <Button style={isEnd ? { visibility: 'hidden' } : {}} className={classes.customerNavBtn} onClick={() => { slideNext() }}><ChevronLeftIcon /></Button>

            </Grid>


        </Grid>
    )
}


export default Customers