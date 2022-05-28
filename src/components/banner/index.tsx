import { createUseStyles } from "react-jss";
import Snack from "../../assets/image/snack.png";
import Dinner from "../../assets/image/dinner.png";
import Lunch from "../../assets/image/lunch.png";
import Morning from "../../assets/image/morning.png";

const useStyles = createUseStyles({
  bannerRoot: {
    display: "flex",
    flex: 1,
  },
  bannerContainer: {
    display: "flex",
    flex: 1,
    margin: "24px 56px",
  },
  bannerItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.bannerRoot}>
      <div className={classes.bannerContainer}>
        <div className={classes.bannerItem}>
          <img src={Morning} alt="" />
        </div>
        <div className={classes.bannerItem}>
          <img src={Lunch} alt="" />
        </div>
        <div className={classes.bannerItem}>
          <img src={Dinner} alt="" />
        </div>
        <div className={classes.bannerItem}>
          <img src={Snack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
