import { Button, Checkbox, Divider, FormControlLabel, Grid, Slider, Typography, withStyles } from "@material-ui/core"
import clsx from "clsx";
import { useEffect, useState } from "react";
import HotelItem from "./HotelItem";
import useStyles from './Style'
import hotelImg from '../../assets/img/hotelFeatured.png'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { numberFormat } from "../../utilities";
var _ = require('lodash');

const AirbnbSlider = withStyles({
    root: {
        color: '#3d6b92',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 12,
        width: 12,
        backgroundColor: 'currentColor',
        border: '1px solid currentColor',
        marginTop: -5,
        marginLeft: -6,
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);
// function AirbnbThumbComponent(props) {
//     return (
//         <span {...props}>
//             <span className="bar" />
//             <span className="bar" />
//             <span className="bar" />
//         </span>
//     );
// }

const Sidebar = ({
    price,
    hotelTypes,
    stars,
    selectedStar,
    setSelectedStar,
    handleChangePrice,
    handleChangeHotelType,
    selectedHotelType,
    handleSubmitPrice
}) => {
    const classes = useStyles()

    const handleChangeStars = (star) => {
        setSelectedStar(star)
    }


    return (
        <div className={classes.sidebarContainer}>
            <div className={classes.sidebarItem}>
                <Typography>محدوده قیمت (تومان)</Typography>
                <AirbnbSlider
                    valueLabelDisplay="off"
                    defaultValue={price}
                    value={price}
                    onChange={handleChangePrice}
                    onChangeCommitted={
                        handleSubmitPrice
                    }
                    min={50000}
                    step={50000}
                    max={4000000}
                />
                <div className={classes.priceText}>
                    <Typography>{`${numberFormat.toPersianSeprateTomanCommas(price[0])} تومان`}</Typography>
                    <Typography>{`${numberFormat.toPersianSeprateTomanCommas(price[1])} تومان`}</Typography>
                </div>
            </div>

            <div className={classes.sidebarItem}>
                <Typography>ستاره هتل</Typography>
                <div className={classes.starSlider}>
                    {stars.map((star) => (
                        <div className={clsx(selectedStar === star && classes.activeStar)} onClick={() => handleChangeStars(star)}>
                            <div></div>
                            <Typography>{star}</Typography>
                        </div>
                    ))}



                </div>


            </div>
            <div className={classes.sidebarItem}>
                <Typography>نوع هتل</Typography>
                <div className={classes.hotelTypeContainer}>
                    {hotelTypes && hotelTypes.map((type) =>{ 
                        return(
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedHotelType.indexOf(type.id.toString()) !== -1}
                                        onChange={() => handleChangeHotelType(type.id.toString())}
                                        name={type.id}
                                        icon={<CheckBoxOutlineBlankIcon style={{ color: '#909090' }} />}
                                        checkedIcon={<CheckBoxIcon style={{ color: '#3d6b92' }} />}
                                        color="primary"
                                    />
                                }
                                label={type.name}
                            />
                        </div>
                    )})}




                </div>


            </div>

        </div>
    )
}

export default Sidebar