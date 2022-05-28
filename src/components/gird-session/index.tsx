import { createUseStyles } from "react-jss";
import SessionCard from "./SessionCard";
import MyRecommend1 from "../../assets/image/MyRecommend-1.jpg";
import MyRecommend2 from "../../assets/image/MyRecommend-2.jpg";
import MyRecommend3 from "../../assets/image/MyRecommend-3.jpg";

const useStyles = createUseStyles({
  sessionRoot: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  sessionContainer: {
    display: "grid",
    gap: "32px",
    gridTemplateColumns: "auto auto auto",
    width: "100%",
  },
  sessionItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const list = [
  {
    title: "body record",
    textBtn: "自分のカラダの記録",
    image: MyRecommend1,
  },
  {
    title: "my exercire",
    textBtn: "自分の運動の記録",
    image: MyRecommend2,
  },
  {
    title: "my diary",
    textBtn: "自分の日記",
    image: MyRecommend3,
  },
];
const Sessions = () => {
  const classes = useStyles();
  return (
    <div className={classes.sessionRoot}>
      <div className={classes.sessionContainer}>
        {list.map((item) => (
          <SessionCard
            key={item.title}
            imageUrl={item.image}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Sessions;
