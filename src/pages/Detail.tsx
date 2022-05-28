import { createUseStyles } from "react-jss";
import GirdSession from "../components/gird-session";
import BodyRecord from "../components/body-record";
import MyExercire from "../components/my-exercire";
import MyDiary from "../components/my-diary";
const useStyles = createUseStyles({
  detailRoot: {
    display: "flex",
    flexDirection: "column",
    margin: "24px 20%",
  },
  detailSection: {
    margin: " 32px 0 24px",
  },
});

function Detail() {
  const classes = useStyles();

  return (
    <div className={classes.detailRoot}>
      <div className={classes.detailSection}>
        <GirdSession />
      </div>
      <div className={classes.detailSection}>
        <BodyRecord />
      </div>
      <div className={classes.detailSection}>
        <MyExercire />
      </div>
      <div className={classes.detailSection}>
        <MyDiary />
      </div>
    </div>
  );
}

export default Detail;
