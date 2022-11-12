import { Button, Grid, Link, MenuItem, Select, Typography } from '@material-ui/core'
import useStyles from './Style'
import img from '../../assets/img/landscapeTour.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Controller } from 'swiper';

import { useEffect, useState } from 'react';
import OfferedTourItem from './OfferedTourItem/OfferedTourItem';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import hotelImg from '../../assets/img/hotelFeatured.png'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FilterSelect from '../form/FilterSelect';
const OfferedToursSection = () => {
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

    const tours = [
        {
            img: hotelImg,
            name: 'هتل الماس',
            star: 5,
            destnation: 'مشهد',
            price: 5400000,
            transfer: [
                {
                    name: 'اتوبوس vip',
                    time: 1614409433,
                },
                {
                    name: 'قطار',
                    time: 1614709533,
                }
            ]
        },
        {
            img: hotelImg,
            name: 'هتل قصر طلایی',
            star: 5,
            destnation: 'مشهد',
            price: 5400000,
            transfer: [
                {
                    name: 'اتوبوس vip',
                    time: 1614409433,
                },
                {
                    name: 'قطار',
                    time: 1614909433,
                }
            ]
        },
        {
            img: hotelImg,
            name: 'هتل الماس',
            star: 5,
            destnation: 'مشهد',
            price: 5400000,
            transfer: [
                {
                    name: 'اتوبوس vip',
                    time: 1614409433,
                },
                {
                    name: 'قطار',
                    time: 1614909433,
                }
            ]
        },
        {
            img: hotelImg,
            name: 'هتل الماس',
            star: 5,
            destnation: 'مشهد',
            price: 5400000,
            transfer: [
                {
                    name: 'اتوبوس vip',
                    time: 1614409433,
                },
                {
                    name: 'قطار',
                    time: 1614909433,
                }
            ]
        }

    ]

    return (
        <Grid className={classes.offeredToursSection}>
            <Typography className={classes.landscapeTourTitle}>تور های پیشنهادی</Typography>
            <div className={classes.tourFilterContainer}>

                <FilterSelect
                    open={openCityFilter}
                    handleOpen={() => setOpenCityFilter(true)}
                    handleClose={() => setOpenCityFilter(false)}
                    value={selectedCity}
                    handleChange={(e) => { setSelectedCity(e.target.value) }}
                    label={``}
                    datas={[
                        {
                            label: `تهران`,
                            value: `tehran`
                        },
                        {
                            label: `مشهد`,
                            value: `mashhad`
                        },
                        {
                            label: `کیش`,
                            value: `kish`
                        },

                    ]}
                />

                <FilterSelect
                    open={openTimeFilter}
                    handleOpen={() => setOpenTimeFilter(true)}
                    handleClose={() => setOpenTimeFilter(false)}
                    value={selectedTime}
                    handleChange={(e) => { setSelectedTime(e.target.value) }}
                    label={``}
                    datas={[
                        {
                            label: `تعطیلات آخر هفته`,
                            value: `weekEnd`
                        },
                       

                    ]}
                />
            </div>
            <Grid container className={classes.offeredToursCarousel}>
                <Button className={classes.tourNavBtn} style={isBeginning ? { visibility: 'hidden' } : {}} onClick={() => { slidePrev() }}><ChevronRightIcon /></Button>

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
                            slidesPerView: 1,
                            spaceBetween: 28
                        },
                        // // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 28
                        },
                        // when window width is >= 640px
                        800: {
                            slidesPerView: 1,
                            spaceBetween: 28
                        },
                        1200: {
                            slidesPerView: 2,
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
                    {tours.map((tour, index) => (
                        <SwiperSlide>
                            <OfferedTourItem key={index} data={tour} />
                        </SwiperSlide>
                    ))}


                </Swiper>

                <Button style={isEnd ? { visibility: 'hidden' } : {}} className={classes.tourNavBtn} onClick={() => { slideNext() }}><ChevronLeftIcon /></Button>

            </Grid>


        </Grid>
    )
}


export default OfferedToursSection