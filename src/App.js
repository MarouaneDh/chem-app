import { Route, Switch } from "react-router-dom";
import "./App.css";
import Element from "./components/Element/Element";
import Table from "./components/Table/Table";
import image from "./chem.png";

function App() {
  return (
    <div className="App">
      <img className="backImage" src={image} />
      <Switch>
        <Route exact path="/" component={Table} />
        <Route path="/:id" component={Element} />
      </Switch>
    </div>
  );
}

export default App;
