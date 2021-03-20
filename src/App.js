import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/main.scss";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
