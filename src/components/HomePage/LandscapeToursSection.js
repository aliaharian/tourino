import { Grid, Link, Typography } from '@material-ui/core'

import useStyles from './Style'
import img from '../../assets/img/landscapeTour.png'


const LandscapeToursSection = () => {
    const classes = useStyles()
    return (
        <Grid  className={classes.landscapeToursSection}>
            <Typography className={classes.landscapeTourTitle}>تور های طبیعت گردی</Typography>
           <Grid container>
           <Grid lg={3} md={3} sm={6} xs={6} className={classes.landscapeTourItem}>
                <Link href={'#'}>
                    <img src={img} />
                    <Typography>سفر به دریاچه و آبشار</Typography>
                </Link>
            </Grid>
            <Grid lg={3} md={3} sm={6} xs={6} className={classes.landscapeTourItem}>
                <Link href={'#'}>
                    <img src={img} />
                    <Typography>سفر به دریاچه و آبشار</Typography>
                </Link>
            </Grid>

            <Grid lg={3} md={3} sm={6} xs={6} className={classes.landscapeTourItem}>
                <Link href={'#'}>
                    <img src={img} />
                    <Typography>سفر به دریاچه و آبشار</Typography>
                </Link>
            </Grid>
            <Grid lg={3} md={3} sm={6} xs={6} className={classes.landscapeTourItem}>
                <Link href={'#'}>
                    <img src={img} />
                    <Typography>سفر به دریاچه و آبشار</Typography>
                </Link>
            </Grid>
           </Grid>

        </Grid>
    )
}


export default LandscapeToursSection