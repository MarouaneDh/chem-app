import { Route, Switch } from "react-router-dom";
import "./App.css";
import Element from "./components/Element/Element";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      {/* {elements ? <Table elements={elements} /> : "spinner"} */}
      <Switch>
        <Route exact path="/" component={Table} />
        <Route path="/:id" component={Element} />
      </Switch>
    </div>
  );
}

export default App;
