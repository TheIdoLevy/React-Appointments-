import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {ContactsPage} from './Pages/contactsPage'
import { AppointmentsPage } from './Pages/appointmentsPage';
import './App.css';


// The App component renders the contacts page and the appointments page according to the url (using React-Router-Dom)
function App() {
  const history = useHistory();
  return (
    <div>
          <Router>
            <Switch>
              <Route path="/contacts">
                <section id='contacts'>
                  <ContactsPage />
                </section>
              </Route>
              <Route path="/">
                <section id='appointments'>
                  <AppointmentsPage />
                </section>
              </Route>
            </Switch>
          </Router>
    </div>
  )
}

export default App;
