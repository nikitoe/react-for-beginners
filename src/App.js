import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import CoinTracker from "./components/CoinTracker"
import ToDos from "./components/ToDos"

function App() {
  return <Router>
    <Switch>
      <Route path="/todos/">
        <ToDos />
      </Route>
      <Route path="/cointracker/">
        <CoinTracker />
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
};

export default App;
