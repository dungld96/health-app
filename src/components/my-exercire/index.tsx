import { createUseStyles } from "react-jss";
import { useAppSelector } from "../../untils/hook";

const useStyles = createUseStyles({
  MyExercireRoot: {
    padding: "16px 24px",
    height: "320px",
    backgroundColor: "#414141",
    color: "#ffffff",
    overflow: "auto",
    "& ul": {
      display: "grid",
      gridTemplateColumns: "auto auto",
      gap: "16px 64px",
      paddingLeft: "16px",
    },
  },
  title: {},
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #777777",
    paddingBottom: "4px",
  },
  listItemLeft: {},
  listItemRight: {
    color: "#ffcc21",
  },
  listItemRightCalo: {
    color: "#ffcc21",
  },
});

const MyExercire = () => {
  const classes = useStyles();
  const data = useAppSelector((state) => state.myExcercire.data);
  
  return (
    <div className={classes.MyExercireRoot}>
      <div className={classes.title}>MY EXERCISE 2021.05.21</div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div className={classes.listItem}>
              <div className={classes.listItemLeft}>
                <div>{item.label}</div>
                <div className={classes.listItemRightCalo}>{item.calo}kcal</div>
              </div>
              <div className={classes.listItemRight}>{item.min} min</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyExercire;
