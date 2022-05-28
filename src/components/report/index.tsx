import { createUseStyles } from "react-jss";
import { DateTime } from 'luxon';
import ImageLeft from "../../assets/image/d01.jpg";
import MainGraph from "../../assets/image/main_graph.png";
import Circle from "../../assets/image/circle.png";
import { HealthType } from "../../state/auth/types";


const useStyles = createUseStyles({
  reportRoot: {
    display: "flex",
    flex: 1,
    height: "320px",
  },
  reportContainer: {
    display: "flex",
    flex: 1,
  },
  reportItem: {
    flex: 1,
  },
  reportItemLeft: {
    height: "100%",
    backgroundImage: `url(${ImageLeft})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  reportItemRight: {
    height: "100%",
    backgroundColor: "#2e2e2e",
  },
  reportChart: {
    height: "100%",
    padding: "0 48px",
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "100%",
      height: "260px",
    },
  },
  circlePercent: {
    position: "relative",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(225, 225, 225, 0.2)",
  },
  circle: {
    position: "relative",
  },
  percent: {
    fontSize: "25px",
    color: "#ffffff",
  },
  percentDate: {
    fontSize: "18px",
    color: "#ffffff",
    paddingRight: "8px",
  },
  percentBox: {
    position: "absolute",
  },
});

interface HealthTypeProps {
  health?: HealthType;
}

const Report = ({ health }: HealthTypeProps) => {
  const classes = useStyles();
  const date = health ? DateTime.fromISO(health.updateAt).toFormat('dd/MM') : '';
  return (
    <div className={classes.reportRoot}>
      <div className={classes.reportContainer}>
        <div className={classes.reportItem}>
          <div className={classes.reportItemLeft}>
            <div className={classes.circlePercent}>
              <div className={classes.circle}>
                <img src={Circle} alt="" />
              </div>
              <div className={classes.percentBox}>
                <span className={classes.percentDate}>{date}</span>
                <span className={classes.percent}>{health?.percent}%</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.reportItem}>
          <div className={classes.reportItemRight}>
            <div className={classes.reportChart}>
              <img src={MainGraph} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
