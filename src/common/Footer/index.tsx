import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footerRoot: {
    display: "flex",
    flex: 1,
    backgroundColor: '#414141',
    color: '#ffffff',
    padding: '0 20%'
  },
  footerContainer: {
    padding: "32px 32px 32px 0",
    display: "flex",
  },
  footerItem: {
    paddingRight: "32px",
    cursor: 'pointer'
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerRoot}>
      <div className={classes.footerContainer}>
        <div className={classes.footerItem}>会員登録</div>
        <div className={classes.footerItem}>運営会社</div>
        <div className={classes.footerItem}>利用規約</div>
        <div className={classes.footerItem}>個人情報の取扱について</div>
        <div className={classes.footerItem}>特定商取引法に基づく表記</div>
        <div className={classes.footerItem}>お問い合わせ</div>
      </div>
    </div>
  );
};

export default Footer;
