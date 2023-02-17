import { Button, Menu, MenuItem } from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
import { useRouter } from "next/router";
import { dateTime, numberFormat } from "../../utilities";
import useStyles from "./Style";

const ProfileTourItem = ({ tour }) => {
  const classes = useStyles();
  const Router = useRouter();
  const handleOpenWatcher = () => {
    Router.push({
      pathname: "/profile/tours/" + tour.id,
    });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <tr>
      <td>{tour.id}</td>
      <td>
        {tour.from_city.title} / {tour.to_city.title}
      </td>
      <td>
        {dateTime.dateTimeCustom(tour.departure_date_time / 1000).dateDate}
        {" - "}
        {dateTime.dateTimeCustom(tour.departure_date_time / 1000).dateTime}
      </td>
      <td>{numberFormat.toPersianSeprateTomanCommas(tour.payablePrice)}</td>
      <td>
        <div
          className={classes.statusLabel}
          style={{
            backgroundColor: tour.status.color + "29",
            color: tour.status.color,
          }}
        >
          {tour.status.slug}
        </div>
      </td>
      <td>
        <Button
          onClick={handleClick}
          variant="contained"
          className={classes.profileToursTableBtn}
        >
          <MoreVertRounded />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleOpenWatcher}>مشاهده واچر</MenuItem>
        </Menu>
      </td>
    </tr>
  );
};
export default ProfileTourItem;
