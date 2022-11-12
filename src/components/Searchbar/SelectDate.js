import { Button, ClickAwayListener, Grow, Menu, MenuItem, MenuList, Paper, Popper, Typography } from '@material-ui/core'
import { useEffect, useRef, useState } from 'react'
import useStyles from './Style'
import locationIcon from '../../assets/img/location.png'
import clsx from 'clsx'
import HistoryIcon from '@material-ui/icons/History';
import DatePicker from '../datepicker/DateRangePickerWrapper'
import { dateTime } from '../../utilities'
import CloseIcon from '@material-ui/icons/Close';
const SelectDate = ({ startDate, setStartDate, endDate, setEndDate, ...props }) => {
    const classes = useStyles()
    const [focusedInput, setFocusedInput] = useState()
    const [startDateStr, setStartDateStr] = useState()
    const [endDateStr, setEndDateStr] = useState()
    const [startDateBck, setStartDateBck] = useState()
    const [endDateBck, setEndDateBck] = useState()


    const anchorEl = useRef(null)
    const handleToggle = () => {
        props.onClick()

    };

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

    useEffect(() => {
        if (props.selected) {
            setFocusedInput('startDate')
        }
        // setStartDate(startDateBck)
        // setEndDate(endDateBck)
    }, [props.selected])

    useEffect(() => {
        console.log('miam')
        if (startDate) {
            setStartDateStr(dateTime.dateTimeCustom(new Date(startDate).getTime() / 1000).day + " " + dateTime.dateTimeCustom(new Date(startDate).getTime() / 1000).month + " ")
            setStartDateBck(startDate)
        }
        if (endDate) {
            setEndDateStr(dateTime.dateTimeCustom(new Date(endDate).getTime() / 1000).day + " " + dateTime.dateTimeCustom(new Date(endDate).getTime() / 1000).month + " ")
            setEndDateBck(endDate)
        }
    }, [startDate, endDate])

    return (<>
        <div className={clsx(classes.searchbarItem, props.selected && classes.searchbarItemActive)}
            style={focusedInput ? { maxWidth: 210 } : { maxWidth: 210 }}
            ref={anchorEl}
            aria-controls={props.selected ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={
                (event) => {
                    handleToggle()
                }
            }
        >
            <Typography> تاریخ سفر </Typography>
            <Typography noWrap style={{ maxWidth: 'calc(100% - 20px)' }}>{startDateStr ? endDateStr ? startDateStr + ' - ' + endDateStr : startDateStr : `تاریخ رفت و برگشت`}</Typography>
            {

                (startDate || endDate) &&
                <Button className={classes.deleteDate} onClick={() => {
                    setStartDate()
                    setEndDate()
                    setStartDateStr()
                    setEndDateStr()
                }}><CloseIcon /></Button>
            }        </div>
        <Popper className={classes.dateMenu} open={props.selected} anchorEl={anchorEl.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={(e) => {
                            // console.log('clickaway')
                            handleClose(e)
                        }}>
                            <MenuList autoFocusItem={props.selected} id="menu-list-grow">
                                <DatePicker
                                    focusedInput={focusedInput}
                                    startDate={startDate}
                                    endDate={endDate}
                                    setStartDate={(e) => setStartDate(e)}
                                    setEndDate={(e) => setEndDate(e)}
                                    setFocusedInput={(e) => setFocusedInput(e)}

                                />
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </>
    )
}

export default SelectDate