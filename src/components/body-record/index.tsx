import { createUseStyles } from "react-jss";
import BodyRecordImage from "../../assets/image/body-record.png";

const useStyles = createUseStyles({
  BodyRecordRoot: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    minHeight: '340px'
  },
  image: {
    width: "100%",
    height: "100%",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
});

const BodyRecord = () => {
  const classes = useStyles();
  return (
    <div className={classes.BodyRecordRoot}>
      <div className={classes.image}>
        <img src={BodyRecordImage} alt="" />
      </div>
    </div>
  );
};

export default BodyRecord;
