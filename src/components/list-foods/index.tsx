import { createUseStyles } from "react-jss";
import FoodCard from "./FoodCard";
import L01 from "../../assets/image/l01.jpg";
import L02 from "../../assets/image/l02.jpg";
import L03 from "../../assets/image/l03.jpg";
import L04 from "../../assets/image/column-1.jpg";
import L05 from "../../assets/image/m01.jpg";
import L06 from "../../assets/image/m02.jpg";
import L07 from "../../assets/image/m03.jpg";
import L08 from "../../assets/image/s01.jpg";
import Btn from "../../assets/image/component_btn.png";

const useStyles = createUseStyles({
  foodRoot: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  foodContainer: {
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "auto auto auto auto",
    width: "100%",
  },
  foodItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  foodBottom: {
    display: "flex",
    justifyContent: "center",
    padding: "24px",
  },
  foodBtn: {
    cursor: "pointer",
  },
});
const items = [
  {
    image: L01,
    text: "05.21.Morning",
  },
  {
    image: L02,
    text: "05.21.Lunch",
  },
  {
    image: L03,
    text: "05.21.Snack",
  },
  {
    image: L04,
    text: "05.21.Morning",
  },
  {
    image: L05,
    text: "05.21.Snack",
  },
  {
    image: L06,
    text: "05.21.Morning",
  },
  {
    image: L07,
    text: "05.21.Lunch",
  },
  {
    image: L08,
    text: "05.21.Morning",
  },
];
const ListFoods = () => {
  const classes = useStyles();
  return (
    <div className={classes.foodRoot}>
      <div className={classes.foodContainer}>
        {items.map((item) => (
          <div key={item.image} className={classes.foodItem}>
            <FoodCard imageUrl={item.image} text={item.text} />
          </div>
        ))}
      </div>
      <div className={classes.foodBottom}>
        <div className={classes.foodBtn}>
          <img src={Btn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ListFoods;
