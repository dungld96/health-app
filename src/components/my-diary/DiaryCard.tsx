import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  diaryCardRoot: {
    minWidth: "235px",
    height: "235px",
    cursor: "pointer",
    border: "2px solid #777777",
    color: '#414141'
  },
  diaryCardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: '16px'
  },
  diaryCardTitle: {
    textTransform: "uppercase",
    fontSize: "18px",
    marginBottom: "16px",
  },
  diaryCardLabel: {
    fontSize: "12px",
    marginBottom: '6px'
  },
  diaryCardContent: {
    fontSize: "12px",
  },
});

const DiaryCard = ({ label = "", content = "", date = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.diaryCardRoot}>
      <div className={classes.diaryCardContainer}>
        <div className={classes.diaryCardTitle}>
          <div>{date}</div>
          <div>23:25</div>
        </div>
        <div className={classes.diaryCardLabel}>{label}</div>
        <div className={classes.diaryCardContent}>{content}</div>
      </div>
    </div>
  );
};

export default DiaryCard;
