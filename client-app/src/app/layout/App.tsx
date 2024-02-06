import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import 'react-calendar/dist/Calendar.css';
import 'semantic-ui-css/semantic.min.css'
import './styles.css'
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';

function App() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === '/' ? <HomePage/> : (
        <>
          <NavBar />
          <Container style={{marginTop: '7em'}}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default observer(App);
