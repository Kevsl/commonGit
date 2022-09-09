import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Route to="/">Home</Route>
          </li>
          <li>
            <Route to="/about">About</Route>
          </li>
          <li>
            <Route to="/contact">Contact</Route>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
