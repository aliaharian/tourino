import { Grid, Link, Typography } from "@material-ui/core";

import useStyles from "./Style";
import img from "../../assets/img/blog1.jpg";
import img2 from "../../assets/img/blog2.jpg";
import img3 from "../../assets/img/blog3.jpg";
import img4 from "../../assets/img/blog4.jpg";

const LandscapeToursSection = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.landscapeToursSection}>
      <Typography className={classes.landscapeTourTitle}>
        پیشنهاد تورینو
      </Typography>
      <div className={classes.landscapeTour}>
        <div className={classes.landscapeTourItem}>
          <Link href={"#"}>
            <img src={img} />
            <Typography>سفر به کویر</Typography>
            <Typography>لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گفته می‌شود...</Typography>
          </Link>
        </div>
        <div className={classes.landscapeTourItem}>
          <Link href={"#"}>
            <img src={img2} />
            <Typography>سفر به دریاچه و آبشار</Typography>
            <Typography>لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گفته می‌شود...</Typography>

          </Link>
        </div>

        <div className={classes.landscapeTourItem}>
          <Link href={"#"}>
            <img src={img3} />
            <Typography>سفر به دریاچه و آبشار</Typography>
            <Typography>لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گفته می‌شود...</Typography>

          </Link>
        </div>
        <div className={classes.landscapeTourItem}>
          <Link href={"#"}>
            <img src={img4} />
            <Typography>سفر به دریاچه و آبشار</Typography>
            <Typography>لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گفته می‌شود...</Typography>

          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default LandscapeToursSection;
