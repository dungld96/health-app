import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Routes, Route } from "react-router-dom";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Home from "./pages/Home";


const useStyles = createUseStyles({
  appRoot: {
    height: "100vh",
  },
  header: {
    display: "flex",
    width: "100%",
  },
  footer: {
    display: "flex",
    width: "100%",
  },
  mainContent: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <div className={classes.header}>
        <Nav />
      </div>
      <main className={classes.mainContent}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
