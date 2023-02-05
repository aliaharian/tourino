import { ClickAwayListener, Grow, Menu, MenuItem, MenuList, Paper, Popper, Typography } from '@material-ui/core'
import { useEffect, useRef, useState } from 'react'
import useStyles from './Style'
import locationIcon from '../../assets/img/location.png'
import clsx from 'clsx'
import HistoryIcon from '@material-ui/icons/History';
const EndLocation = (props) => {
    const classes = useStyles()
    const anchorEl = useRef(null)
    const [cities, setCities] = useState()

    const handleToggle = () => {
        props.onClick()
    };

    useEffect(() => {
        if (!cities && props.cities) {
            setCities([...props.cities])
        }
    }, [props.cities])

    const handleClose = (event) => {
        if (
            (anchorEl.current && anchorEl.current.contains(event.target))
            ||
            (props.anchorElGlobal.current && props.anchorElGlobal.current.contains(event.target))
        ) {
            return;
        }
        props.onClose()

    };
    // return focus to the button when we transitioned from !open -> open
    return (<>
        <div
            className={clsx(classes.searchbarItem, props.selected && classes.searchbarItemActive)}
            ref={anchorEl}
            aria-controls={props.selected ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={
                (event) => {
                    handleToggle()
                }
            } >
            <Typography> مقصد </Typography>
            <Typography noWrap> {props.endLocation?.city?.title || 'کجا می روید؟'} </Typography>
        </div>

        <Popper className={classes.locationMenu} open={props.selected} anchorEl={anchorEl.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={(e) => {
                            handleClose(e)
                        }}>
                            <MenuList autoFocusItem={props.selected} id="menu-list-grow">
                                <div className={classes.locationMenuChild} >

                                    <div className={classes.locationOfferContainer}>
                                        <Typography>شهر های پیشنهادی </Typography>

                                        <div className={classes.locationOfferItemContainer}>

                                            {cities && cities.map((city) => (
                                                <div key={city.city_id} onClick={() => {
                                                    props.handleChange(city)
                                                }}
                                                    className={clsx(classes.locationOfferItem, props.endLocation?.id === city.id && classes.selectedCity)}>
                                                    <Typography>{city.city.title}</Typography>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </>
    )
}

export default EndLocation