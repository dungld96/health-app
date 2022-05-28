import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  recommendedCardRoot: {
    minWidth: "180px",
    height: "160px",
    cursor: "pointer",
    backgroundColor: "#2e2e2e",
  },
  recommendedCardCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  },
  recommendedTitle: {
    color: "#ffcc21",
    textTransform: "uppercase",
    fontSize: "22px",
    marginBottom: "16px",
    textAlign: "center",
  },
  line: {
    height: "2px",
    width: "40%",
    backgroundColor: "#ffffff",
  },
  recommendedText: {
    fontSize: "18px",
    marginTop: "8px",
    color: "#ffffff",
  },
});

const RecommendedCard = ({ title = "", text = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.recommendedCardRoot}>
      <div className={classes.recommendedCardCon}>
        <div className={classes.recommendedTitle}>{title}</div>
        <div className={classes.line}></div>
        <div className={classes.recommendedText}>{text}</div>
      </div>
    </div>
  );
};

export default RecommendedCard;
