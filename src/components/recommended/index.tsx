import { createUseStyles } from "react-jss";
import RecommendedCard from "./RecommenedCard";

const useStyles = createUseStyles({
  recommendedRoot: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  recommendedContainer: {
    display: "grid",
    gap: "32px",
    gridTemplateColumns: "auto auto auto auto",
    width: "100%",
  },
  recommendedItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const list = [
  {
    title: "RECOMMENDED COLUMN",
    text: "オススメ",
  },
  {
    title: "RECOMMENDED DIET",
    text: "ダイエット",
  },
  {
    title: "RECOMMENDED BEAUTY",
    text: "美容",
  },
  {
    title: "RECOMMENDED HEALTH",
    text: "健康",
  },
];
const Recommendeds = () => {
  const classes = useStyles();
  return (
    <div className={classes.recommendedRoot}>
      <div className={classes.recommendedContainer}>
        {list.map((item) => (
          <RecommendedCard title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Recommendeds;
