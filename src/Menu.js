import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  import {showMenu} from './actions'
  import StarTrek from './StarTrek.js'

  const routes =[
      {path: '/',
      exact: true,
      sidebar: () =><div>Home</div>,
      main: () => <h2>Home page </h2>
    },
      {path: '/events',
      exact: true,
      sidebar: () =><div>Events</div>,
      main: () => <h2>Events <StarTrek/></h2>
    },
      {path: '/aboutus',
      exact: true,
      sidebar: () =><div>About Us</div>,
      main: () => <h2>About Us page </h2>
    },
  ]




  const Sidebar = () =>(
    <Router>
        <div>
        <button className="Menubutton" onClick={showMenu} style={{
                padding: '1px',
                width: '3em',
              background: '#f0f0f0'
            }} >Menu</button>
        <div  className='Menu' style={{ display: 'flex' }}>
            <div id='Menu' style={{
                position:'absolute',
                padding: '1px',
                width: '20%',
              background: '#f0f0f0',
              display: 'none',
            }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/" onClick={showMenu}>Home</Link></li>
                <li><Link to="/events" onClick={showMenu}>Events</Link></li>
                <li><Link to="/aboutus" onClick={showMenu}>About us</Link></li>
            </ul>
        </div>
    </div>
    <div style={{ flex: 1, padding: '1px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
    
    </Router>
  )
  
export default Sidebar;