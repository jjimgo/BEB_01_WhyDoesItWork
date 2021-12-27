import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import { LogInPage } from "./ContentsListComponent/clcLogIn";
import { WritePage } from "./ContentsListComponent/clcWrite";
import Board from "./ContentsListComponent/Board/Board";

const ContentsList = () => {
  const [Auth, SetAuth] = useState(false);
  const [data, SetData] = useState({});
  const [board, SetBoard] = useState({});

  return (
    <div className="ContentsList">
      <Switch>
        <Route exact path="/">
          <Board />
        </Route>
        <Route path="/LogIn">
          <LogInPage />
        </Route>
        <Route path="/SignIn">SignIn</Route>
        <Route path="/SignOut">SignOut</Route>
        <Route path="/Write">
          <WritePage data={data} SetBoard={SetBoard} />
        </Route>
        <Route path="/Menu">Menu</Route>
      </Switch>
    </div>
  );
};

export default ContentsList;
