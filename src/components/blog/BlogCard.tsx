import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  BlogCardRoot: {
    width: "100%",
    minWidth: "235px",
    height: "210px",
    cursor: "pointer",
  },
  BlogCardText: {
    backgroundColor: "#ffcc21",
    color: "#ffffff",
    padding: "4px 6px",
    fontSize: "14px",
  },
  BlogCardTitle: {
    color: "#414141",
    padding: "4px 0 8px",
    fontSize: "14px",
  },
  BlogCardNote: {
    color: "#ff963c",
    fontSize: "12px",
  },
});

const BlogCard = ({ imageUrl = "", text = "", title = "", note = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.BlogCardRoot}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          width: "100%",
          height: "150px",
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.BlogCardText}>{text}</div>
      </div>
      <div className={classes.BlogCardTitle}>{title}</div>
      <div className={classes.BlogCardNote}>{note}</div>
    </div>
  );
};

export default BlogCard;
