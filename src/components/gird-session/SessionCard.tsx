import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  SessionCardRoot: {
    minWidth: "235px",
    height: "235px",
    cursor: "pointer",
    border: "18px solid #FFCC21",
  },
  SessionTitle: {
    color: "#ffcc21",
    textTransform: "uppercase",
    fontSize: "25px",
    marginBottom: "16px",
  },
  SessionBtn: {
    backgroundColor: "#ff963c",
    padding: "4px 12px",
    color: "#ffffff",
    cursor: "pointer",
  },
  overlay: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: 'rgba(0, 0, 0, 0.5)'
  },
});

const SessionCard = ({ imageUrl = "", text = "", title = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.SessionCardRoot}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.overlay}>
          <div className={classes.SessionTitle}>{title}</div>
          <div className={classes.SessionBtn}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
