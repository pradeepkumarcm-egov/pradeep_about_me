import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
<Router>
  <div>
    <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
        </ul>

        <hr />
      <Switch>
            <Route path="/user">
              <App />
            </Route>
           <Route exact path="/">
                  <App />
            </Route>
       </Switch>
     </div>
 </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
