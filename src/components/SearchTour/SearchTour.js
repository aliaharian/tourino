import { Button, Divider, Grid, Link, Slider, Typography, withStyles } from "@material-ui/core"
import clsx from "clsx";
import { useEffect, useState } from "react";
import HotelItem from "./HotelItem";
import useStyles from './Style'
import hotelImg from '../../assets/img/hotelFeatured.png'
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getHotelTypes } from "../../../redux/hotel";
import { useRouter } from "next/dist/client/router";
import { enqueueSnackbar, setLoading } from "../../../redux/user";
import TimeoutModal from "./TimeoutModal";
import LoadingModal from "./LoadingModal";
import noResult from '../../assets/icon/no_result_search.svg'


const stars = [5, 4, 3, 2, 1]
var timeout;

const SearchTour = ({ roomsParam,query, error, startBusSuggest, endBusSuggest, loadingParam ,hotelsSuggest }) => {
    const classes = useStyles()
    const [selectedSort, setSelectedSort] = useState('view')
    const [selectedStar, setSelectedStar] = useState(4)
    const [price, setPrice] = React.useState([50000, 4000000]);
    const [selectedHotelType, setSelectedHotelType] = useState([])
    const [openTimeout, setOpenTimeout] = useState(false)
    const [ready, setReady] = useState(false)
    const Dispatch = useDispatch();
    const Router = useRouter()
    const loading = useSelector((state) => state.user.searchLoading)
    console.log('startBusSuggest',startBusSuggest)
    console.log('endBusSuggest',endBusSuggest)
    console.log('hotelSuggest', hotelsSuggest)
    console.log('roomsParam', roomsParam)
    let hotels = []

    if (startBusSuggest.length > 0 && endBusSuggest.length > 0) {
        hotels = [
            {
                img: hotelImg,
                name: 'هتل الماس',
                star: 5,
                destnation: 'مشهد',
                price: 5400000,
                transfer: [
                    {
                        name: startBusSuggest[0].busType,
                        departDate: startBusSuggest[0].departDate,
                        departTime: startBusSuggest[0].departTime,
                        time: query.startDate

                    },
                    {
                        name: endBusSuggest[0].busType,
                        departDate: endBusSuggest[0].departDate,
                        departTime: endBusSuggest[0].departTime,
                        time: query.endDate

                    }
                ]
            },

        ]
    }
    const hotelTypes = useSelector((state) => state.hotel.hotelTypes);

    useEffect(() => {
        handleLoading(false);
        console.log('donne')
    }, [startBusSuggest, endBusSuggest])

    console.log('loading', loading)
    useEffect(() => {
        !hotelTypes && Dispatch(getHotelTypes())
    }, [hotelTypes])

    useEffect(() => {
        if (!ready) {
            setReady(true)
            setSearchTimeout()
        }
    })
    const setSearchTimeout = () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            setOpenTimeout(true)
        }, 300000);

    }

    useEffect(() => {
        if (query.star && query.star > 0 && query.star < 6) {
            setSelectedStar(parseInt(query.star))
        }
        if (query.price) {
            let tmp = query.price.split(',')
            setPrice([parseInt(tmp[0]), parseInt(tmp[1])])
        }
        if (query.hotelType) {
            let tmp = query.hotelType.split(',')
            setSelectedHotelType(tmp)
            console.log('type', tmp)
        }
        if (query.sort) {
            setSelectedSort(query.sort)
        }
    }, [query])

    const handleChangeStar = (e) => {
        setSelectedStar(e)
        let tmp = '?'
        query && Object.keys(query).map((key) => {
            if (key !== 'star') {
                tmp += `${key}=${query[key]}&`
            }
        })
        tmp += `star=${e}`
        Router.push(`/tour/search${tmp}`)
        setSearchTimeout()

    }
    const handleChangeSort = (e) => {
        setSelectedSort(e)
        let tmp = '?'
        query && Object.keys(query).map((key) => {
            if (key !== 'sort') {
                tmp += `${key}=${query[key]}&`
            }
        })
        tmp += `sort=${e}`
        Router.push(`/tour/search${tmp}`)
        setSearchTimeout()

    }

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);

    };

    const handleSubmitPrice = (event, newValue) => {
        setPrice(newValue);
        let tmp = '?'
        query && Object.keys(query).map((key) => {
            if (key !== 'price') {
                tmp += `${key}=${query[key]}&`
            }
        })
        tmp += `price=${newValue[0]},${newValue[1]}`
        Router.push(`/tour/search${tmp}`)
        setSearchTimeout()


    };

    const handleChangeHotelType = (hotelType) => {
        let tmpHotelType = selectedHotelType;
        tmpHotelType = _.xor(tmpHotelType, [hotelType])
        setSelectedHotelType([...tmpHotelType])
        let tmp = '?'
        query && Object.keys(query).map((key) => {
            if (key !== 'hotelType') {
                tmp += `${key}=${query[key]}&`
            }
        })
        let tmpTxt = ''
        tmpHotelType.map((item) => {
            tmpTxt += item + ','
        })
        tmpTxt = tmpTxt.substring(0, tmpTxt.length - 1);

        tmp += `hotelType=${tmpTxt}`
        Router.push(`/tour/search${tmp}`)
        setSearchTimeout()


    }
    if (Router.asPath.search('search?') === -1) {
        return (

            <div style={{ padding: '100px 0', margin: '0 auto', textAlign: 'center' }}>
                <p> پارامتر های ارسالی صحیح نیست</p>
                <Link href="/">بازگشت به صفحه اصلی</Link>
            </div>

        );
    } else {
        if (query && Object.keys(query).length === 0 && query.constructor === Object) {
            return (
                <div style={{ padding: '100px 0', margin: '0 auto', textAlign: 'center' }}>
                    <p> لطفا صبر کنید</p>
                </div>
            );
        } else if ((!query.transport || !query.origin || !query.dest || !query.startDate || !query.endDate || !query.rooms || !query.sort || !query.star)) {
            return (

                <div style={{ padding: '100px 0', margin: '0 auto', textAlign: 'center' }}>
                    <p> پارامتر های ارسالی صحیح نیست</p>
                    <Link href="/">بازگشت به صفحه اصلی</Link>
                </div>

            );
        }
    }
    const handleLoading = (type) => {
        Dispatch(setLoading(type))

    }

    return (


        <Grid container className={classes.searchTourContainer}>
            <Grid xl={4} lg={4} md={4} sm={12} xs={12} className={classes.FilterContainer}>
                <Sidebar
                    stars={stars}
                    selectedStar={selectedStar}
                    setSelectedStar={(e) => handleChangeStar(e)}
                    hotelTypes={hotelTypes}
                    handleChangePrice={handleChangePrice}
                    price={price}
                    setPrice={setPrice}
                    handleChangeHotelType={handleChangeHotelType}
                    selectedHotelType={selectedHotelType}
                    handleSubmitPrice={handleSubmitPrice}
                />
            </Grid>
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} className={classes.hotelsList}>
                <div>
                    <div className={classes.sortSection}>
                        <Typography>مرتب سازی بر اساس:</Typography>
                        <div className={classes.sortButtons}>
                            <Button
                                className={clsx(selectedSort === 'view' && classes.sortSelected)}
                                onClick={() => {
                                    handleChangeSort('view')
                                    handleLoading(true)

                                }}>
                                بیشترین بازدید</Button>
                            <Button
                                className={clsx(selectedSort === 'price' && classes.sortSelected)}
                                onClick={() => {
                                    handleChangeSort('price')
                                    handleLoading(true)

                                }}>
                                کمترین قیمت</Button>
                            <Button
                                className={clsx(selectedSort === 'time' && classes.sortSelected)}
                                onClick={() => {
                                    handleChangeSort('time')
                                    handleLoading(true)

                                }}>
                                نزدیک ترین زمان حرکت</Button>
                        </div>
                    </div>

                    <Divider className={classes.divider} />

                    <div className={classes.hotelContainer}>
                        {hotels.length > 0 ? hotels.map((hotel, index) => (
                            <HotelItem key={index} data={hotel} />
                        )) :

                            <div className={classes.noResult}>
                                <img src={noResult} />
                                <Typography>
                                    هیج نتیجه ای یافت نشد
                        </Typography>

                            </div>

                        }
                    </div>

                </div>
            </Grid>
            <TimeoutModal open={openTimeout} />
            <LoadingModal open={loading} />
        </Grid>
    )
}

export default SearchTour

