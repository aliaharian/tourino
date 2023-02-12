import { Button, useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../redux/user";
import TextInput2 from "../form/TextInput2";
import useStyles from "./Style";

const ProfileInfo = ({ profile, ...props }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const [info, setInfo] = useState({
    name: profile.name,
    lastName: profile.last_name,
    mobile: profile.mobile,
    email: profile.email||"",
  });
  const handleChange = (e) => {
    if (e.target.type === "tel") {
      if (e.target.value.length > 11) {
        return;
      }
      //if not a number reject
      if (isNaN(e.target.value)) {
        return;
      }
      setInfo({ ...info, [e.target.name]: e.target.value });
    } else {
        console.log(e.target.value)
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  //submit
  const handleSubmit = () => {
    Dispatch(setUserInfo(info));
  };
  return (
    <div className={classes.profileInfo}>
              {isMobile && <p className={classes.mobileTableTitle}>اطلاعات کاربری</p>}

      <div className={classes.mb24px}>
        <TextInput2
          required
          error={props.error}
          label="نام"
          name="name"
          value={info.name}
          onChange={handleChange}
        />
      </div>
      <div className={classes.mb24px}>
        <TextInput2
          required
          error={props.error}
          label="نام خانوادگی"
          name="lastName"
          value={info.lastName}
          onChange={handleChange}
        />
      </div>
      <div className={classes.mb24px}>
        <TextInput2
          required
          type="tel"
          error={props.error}
          label="شماره موبایل"
          name="mobile"
          value={info.mobile}
          onChange={handleChange}
        />
      </div>
      <div className={classes.mb24px}>
        <TextInput2
          type="email"
          error={props.error}
          label="ایمیل"
          name="email"
          value={info.email}
          onChange={handleChange}
        />
      </div>
      <Button onClick={handleSubmit} className={classes.submitBtn}>
        ثبت اطلاعات
      </Button>
    </div>
  );
};

export default ProfileInfo;
