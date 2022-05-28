import { createUseStyles } from "react-jss";
import DiaryCard from "./DiaryCard";
import Btn from "../../assets/image/component_btn.png";
import { useAppSelector } from "../../untils/hook";

const useStyles = createUseStyles({
  diaryRoot: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  diaryContainer: {
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "auto auto auto auto",
    width: "100%",
  },
  diaryItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  diaryBottom: {
    display: "flex",
    justifyContent: "center",
    padding: "24px",
  },
  diaryBtn: {
    cursor: "pointer",
  },
});

const MyDiary = () => {
  const classes = useStyles();
  const items = useAppSelector((state) => state.myDiary.data);
  return (
    <div className={classes.diaryRoot}>
      <div className={classes.diaryContainer}>
        {items.map((item) => (
          <DiaryCard key={item.id} {...item} />
        ))}
      </div>
      <div className={classes.diaryBottom}>
        <div className={classes.diaryBtn}>
          <img src={Btn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyDiary;
