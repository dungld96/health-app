import { createUseStyles } from "react-jss";
import BlogCard from "./BlogCard";
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
  blogRoot: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  blogContainer: {
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "auto auto auto auto",
    width: "100%",
  },
  blogItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blogBottom: {
    display: "flex",
    justifyContent: "center",
    padding: "24px",
  },
  blogBtn: {
    cursor: "pointer",
  },
});
const items = [
  {
    image: L01,
    text: "05.21.Morning",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
  {
    image: L02,
    text: "05.21.Lunch",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
  {
    image: L03,
    text: "05.21.Snack",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
  {
    image: L04,
    text: "05.21.Morning",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
  {
    image: L05,
    text: "05.21.Snack",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
  {
    image: L06,
    text: "05.21.Morning",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
  {
    image: L07,
    text: "05.21.Lunch",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
  {
    image: L08,
    text: "05.21.Morning",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    note: "#魚料理  #和食  #DHA",
  },
];
const Blog = () => {
  const classes = useStyles();
  return (
    <div className={classes.blogRoot}>
      <div className={classes.blogContainer}>
        {items.map((item) => (
          <div key={item.image} className={classes.blogItem}>
            <BlogCard imageUrl={item.image} {...item} />
          </div>
        ))}
      </div>
      <div className={classes.blogBottom}>
        <div className={classes.blogBtn}>
          <img src={Btn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
