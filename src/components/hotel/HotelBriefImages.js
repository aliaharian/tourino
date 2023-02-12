import { Button } from "@material-ui/core";
import { Apps, Grid4x4 } from "@material-ui/icons";
import useStyles from "./Style";

const HotelBriefImages = ({ images }) => {
  const classes = useStyles();

  return (
    <div className={classes.hotelBriefGallery}>
      {images.length == 1 ? (
        <div>
          <div>
            <img
              style={{ borderRadius: 16 }}
              src={images[0].file.url}
              alt="hotel image"
            />
          </div>
        </div>
      ) : images.length == 2 ? (
        <div>
          <div>
            <img
              style={{ borderRadius: "0 16px 16px 0" }}
              src={images[0].file.url}
              alt="hotel image"
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "16px 0 0 16px" }}
              src={images[1].file.url}
              alt="hotel image"
            />
          </div>
        </div>
      ) : images.length == 3 ? (
        <div>
          <div>
            <img
              style={{ borderRadius: "0 16px 16px 0" }}
              src={images[0].file.url}
              alt="hotel image"
            />
          </div>
          <div>
            <img
              style={{ height: "50%", borderRadius: "16px 0 0 0" }}
              src={images[1].file.url}
              alt="hotel image"
            />
            <img
              style={{ height: "50%", borderRadius: "0 0 0 16px" }}
              src={images[2].file.url}
              alt="hotel image"
            />
          </div>
        </div>
      ) : images.length == 4 ? (
        <div>
          <div>
            <img
              style={{ borderRadius: "0 16px 0 0", height: "50%" }}
              src={images[0].file.url}
              alt="hotel image"
            />
            <img
              style={{ borderRadius: "0 0 16px 0", height: "50%" }}
              src={images[1].file.url}
              alt="hotel image"
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "16px 0 0 0", height: "50%" }}
              src={images[2].file.url}
              alt="hotel image"
            />
            <img
              style={{ borderRadius: "0 0 0 16px", height: "50%" }}
              src={images[3].file.url}
              alt="hotel image"
            />
          </div>
        </div>
      ) : (
        images.length > 4 && (
          <div>
            <div>
              <img
                style={{ borderRadius: "0 16px 16px 0" }}
                src={images[0].file.url}
                alt="hotel image"
              />
            </div>
            <div style={{ flex: 0.5 }}>
              <img
                style={{ height: "50%" }}
                src={images[1].file.url}
                alt="hotel image"
              />
              <img
                style={{ height: "50%" }}
                src={images[2].file.url}
                alt="hotel image"
              />
            </div>
            <div style={{ flex: 0.5 }}>
              <img
                style={{ borderRadius: "16px 0 0 0", height: "50%" }}
                src={images[3].file.url}
                alt="hotel image"
              />
              <img
                style={{ borderRadius: "0 0 0 16px", height: "50%" }}
                src={images[4].file.url}
                alt="hotel image"
              />
              <div></div>
            </div>
          </div>
        )
      )}

      <Button className={classes.seeAllBtn} startIcon={<Apps />}>
            مشاهده همه تصاویر
      </Button>
    </div>
  );
};
export default HotelBriefImages;
