import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import Report from "../components/report/index";
import Banner from "../components/banner/index";
import ListFoods from "../components/list-foods/index";
import { getCurrentHealth } from "../state/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../state/store";
import { useAppSelector } from "../untils/hook";

const useStyles = createUseStyles({
  homeRoot: {
    width: "100%",
    marginBottom: "32px",
  },
  contenContainer: {
    margin: "0 20%",
  },
});

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const health = useAppSelector((state) => state.auth.health);

  useEffect(() => {
    dispatch(getCurrentHealth());
  }, []);

  return (
    <div className={classes.homeRoot}>
      <Report health={health} />
      <div className={classes.contenContainer}>
        <Banner />
        <ListFoods />
      </div>
    </div>
  );
}

export default Home;
