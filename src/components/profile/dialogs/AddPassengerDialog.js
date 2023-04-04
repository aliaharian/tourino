import { Button, Dialog } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import PassengerInfo from "../../tourInfo/PassengerInfo";
import useStyles from "./Style";
import animationData from "../../../assets/icon/loading.json";

const AddPassengerDialog = ({
  open,
  onClose,
  handleSave,
  startSearch,
  setStartSearch,
}) => {
  const classes = useStyles();

  const [passenger, setPassenger] = useState({
    name: "",
    lastName: "",
    nationalCode: "",
    mobile: "",
    birthDate: ["", "", ""],
    gender: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    setPassenger({
      name: "",
      lastName: "",
      nationalCode: "",
      mobile: "",
      birthDate: ["", "", ""],
      gender: "",
    });
  }, [open]);
  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        style: { borderRadius: 16 },
      }}
    >
      <div className={classes.dialogContainer}>
        <div className={classes.dialogTitle}>
          <p>انتخاب مسافر</p>
          <Button onClick={onClose}>
            <Close />
          </Button>
        </div>
        <div className={classes.formContainer}>
          <PassengerInfo
            info={passenger}
            setInfo={(info) => {
              console.log(info);
              setPassenger({ ...info });
            }}
            error={false}
          />{" "}
        </div>
        <div className={classes.submitBtn}>
          <Button
            onClick={() => {
              handleSave(passenger);
            }}
          >
            {startSearch ? (
              <Lottie
                options={defaultOptions}
                height={48}
                width={48}
                isStopped={false}
                isPaused={false}
              />
            ) : (
              "افزودن کاربر"
            )}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
export default AddPassengerDialog;
