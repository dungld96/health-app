import Logo from "./Logo";
import { createUseStyles } from "react-jss";
import CustomLink from "../CustomLink";
import MenuFirst from "../../assets/image/icon-menu-1.svg";
import MenuSecond from "../../assets/image/icon-menu-1.svg";
import MenuThird from "../../assets/image/icon-menu-1.svg";

const useStyles = createUseStyles({
  navRoot: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    width: "100%",
    minHeight: "64px",
    padding: "0 20%",
    backgroundColor: "#414141",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  menuContainer: {
    display: "flex",
    marginRight: "-20px",
  },
  menuItem: {
    display: "flex",
    marginLeft: "12px",
    cursor: "pointer",
    padding: "20px",
    "&:hover": {
      backgroundColor: "#2e2e2e",
    },
  },
  menuItemIcon: {
    display: "flex",
    alignItems: "center",
    marginRight: "8px",
    "& img": {
      width: "33px",
      height: "33px",
    },
  },
  menuItemText: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
  },
});

const menuConfigs = [
  {
    name: "自分の記録",
    icon: MenuFirst,
    url: "/",
  },
  {
    name: "チャレンジ",
    icon: MenuSecond,
    url: "detail",
  },
  {
    name: "お知らせ",
    icon: MenuThird,
    url: "about",
  },
];
const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.navRoot}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.menuContainer}>
        {menuConfigs.map((menu) => (
          <CustomLink key={menu.name} to={menu.url}>
            <div className={classes.menuItem}>
              <div className={classes.menuItemIcon}>
                <img src={menu.icon} alt="" />
              </div>
              <div className={classes.menuItemText}>{menu.name}</div>
            </div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
