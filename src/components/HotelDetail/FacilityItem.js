import { Button, Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core';
import useStyles from './Style'
import { dateTime } from '../../utilities';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const FacilityItem = (props) => {
    const classes = useStyles();

    return (
        <Grid sx={6} sm={6} md={2} lg={2} xl={2} className={classes.facilityItemParent}>
            <div className={classes.facilityItem}>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={selectedHotelType.indexOf(key) !== -1}
                            // onChange={() => handleChangeHotelType(key)}
                            name={props.facility}
                            icon={<CheckBoxOutlineBlankIcon style={{ color: '#909090' }} />}
                            checkedIcon={<CheckBoxIcon style={{ color: '#3d6b92' }} />}
                            color="primary"
                        />
                    }
                    label={props.facility}
                />

            </div>
        </Grid>
    )
}

export default FacilityItem;