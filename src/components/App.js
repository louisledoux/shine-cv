import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import TopNav from './_partials/TopNav';
import SideNavbar from './_partials/SideNav';
import Motivation from './Motivation';
import Curriculum from './Curriculum';
import Contact from './Contact';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas, far);


const App = () => {

  return (
    <Router>
      <header>
        <Route path={['/motivation', '/curriculum', '/contact']}><TopNav /></Route>

        <SideNavbar />
      </header>

      <main>
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/motivation" component={Motivation}></Route>
              <Route path="/curriculum" component={Curriculum}></Route>
              <Route path="/contact"><Contact /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </div>
      </main>

      <footer className="page-footer main-footer">
        <div className="container">
          <div className="row">
            <div className="footer-copyright col s12 m12 xl9 offset-xl1">
              Aout 2020 - Louis Ledoux, réalisé spécialement pour Shine ～
              <a className="right" href="https://github.com/louisledoux" target="_blank" rel="noopener noreferrer">Pour le repository du site, c'est par ici !</a>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
