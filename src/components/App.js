import '../style/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import Home from "./home/Home";
import UserInfo from "./userInfo/UserInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.USER_INFO} component={UserInfo} />
      </Switch>
    </Router>
  );
}

export default App;
