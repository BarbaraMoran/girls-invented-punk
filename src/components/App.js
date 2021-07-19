import React from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/components/App.scss";
import "../stylesheets/index.scss";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing/Landing";
import MainGame2 from "./two-players/MainGame2";
import MainGame1 from "./one-player/MainGame1";
import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing> </Landing>
        </Route>
        <Route path="/one-player">
          <MainGame1></MainGame1>
        </Route>
        <Route path="/two-players">
          <MainGame2></MainGame2>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
