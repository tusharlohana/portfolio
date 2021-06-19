import Navcontent from "./components/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import introduction from "./components/introduction";
import about from "./components/about";
import project from "./components/project";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import './css/app.css'
import contact from "./components/contact";
import education from "./components/education";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navcontent/>
    <Switch>
      <Route exact path="/" component={introduction}></Route>
      <Route exact path="/about" component={about}></Route>
      <Route exact path="/education" component={education}></Route>
      <Route exact path="/project" component={project}></Route>
      <Route exact path="/experience" component={project}></Route>
      <Route exact path="/contact" component={contact}></Route>
    </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
