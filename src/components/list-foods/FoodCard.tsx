import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  LogoRoot: {
    width: "100%",
    minWidth: "235px",
    height: "235px",
    cursor: "pointer",
  },
  foodText: {
    backgroundColor: "#ffcc21",
    color: "#ffffff",
    padding: "4px 6px",
    fontSize: '14px'
  },
});

const FoodCard = ({ imageUrl = "", text = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.LogoRoot}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.foodText}>{text}</div>
      </div>
    </div>
  );
};

export default FoodCard;
