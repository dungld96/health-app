import { createUseStyles } from "react-jss";
import LogoImage from "../../assets/image/logo.svg";

const useStyles = createUseStyles({
  LogoRoot: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {},
});

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.LogoRoot}>
      <div className={classes.image}>
        <img src={LogoImage} alt="" />
      </div>
    </div>
  );
};

export default Logo;
