import { createUseStyles } from "react-jss";
import Recommended from "../components/recommended";
import Blog from "../components/blog";
const useStyles = createUseStyles({
  aboutRoot: {
    display: "flex",
    flexDirection: "column",
    margin: "24px 20%",
  },
  aboutSection: {
    margin: " 32px 0 24px",
  },
});

function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutRoot}>
      <div className={classes.aboutSection}>
        <Recommended />
      </div>
      <div className={classes.aboutSection}>
        <Blog />
      </div>
    </div>
  );
}

export default About;
